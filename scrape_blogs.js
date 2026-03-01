const { chromium } = require('playwright');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeBlogs() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    const allBlogs = [];
    const blogLinks = new Set();

    console.log("Fetching blog list pages...");
    // Let's check first 3 pages of blog
    for (let i = 1; i <= 3; i++) {
        const url = i === 1 ? 'https://limeinstitute.org/blog/' : `https://limeinstitute.org/blog/page/${i}/`;
        try {
            await page.goto(url, { waitUntil: 'load', timeout: 30000 });
            await page.waitForTimeout(2000);
            const content = await page.content();
            const $ = cheerio.load(content);

            const elements = $('.elementor-post, article, .blog-post, .cmsms_post');
            if (elements.length === 0) {
                // Try getting all links that look like blog posts
                $('a').each((_, el) => {
                    const href = $(el).attr('href');
                    if (href && href.includes('limeinstitute.org/') && !href.includes('/category/') && href.split('/').length > 4 && href.length > 35) {
                        blogLinks.add(href);
                    }
                });
            } else {
                elements.each((index, el) => {
                    const link = $(el).find('a').attr('href');
                    if (link) blogLinks.add(link);
                });
            }
        } catch (e) {
            console.log(`Failed to fetch page ${i}`, e.message);
        }
    }

    // Also query the sitemap
    try {
        await page.goto('https://limeinstitute.org/post-sitemap.xml', { waitUntil: 'load', timeout: 30000 });
        const sitemap = await page.content();
        const $ = cheerio.load(sitemap, { xmlMode: true });
        $('loc').each((_, el) => {
            const href = $(el).text();
            // Filter out non-blog pages
            if (href && href.includes('limeinstitute.org/') && !href.includes('/category/') && !href.includes('wp-json')) {
                blogLinks.add(href);
            }
        });
    } catch (e) { }

    const linksArray = Array.from(blogLinks).filter(l => l !== 'https://limeinstitute.org/' && l !== 'https://limeinstitute.org/blog/');
    console.log(`Found ${linksArray.length} potential blog links.`);

    let idCounter = 1;

    for (const url of linksArray.slice(0, 20)) { // limit to 20 to be fast
        console.log(`Scraping: ${url}`);
        try {
            await page.goto(url, { waitUntil: 'load', timeout: 30000 });
            await page.waitForTimeout(1500);
            const html = await page.content();
            const $ = cheerio.load(html);

            const title = $('h1').first().text().trim() || $('h2').first().text().trim();
            let image = $('img').first().attr('src') || '';

            const contentEl = $('.elementor-widget-theme-post-content, .entry-content, .post-content, main article');
            let contentHtml = '';
            if (contentEl.length > 0) {
                // Extract inner HTML for paragraphs and headers
                contentEl.find('img').remove(); // remove images to avoid broken links if any
                contentHtml = contentEl.html().trim();
            } else {
                // Fallback
                const pTags = $('p');
                pTags.each((_, el) => {
                    contentHtml += `<p>${$(el).text()}</p>`;
                });
            }

            if (!title || contentHtml.length < 50) continue;

            // Extract text for excerpt
            const excerpt = $('p').first().text().substring(0, 150) + '...';
            const date = $('.elementor-post-info__item--type-date, .entry-date, time').first().text().trim() || '2026';

            allBlogs.push({
                id: idCounter++,
                title: title,
                image: image,
                excerpt: excerpt,
                date: date,
                content: contentHtml,
                originalUrl: url,
                slug: url.split('/').filter(Boolean).pop() || `blog-post-${idCounter}`
            });

        } catch (e) {
            console.log(`Error scraping ${url}: ${e.message}`);
        }
    }

    console.log(`Successfully scraped ${allBlogs.length} articles.`);

    if (!fs.existsSync('src/data')) {
        fs.mkdirSync('src/data', { recursive: true });
    }
    fs.writeFileSync('src/data/limeBlogs.json', JSON.stringify(allBlogs, null, 2));
    console.log("Saved to src/data/limeBlogs.json");

    await browser.close();
}

scrapeBlogs();
