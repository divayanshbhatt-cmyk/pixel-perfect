import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, Trophy } from "lucide-react";
import { personal } from "@/data/portfolioData";

export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </Reveal>
  );
}

export function SocialLinks({ className = "" }) {
  const links = [
    { href: personal.socials.github, label: "GitHub", Icon: Github },
    { href: personal.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${personal.email}`, label: "Email", Icon: Mail },
    personal.socials.kaggle && { href: personal.socials.kaggle, label: "Kaggle", Icon: Trophy },
  ].filter(Boolean);
  return (
    <ul className={`flex gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}
            className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition hover:-translate-y-0.5 hover:text-accent hover:shadow-glow">
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-110";
export const btnGhost =
  "glass inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent/50";
