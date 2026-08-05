import { Link } from "react-router-dom";

const commodities = [
 "Basmati Rice",
 "Raw Cotton",
 "Turmeric",
 "Sesame Seeds",
 "Groundnut",
 "Wheat Flour",
 "Red Chilli",
 "Cumin",
 "Soybean Meal",
 "Jaggery",
];

const markers = [
  { value: "40+", label: "Export markets" },
  { value: "15 yrs", label: "Trade heritage" },
  { value: "ISO", label: "Certified supply" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-32 md:pt-40" aria-label="Introduction">
      {/* soft brand wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] animate-float opacity-[0.07]"
        style={{ background: "var(--gradient-brand)", filter: "blur(90px)" }}
      />

      <div className="editorial-shell relative">
        <span className="accent-chip mb-8 animate-fade-in">
          Established 2010 &bull; India
        </span>

        <h1 className="display-xl text-[13vw] md:text-[12vw] text-foreground mb-10 animate-slide-up">
          The Fine <br />Art of{" "}
          <span className="italic text-accent-ink">Agro.</span>
        </h1>

        <div className="hairline-rule mb-12 !w-40 animate-scale-in" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end pb-16 md:pb-20">
          <p className="text-lg md:text-xl max-w-md leading-relaxed text-muted-foreground animate-fade-in stagger-1">
            Bridging India&apos;s agricultural heritage with global demand through uncompromising
            quality and precise export logistics.
          </p>
          <div className="flex flex-col items-start md:items-end gap-5 animate-fade-in stagger-2">
            <p className="text-[11px] uppercase tracking-[0.25em] md:text-right text-muted-foreground leading-relaxed">
              Sourcing excellence across <br className="hidden md:block" />five core continents
            </p>
            <Link
              to="/inquiry"
              className="group inline-flex items-center gap-3 border border-foreground px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-foreground transition-colors duration-500 hover:border-transparent hover:text-[hsl(var(--paper))]"
              style={{ backgroundImage: "none" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "hsl(var(--accent-ink))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              Request a quotation
              <span className="transition-transform duration-500 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Credibility markers */}
      <div className="border-y border-border bg-[hsl(var(--paper-deep))]">
        <div className="editorial-shell grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {markers.map((m) => (
            <div key={m.label} className="hover-lift px-0 sm:px-8 py-8 first:sm:pl-0 last:sm:pr-0">
              <p className="font-display text-4xl md:text-5xl font-black tracking-tighter text-accent-ink">
                {m.value}
              </p>
              <p className="micro-label mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Commodity marquee */}
      <div className="marquee-mask overflow-hidden border-b border-border py-5">
        <div className="marquee-track">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex shrink-0" aria-hidden={pass === 1}>
              {commodities.map((c) => (
                <span
                  key={`${pass}-${c}`}
                  className="flex items-center gap-6 px-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
                >
                  {c}
                  <span className="h-1 w-1 bg-[hsl(var(--hairline))]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
