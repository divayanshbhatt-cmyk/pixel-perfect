import { useMemo, useState } from "react";
import {
  Award, BarChart3, BookOpen, Briefcase, Code2, Database, Download, ExternalLink,
  Github, GraduationCap, MapPin, PieChart, Wrench, LineChart,
} from "lucide-react";
import { about, achievements, education, experience, personal, projectFilters, projects, skills } from "@/data/portfolioData";
import { Reveal, SectionHeading, btnPrimary } from "./ui";

const icons = { BarChart3, PieChart, Database, Code2, Wrench };
const wrap = "mx-auto max-w-6xl px-4 sm:px-6";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="About me" title="Curious about data, focused on impact" />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal className="space-y-4 text-muted-foreground">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <a href={personal.resumeUrl} className={`${btnPrimary} mt-4`} download><Download className="h-4 w-4" /> Download Resume</a>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="glass rounded-2xl p-6 transition hover:border-primary/40">
                <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Skills" title="Tools I work with" subtitle="Grouped by how I use them across the analysis workflow." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => {
            const Icon = icons[g.icon] || BarChart3;
            return (
              <Reveal key={g.category} delay={i * 70} className="glass group rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground"><Icon className="h-5 w-5" /></span>
                  <h3 className="text-lg font-semibold">{g.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-lg border bg-secondary/60 px-3 py-1 text-sm text-secondary-foreground transition group-hover:border-primary/30">{s}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Timeline({ items, render, Icon }) {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-primary/30 pl-8 sm:pl-10">
      {items.map((item, i) => (
        <Reveal as="li" key={i} delay={i * 80} className="relative mb-10 last:mb-0">
          <span className="absolute -left-[3.05rem] top-1 grid h-9 w-9 place-items-center rounded-full bg-brand text-primary-foreground shadow-glow sm:-left-[3.55rem]"><Icon className="h-4 w-4" /></span>
          <div className="glass rounded-2xl p-6">{render(item)}</div>
        </Reveal>
      ))}
    </ol>
  );
}

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Education" title="Academic background" />
        <Timeline items={education} Icon={GraduationCap} render={(e) => (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">{e.duration}</p>
            <h3 className="mt-1 text-xl font-semibold">{e.degree}</h3>
            <p className="text-muted-foreground">{e.institution}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium"><BookOpen className="h-4 w-4 text-primary" /> Relevant coursework</p>
            <ul className="mt-2 flex flex-wrap gap-2">{e.coursework.map((c, i) => <li key={i} className="rounded-md bg-secondary px-2.5 py-1 text-xs">{c}</li>)}</ul>
            <p className="mt-4 text-sm text-muted-foreground">{e.achievements}</p>
          </>
        )} />
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Achievements" title="Certifications & recognition" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={i} delay={i * 70} className="glass flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-pink/40">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-pink/15 text-pink"><Award className="h-5 w-5" /></span>
              <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.organization} · {a.date}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.description}</p>
              {a.link && <a href={a.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">View certificate <ExternalLink className="h-3.5 w-3.5" /></a>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }) {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-scale-in">
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {p.image ? (
          <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="grid-pattern grid h-full w-full place-items-center bg-gradient-to-br from-primary/25 via-transparent to-accent/20" role="img" aria-label="Project image placeholder">
            <LineChart className="h-12 w-12 text-accent/70 transition group-hover:scale-110" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <p className="mt-2 text-sm"><span className="font-medium text-accent">Problem: </span><span className="text-muted-foreground">{p.problem}</span></p>
        <ul className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-md bg-primary/15 px-2.5 py-1 text-xs text-foreground">{t}</li>)}</ul>
        <div className="mt-auto flex gap-4 pt-5 text-sm font-medium">
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"><Github className="h-4 w-4" /> Code</a>
          <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"><ExternalLink className="h-4 w-4" /> Live demo</a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("All");
  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter))), [filter]);
  return (
    <section id="projects" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Projects" title="Selected analysis work" subtitle="Example project slots — replace them with your real case studies." />
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} aria-pressed={filter === f}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === f ? "bg-brand text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}>
              {f}
            </button>
          ))}
        </div>
        <div key={filter} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className={wrap}>
        <SectionHeading eyebrow="Experience" title="Where I've applied my skills" />
        <Timeline items={experience} Icon={Briefcase} render={(x) => (
          <>
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">{x.position}</h3>
                <p className="text-muted-foreground">{x.company}</p>
              </div>
              <div className="shrink-0 text-sm text-muted-foreground sm:text-right">
                <p className="font-semibold text-accent">{x.duration}</p>
                <p className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{x.location}</p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {[...x.responsibilities, ...x.contributions].map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2">{x.tools.map((t, i) => <li key={i} className="rounded-md bg-secondary px-2.5 py-1 text-xs">{t}</li>)}</ul>
          </>
        )} />
      </div>
    </section>
  );
}
