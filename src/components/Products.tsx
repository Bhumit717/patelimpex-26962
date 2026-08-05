import { Link } from "react-router-dom";
import riceImg from "@/assets/products/rice.png";
import wheatImg from "@/assets/products/sharbati-wheat.png";
import psylliumImg from "@/assets/products/psyllium-husk.png";
import groundnutImg from "@/assets/products/groundnut.png";
import cuminImg from "@/assets/products/cumin-seeds.png";

const Products = () => {
  return (
    <section id="products" className="section-rhythm bg-background">
      <div className="editorial-shell">
        {/* Section head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div>
            <span className="micro-label block mb-6">Commodities</span>
            <h2 className="display-lg text-4xl md:text-6xl text-foreground">
              The Export Index
            </h2>
            <div className="accent-rule mt-6 !w-16" />
          </div>

          <Link
            to="/products"
            className="link-underline text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground"
          >
            View all products
          </Link>
        </div>

        {/* Bento wall */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {/* 01 — Rice (feature tile) */}
          <Link
            to="/products/rice"
            className="md:col-span-2 md:row-span-2 bg-[hsl(var(--paper-deep))] p-8 flex flex-col justify-between group overflow-hidden relative min-h-[320px] hover-lift transition-colors duration-700 hover:bg-[hsl(var(--accent-wash))]"
          >
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">01</span>
              <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mt-4 text-foreground">
                Premium Rice
              </h3>
            </div>
            <img
              src={riceImg}
              alt="Premium Indian basmati rice for export"
              loading="lazy"
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-h-[45%] object-contain opacity-90 group-hover:scale-105 transition-transform duration-[1200ms]"
            />
            <div className="relative z-10">
              <p className="max-w-xs text-sm mb-6 text-muted-foreground leading-relaxed">
                Long-grain Basmati 1121 and non-basmati varieties processed with precision at our
                dedicated milling facilities.
              </p>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] border-b border-foreground pb-1 text-foreground group-hover:pr-4 transition-all duration-500">
                Explore specs
              </span>
            </div>
          </Link>

          {/* 02 — Wheat */}
          <Link
            to="/products/wheat"
            className="md:col-span-2 bg-accent-ink text-[hsl(var(--paper))] p-8 flex flex-col justify-between group min-h-[220px] hover-lift"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">02</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mt-2">
                Golden Wheat
              </h3>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-[11px] uppercase tracking-[0.25em] opacity-60">Export Grade A</p>
              <span className="w-9 h-9 border border-white/30 flex items-center justify-center text-sm group-hover:bg-[hsl(var(--paper))] group-hover:text-[hsl(var(--ink))] transition-all duration-500">
                &rarr;
              </span>
            </div>
          </Link>

          {/* 03 — Cumin */}
          <Link
            to="/products/cumin-seeds"
            className="bg-[hsl(var(--ink))] text-[hsl(var(--paper))] p-6 flex flex-col justify-between group min-h-[180px] hover-lift"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight">Cumin Seeds</h3>
            <div className="flex items-end justify-between">
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-70">Purity 99.5%</p>
              <img
                src={cuminImg}
                alt="Machine cleaned Indian cumin seeds"
                loading="lazy"
                className="w-14 h-14 object-contain opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </Link>

          {/* 04 — Groundnut */}
          <Link
            to="/products/groundnut"
            className="bg-background border border-border p-6 flex flex-col justify-between group min-h-[180px] hover-lift transition-colors duration-700 hover:border-[hsl(var(--accent-ink))]"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
              Groundnuts
            </h3>
            <div className="flex items-end justify-between">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                HPS Bold / Java
              </p>
              <img
                src={groundnutImg}
                alt="Bold and Java groundnut kernels"
                loading="lazy"
                className="w-14 h-14 object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </Link>

          {/* 05 — Psyllium */}
          <Link
            to="/products/psyllium-husk"
            className="md:col-span-2 bg-[hsl(var(--paper-deep))] p-8 flex items-center justify-between gap-6 group min-h-[180px] hover-lift transition-colors duration-700 hover:bg-[hsl(var(--accent-wash))]"
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">05</span>
              <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground">
                Psyllium Husk
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-xs text-right max-w-[150px] italic text-muted-foreground leading-relaxed">
                Global pharmaceutical &amp; dietary grade standards.
              </p>
              <img
                src={psylliumImg}
                alt="Psyllium husk (isabgol) for export"
                loading="lazy"
                className="hidden sm:block w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </Link>
        </div>

        {/* Wheat flour secondary line */}
        <div className="mt-4 grid grid-cols-1">
          <Link
            to="/products/wheat-flour"
            className="border border-border px-8 py-6 flex items-center justify-between gap-6 group transition-colors duration-700 hover:border-[hsl(var(--accent-ink))]"
          >
            <div className="flex items-center gap-6">
              <span className="font-display text-3xl font-black text-[hsl(var(--hairline))]">06</span>
              <h3 className="font-display text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">
                Wheat Flour &amp; Milled Grains
              </h3>
              <img
                src={wheatImg}
                alt="Sharbati wheat grain"
                loading="lazy"
                className="hidden md:block w-10 h-10 object-contain"
              />
            </div>
            <span className="link-underline text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground">
              View specification
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
