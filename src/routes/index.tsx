import { createFileRoute } from "@tanstack/react-router";
import { Check, Play, Star, ArrowUpRight } from "lucide-react";
import athlete from "@/assets/athlete.jpg";
import sneaker from "@/assets/sneaker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grow+ — AI-Powered User Content | Reelers" },
      { name: "description", content: "Drive sales growth and harness AI-powered user content — up to 50× faster." },
      { property: "og:title", content: "Grow+ — AI-Powered User Content | Reelers" },
      { property: "og:description", content: "Drive sales growth with AI-powered user content." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = ["Product", "Solutions", "Pricing", "Developers"];
const logos = ["Rakuten", "NCR", "monday.com", "Disney", "Dropbox"];

function Index() {
  return (
    <div className="bg-page min-h-screen p-4 md:p-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-card p-3 shadow-sm">
        <header className="flex flex-wrap items-center justify-between gap-4 px-8 py-5 text-sm font-semibold">
          <div className="flex items-center gap-3">
            <span className="flex gap-0.5"><span className="h-3 w-4 -rotate-45 rounded-full bg-primary" /><span className="h-3 w-4 -rotate-45 rounded-full bg-primary" /></span>
            <span>/ Sales@reelers.io</span>
          </div>
          <nav className="hidden items-center gap-4 md:flex">
            {nav.map((n, i) => (<span key={n} className="flex items-center gap-4">{i > 0 && <span>.</span>}<a href="#">{n}</a></span>))}
          </nav>
          <div className="flex items-center gap-6">
            <span className="hidden h-6 w-px bg-border md:block" />
            <a href="#">Log in</a>
            <a href="#" className="rounded-full border border-primary px-5 py-2.5">Get it Now <span className="font-normal">— It's Free</span></a>
          </div>
        </header>

        <section className="bg-hero grid gap-10 rounded-3xl px-8 py-16 md:grid-cols-2 md:px-14">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✦</span>
              <div className="font-display leading-tight"><p className="text-lg font-semibold">20M+ User</p><p className="text-sm">Read Our <a href="#" className="font-semibold underline">Success Stories</a></p></div>
            </div>
            <h1 className="font-display mt-6 text-8xl md:text-[9rem] leading-none tracking-tight">Grow<sup className="text-6xl font-light">+</sup></h1>
            <hr className="mt-8 border-foreground/20" />
            <p className="mt-6 text-lg leading-relaxed">Drive Sales Growth, And Harness Ai-Powered User Content — Up To 50× Faster.</p>
            <div className="mt-6 flex items-center gap-6 border-b border-foreground/20 pb-5 font-display text-sm">
              <img src={athlete} alt="" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
              <p>Loved the performance<br />100% Satisfied</p>
              <span>/</span>
              <span className="flex items-center gap-1 font-semibold"><Star className="h-3 w-3 fill-current" />4.9</span>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm font-semibold">
              <a href="#" className="rounded-full bg-primary px-6 py-3.5 text-primary-foreground">Download <span className="font-normal">— It's Free</span></a>
              <a href="#" className="flex items-center gap-1 underline">Our Pricing <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="relative mx-auto h-[500px] w-full max-w-[520px]">
            <div className="absolute left-[18%] top-0 h-full w-[56%] overflow-hidden rounded-3xl bg-brand">
              <img src={athlete} alt="Athlete in blue tank top" width={768} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute left-[12%] top-[20%] flex items-center gap-3 rounded-full bg-card px-4 py-2.5 text-sm shadow"><span className="flex h-5 w-5 items-center justify-center rounded bg-check-orange text-primary-foreground"><Check className="h-3 w-3 text-card" /></span>How is the fit?</div>
            <div className="absolute left-0 top-[30%] flex items-center gap-3 rounded-full bg-card px-4 py-2.5 text-sm shadow"><span className="flex h-5 w-5 items-center justify-center rounded bg-check-blue"><Check className="h-3 w-3 text-card" /></span>Do you like the design?</div>
            <button aria-label="Play" className="absolute left-[46%] top-[47%] flex h-14 w-14 items-center justify-center rounded-full bg-card shadow"><Play className="h-4 w-4 fill-current" /></button>
            <div className="glass absolute right-0 top-[5%] w-40 rounded-3xl p-5">
              <p className="text-[10px] font-semibold">— UP TO</p>
              <p className="mt-3 text-4xl font-bold">60%</p>
              <p className="mt-1 text-sm text-foreground/70">More sales this week</p>
            </div>
            <div className="glass absolute -right-4 bottom-[4%] flex w-72 items-center gap-4 rounded-3xl p-4">
              <img src={sneaker} alt="Sneaker" width={112} height={112} loading="lazy" className="h-28 w-28 rounded-2xl object-cover" />
              <div>
                <p className="text-lg leading-tight">Nike Shoes<br />Jordan</p>
                <p className="mt-1 text-2xl font-bold">$849.99</p>
                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-card px-2 py-0.5 text-sm font-semibold"><Star className="h-3 w-3 fill-current" />4.6</span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-around gap-6 px-8 py-10 text-2xl font-extrabold tracking-tight">
          {logos.map((l) => <span key={l}>{l}</span>)}
        </div>
      </div>
    </div>
  );
}
