import { useState } from "react";
import { ArrowUp, CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send, XCircle } from "lucide-react";
import { navItems, personal } from "@/data/portfolioData";
import { Reveal, SectionHeading, SocialLinks, btnPrimary } from "./ui";

const empty = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Please enter a valid email.";
  if (v.subject.trim().length < 3) e.subject = "Please add a subject.";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

export function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("loading");
    try {
      // No storage: plug an email service in here later.
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  const field = (name, label, type = "text", textarea = false) => {
    const Tag = textarea ? "textarea" : "input";
    return (
      <div>
        <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}</label>
        <Tag id={name} name={name} type={type} rows={textarea ? 5 : undefined} value={values[name]}
          onChange={(e) => setValues({ ...values, [name]: e.target.value })}
          aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined}
          className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-accent" />
        {errors[name] && <p id={`${name}-err`} className="mt-1 text-xs text-destructive">{errors[name]}</p>}
      </div>
    );
  };

  const info = [
    { Icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
    { Icon: Linkedin, label: "LinkedIn", value: "View profile", href: personal.socials.linkedin },
    { Icon: Github, label: "GitHub", value: "View repositories", href: personal.socials.github },
    { Icon: MapPin, label: "Location", value: personal.location },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contact" title="Let's Work Together" />
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
          <Reveal className="space-y-4">
            <p className="text-muted-foreground">Have a dataset that needs answers, a role on your team, or a project in mind? I'd love to hear about it.</p>
            {info.map(({ Icon, label, value, href }) => (
              <div key={label} className="glass flex min-w-0 items-center gap-4 rounded-2xl p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-primary-foreground"><Icon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? <a href={href} className="block truncate font-medium hover:text-accent">{value}</a> : <p className="truncate font-medium">{value}</p>}
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">{field("name", "Name")}{field("email", "Email", "email")}</div>
              {field("subject", "Subject")}
              {field("message", "Message", "text", true)}
              <button type="submit" disabled={status === "loading"} className={`${btnPrimary} w-full disabled:opacity-70`}>
                {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Send Message</>}
              </button>
              <div aria-live="polite">
                {status === "success" && <p className="flex items-center gap-2 text-sm text-success"><CheckCircle2 className="h-4 w-4" /> Thanks! Your message is on its way.</p>}
                {status === "error" && <p className="flex items-center gap-2 text-sm text-destructive"><XCircle className="h-4 w-4" /> Something went wrong. Please try again.</p>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{personal.name}</p>
          <p className="text-sm text-accent">{personal.role}</p>
          <p className="mt-3 text-sm text-muted-foreground">Turning data into decisions with SQL, Python, Excel and Power BI.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navItems.map(({ id, label }) => <li key={id}><a href={`#${id}`} className="text-muted-foreground hover:text-foreground">{label}</a></li>)}
          </ul>
        </nav>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <SocialLinks />
          <a href="#home" className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm hover:text-accent"><ArrowUp className="h-4 w-4" /> Back to top</a>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {personal.name}. All Rights Reserved.</p>
    </footer>
  );
}
