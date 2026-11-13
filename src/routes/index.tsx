import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { ChevronsRight, Instagram, Facebook, Dribbble, ArrowUpRight, Menu } from "lucide-react";
import player from "@/assets/player.png";
import sky from "@/assets/balls-sky.jpg";
import shoe from "@/assets/pink-shoe.jpg";
import jersey from "@/assets/pink-jersey.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FLARE — Own The Court | Limited Edition Courtwear" },
      { name: "description", content: "Performance made to shine. Limited edition basketball courtwear for players who never blend in." },
      { property: "og:title", content: "FLARE — Own The Court" },
      { property: "og:description", content: "Limited edition courtwear for players who never blend in." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

const nav = ["new drop", "courtwear", "accessories", "stories"];
const products = [
  { img: shoe, name: "Flare Glitter High", price: "$289", tag: "Footwear" },
  { img: jersey, name: "Dreamers Jersey 23", price: "$129", tag: "Courtwear" },
  { img: sky, name: "Sparkle Ball Pro", price: "$89", tag: "Accessories" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* HERO */}
      <section className="flex min-h-screen flex-col p-3">
        <header className="flex items-center justify-between px-6 py-4">
          <div className="font-display text-xl font-extrabold tracking-[0.35em]">FLARE</div>
          <nav className="hidden gap-10 text-sm md:flex">
            {nav.map((n, i) => <a key={n} href="#" className="transition hover:text-primary"><sup className="mr-1 text-muted-foreground">0{i + 1}</sup>{n}</a>)}
          </nav>
          <div className="flex items-center gap-5">
            <a href="#shop" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold tracking-widest text-primary-foreground transition hover:scale-105">BUY NOW</a>
            <Menu className="h-6 w-6" />
          </div>
        </header>

        <div className="bg-hero relative flex-1 overflow-hidden rounded-[2rem]">
          <div className="text-outline font-display pointer-events-none absolute inset-x-0 top-10 select-none text-center text-[16vw] font-black leading-none">THE COURT</div>
          <div className="relative grid h-full min-h-[640px] grid-cols-1 md:grid-cols-3">
            <div className="z-10 flex flex-col justify-center gap-6 p-8 md:p-12">
              <Reveal><div className="flex justify-between text-xs tracking-widest text-muted-foreground"><span>[ LIMITED EDITION</span><span>2026 ]</span></div></Reveal>
              <Reveal delay={100}><h1 className="font-display text-6xl font-extrabold leading-[0.95] md:text-8xl">OWN<br />THE<br />COURT</h1></Reveal>
              <Reveal delay={200}>
                <div className="glass flex items-center justify-between rounded-2xl p-5">
                  <div><p className="text-3xl font-bold">80K+</p><p className="text-xs text-muted-foreground">Trusted by precision players</p></div>
                  <div className="flex -space-x-3"><span className="h-11 w-11 rounded-full border-2 border-background bg-muted" /><span className="h-11 w-11 rounded-full border-2 border-background bg-primary" /></div>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground"><ChevronsRight className="h-5 w-5" /></span>
                  <p>Performance made to shine.<br />Designed for players who never blend in.</p>
                </div>
              </Reveal>
            </div>
            <div className="relative flex items-end justify-center">
              <img src={player} alt="Athlete holding a pink glitter basketball" width={896} height={1152} className="relative z-10 max-h-[90vh] w-auto object-contain object-bottom" />
            </div>
            <div className="z-10 flex flex-col justify-between p-8 md:p-12">
              <div className="flex justify-end gap-4">
                <img src={sky} alt="Pink basketballs in the sky" width={176} height={176} className="float h-44 w-44 rounded-2xl border-4 border-foreground/10 object-cover" />
                <div className="glass flex flex-col gap-4 rounded-full p-2">
                  {[Instagram, Facebook, Dribbble].map((I, i) => <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-primary"><I className="h-4 w-4" /></a>)}
                </div>
              </div>
              <Reveal delay={400}><h2 className="font-display text-right text-6xl font-extrabold leading-[0.95] md:text-8xl">PLAY<br />BOLD</h2></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border py-6">
        <div className="marquee flex w-max gap-12 font-display text-4xl font-extrabold">
          {Array.from({ length: 2 }).flatMap((_, k) => ["SHINE", "✦", "OWN THE COURT", "✦", "PLAY BOLD", "✦", "LIMITED 2026", "✦"].map((w, i) => <span key={`${k}-${i}`} className={w === "✦" ? "text-primary" : ""}>{w}</span>))}
        </div>
      </div>

      {/* STATS */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-28 md:grid-cols-3">
        {[["80K+", "Players worldwide"], ["24", "Pro teams equipped"], ["4.9★", "Average rating"]].map(([n, l], i) => (
          <Reveal key={l} delay={i * 120}>
            <div className="glass rounded-3xl p-10">
              <p className="font-display text-6xl font-extrabold text-primary">{n}</p>
              <p className="mt-3 text-muted-foreground">{l}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* PRODUCTS */}
      <section id="shop" className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal><div className="mb-12 flex items-end justify-between"><h2 className="font-display text-5xl font-extrabold md:text-7xl">THE NEW<br />DROP</h2><a href="#" className="flex items-center gap-1 text-sm underline">View all <ArrowUpRight className="h-4 w-4" /></a></div></Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 150}>
              <div className="group overflow-hidden rounded-3xl bg-card">
                <div className="overflow-hidden"><img src={p.img} alt={p.name} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" /></div>
                <div className="flex items-center justify-between p-6">
                  <div><p className="text-xs tracking-widest text-muted-foreground">{p.tag.toUpperCase()}</p><p className="mt-1 text-lg font-semibold">{p.name}</p></div>
                  <span className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">{p.price}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-28 md:grid-cols-2">
        <Reveal><img src={sky} alt="Floating basketballs" loading="lazy" width={816} height={816} className="aspect-square w-full rounded-[2rem] object-cover" /></Reveal>
        <Reveal delay={150}>
          <p className="text-xs tracking-widest text-primary">[ OUR STORY ]</p>
          <h2 className="font-display mt-4 text-5xl font-extrabold leading-none md:text-6xl">MADE FOR PLAYERS WHO NEVER BLEND IN</h2>
          <p className="mt-6 text-lg text-muted-foreground">Every FLARE piece is engineered for grip, breathability and movement — then finished with a shine that turns the court into your stage.</p>
          <a href="#shop" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 font-semibold tracking-widest text-primary-foreground transition hover:scale-105">SHOP THE DROP</a>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="px-3 pb-3">
        <Reveal>
          <div className="bg-hero rounded-[2rem] px-6 py-24 text-center">
            <h2 className="font-display text-6xl font-extrabold md:text-8xl">JOIN THE <span className="text-primary">FLARE</span></h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">Early access to limited drops and member-only colorways.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-10 flex max-w-md gap-2 rounded-full bg-card p-2">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent px-4 outline-none placeholder:text-muted-foreground" />
              <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Subscribe</button>
            </form>
          </div>
        </Reveal>
        <footer className="flex justify-between px-6 py-8 text-sm text-muted-foreground"><span className="font-display font-extrabold tracking-[0.35em] text-foreground">FLARE</span><span>© 2026 Flare Courtwear</span></footer>
      </section>
    </div>
  );
}
