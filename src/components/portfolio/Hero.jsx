import { ArrowRight, Send } from "lucide-react";
import { personal } from "@/data/portfolioData";
import { SocialLinks, btnPrimary, btnGhost } from "./ui";

const dots = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100, top: (i * 53) % 100, delay: (i % 7) * 0.4, size: 2 + (i % 3),
}));

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-pattern absolute inset-0" />
      <div className="animate-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl sm:h-96 sm:w-96" />
      <div className="animate-blob absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl [animation-delay:-6s]" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-pink/15 blur-3xl [animation-delay:-12s]" />
      {dots.map((d, i) => (
        <span key={i} className="animate-twinkle absolute rounded-full bg-accent"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size, animationDelay: `${d.delay}s` }} />
      ))}
      <svg className="absolute bottom-10 right-0 hidden h-48 w-[45%] opacity-40 md:block" viewBox="0 0 400 150" fill="none">
        <path className="animate-dash" d="M0 120 L60 100 L110 110 L170 60 L230 75 L290 30 L350 45 L400 10" stroke="url(#g)" strokeWidth="2" />
        <defs><linearGradient id="g" x1="0" x2="1"><stop stopColor="var(--primary)" /><stop offset="1" stopColor="var(--accent)" /></linearGradient></defs>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16">
      <HeroBackground />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-in text-center md:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_10px_var(--success)]" /> Available for Opportunities
          </span>
          <p className="mt-6 text-lg text-muted-foreground">Hi, I'm <span className="font-semibold text-foreground">{personal.name}</span></p>
          <h1 className="mt-2 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"><span className="text-gradient">Data Analyst</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg md:mx-0">{personal.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href="#projects" className={btnPrimary}>View My Projects <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className={btnGhost}>Contact Me <Send className="h-4 w-4" /></a>
          </div>
          <SocialLinks className="mt-8 justify-center md:justify-start" />
        </div>
        <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs">
          <div className="animate-float relative aspect-square">
            <div className="animate-spin-slow absolute -inset-1 rounded-full bg-[conic-gradient(var(--primary),var(--pink),var(--accent),var(--primary))] opacity-80 blur-sm" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background bg-secondary">
              {personal.photo ? (
                <img src={personal.photo} alt={`Portrait of ${personal.name}`} className="h-full w-full object-cover" />
              ) : (
                <div className="grid h-full w-full place-items-center bg-brand/20 font-display text-6xl font-bold text-gradient" role="img" aria-label="Profile photo placeholder">{personal.initials}</div>
              )}
            </div>
            <div className="glass absolute -left-4 bottom-6 rounded-xl px-3 py-2 text-xs"><span className="font-semibold text-accent">SQL</span> · Python</div>
            <div className="glass absolute -right-4 top-6 rounded-xl px-3 py-2 text-xs"><span className="font-semibold text-pink">Power BI</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
