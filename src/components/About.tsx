import qualityControlLabImg from "@/assets/quality-control-lab.jpg";

const About = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "100%", label: "Traceability" },
    { value: "ISO", label: "9001:2015 Quality" },
  ];

  const values = [
    { title: "Our Mission", desc: "To deliver the essence of agro resources with uncompromising quality." },
    { title: "Quality First", desc: "Rigorous inspection and documented standards for every shipment." },
    { title: "Global Reach", desc: "Connecting Indian growers to the world's most demanding markets." },
    { title: "Client Centric", desc: "Long-term trust built on transparency and reliable delivery." },
  ];

  return (
    <section id="about" className="section-rhythm border-t border-border bg-background">
      <div className="editorial-shell">
        {/* Legacy of trust */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-20 md:mb-28">
          <div className="flex-1">
            <span className="micro-label block mb-6">Origins</span>
            <h2 className="display-lg text-4xl md:text-5xl text-foreground mb-8">Legacy of Trust</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Patel Impex stands at the intersection of traditional farming wisdom and modern
              logistical prowess. We don&apos;t just export produce; we export the integrity of
              Indian soil.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Based in Gujarat&apos;s trade corridor, our expertise spans grains, oil seeds and
              spices — every container carrying the Patel Impex seal meets international benchmarks
              of purity.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-border pt-6">
                <div className="font-display text-4xl md:text-5xl font-black text-foreground">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality plate */}
        <div className="grid md:grid-cols-12 gap-4 mb-20 md:mb-28">
          <div className="md:col-span-7 border border-border overflow-hidden group">
            <img
              src={qualityControlLabImg}
              alt="Patel Impex quality control laboratory inspecting agro commodities"
              loading="lazy"
              className="w-full h-full object-cover aspect-[4/3] grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1500ms]"
            />
          </div>
          <div className="md:col-span-5 bg-[hsl(var(--paper-deep))] p-8 md:p-10 flex flex-col justify-between">
            <span className="micro-label">Quality Protocol</span>
            <div>
              <p className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground leading-tight mb-6">
                Every lot inspected, sampled and documented before dispatch.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Moisture, purity, sortex grade and packaging are verified against buyer
                specification and destination regulation.
              </p>
            </div>
          </div>
        </div>

        {/* Values index */}
        <div className="grid md:grid-cols-4 border-t border-border">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border last:border-r-0"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground mt-4 mb-3">
                {v.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
