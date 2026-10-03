// Dumps the numbered subtype list used by the classifier prompt, so the same
// task can be handed to another AI tool with identical candidate options.
const st = require("../public/site/products/subtypes.json");
const products = require("../public/site/products/products.json");

let n = 0;
const lines = [];
for (const [ps, forms] of Object.entries(st)) {
  const p = products.find((x) => x.slug === ps);
  for (const s of forms) {
    n += 1;
    lines.push(
      String(n).padStart(2, "0") +
        ". " +
        ps +
        "/" +
        s.slug +
        "  |  " +
        s.name +
        "  |  product: " +
        p.name,
    );
  }
}
require("fs").writeFileSync(__dirname + "/.subtype_prompt_list.txt", lines.join("\n"));
console.log(lines.join("\n"));
console.log("\ntotal: " + n);
