import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import { About, Skills, Education, Achievements, Projects, Experience } from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { personal } from "@/data/portfolioData";

const title = `${personal.name} | Data Analyst Portfolio`;
const description = `Portfolio of ${personal.name}, a Data Analyst specializing in Python, SQL, Excel, Power BI, data visualization and business analytics.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
