import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "@/data/portfolioData";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const link = (id, mobile) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition ${
      active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    } ${mobile ? "block text-base" : ""}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "glass border-x-0 border-t-0" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand font-display text-sm font-bold text-primary-foreground">
            {personal.initials}
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display font-semibold">{personal.name}</span>
            <span className="block text-xs text-muted-foreground">{personal.role}</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={link(id)} aria-current={active === id ? "page" : undefined}>
                {label}
                <span className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 ${active === id ? "scale-x-100" : "scale-x-0"}`} />
              </a>
            </li>
          ))}
        </ul>
        <button className="glass grid h-10 w-10 place-items-center rounded-lg lg:hidden" onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div id="mobile-menu" className={`glass mx-4 overflow-hidden rounded-2xl transition-all duration-300 lg:hidden ${open ? "max-h-[480px] p-3 opacity-100" : "pointer-events-none max-h-0 border-0 opacity-0"}`}>
        <ul>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`${link(id, true)} ${active === id ? "bg-secondary" : ""}`}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
