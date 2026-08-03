import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SEOHead from "@/components/ui/seo-head";
import SEOInternalLinks from "@/components/ui/seo-internal-links";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSchema, FaqItem } from "@/lib/seo/schema";
import { useCounselingForm } from "@/hooks/use-counseling-form";

export interface AuthoritySection {
  id: string;
  heading: string;
  content: React.ReactNode;
}

interface AuthorityPageProps {
  h1: string;
  /** Small eyebrow label above the H1. */
  eyebrow?: string;
  intro: string;
  /** Quick stat chips under the intro. */
  facts?: { label: string; value: string }[];
  breadcrumbs?: { name: string; path: string }[];
  sections: AuthoritySection[];
  faqs?: FaqItem[];
  /** Extra JSON-LD nodes on top of the FAQ schema. */
  structuredData?: object | object[];
  ctaTitle?: string;
  ctaDescription?: string;
  pageType?: "university" | "course" | "blog" | "hub";
}

const AuthorityPage: React.FC<AuthorityPageProps> = ({
  h1,
  eyebrow,
  intro,
  facts = [],
  breadcrumbs = [],
  sections,
  faqs = [],
  structuredData,
  ctaTitle = "Not sure which university fits you?",
  ctaDescription =
    "Talk to an AVEDU counsellor for a free, no-obligation shortlist based on your budget, eligibility and career goal.",
  pageType = "hub",
}) => {
  const { openForm, CounselingFormComponent } = useCounselingForm();

  const extra = Array.isArray(structuredData)
    ? structuredData
    : structuredData
      ? [structuredData]
      : [];
  const schema = faqs.length ? [...extra, faqSchema(faqs)] : extra;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead structuredData={schema.length ? schema : undefined} />
      <NavigationHeader />

      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-10 md:pb-14 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          {breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1 text-xs md:text-sm text-muted-foreground mb-4"
            >
              {breadcrumbs.map((c, i) => (
                <span key={c.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3 w-3" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-foreground font-medium">{c.name}</span>
                  ) : (
                    <Link to={c.path} className="hover:text-primary transition-colors">
                      {c.name}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          )}

          {eyebrow && (
            <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15 border-0">
              {eyebrow}
            </Badge>
          )}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl">
            {h1}
          </h1>
          <p className="mt-4 text-sm md:text-lg text-muted-foreground max-w-3xl">{intro}</p>

          {facts.length > 0 && (
            <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-3xl">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-lg border border-border bg-card px-3 py-2 md:px-4 md:py-3"
                >
                  <dt className="text-[0.65rem] md:text-xs uppercase tracking-wide text-muted-foreground">
                    {f.label}
                  </dt>
                  <dd className="text-sm md:text-base font-semibold text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={openForm}>Get free counselling</Button>
            <Button variant="outline" asChild>
              <Link to="/universities">Compare universities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[240px_1fr] gap-8">
            {/* On this page */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                  On this page
                </p>
                <ul className="space-y-2 text-sm">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                  {faqs.length > 0 && (
                    <li>
                      <a
                        href="#faqs"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        FAQs
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </aside>

            <div className="min-w-0 space-y-8 md:space-y-12">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
                    {s.heading}
                  </h2>
                  <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed [&_strong]:text-foreground">
                    {s.content}
                  </div>
                </article>
              ))}

              {faqs.length > 0 && (
                <article id="faqs" className="scroll-mt-28">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
                    Frequently asked questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((f, i) => (
                      <AccordionItem key={f.question} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left text-sm md:text-base">
                          {f.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-base text-muted-foreground">
                          {f.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </article>
              )}

              {/* CTA */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-8">
                <h2 className="text-lg md:text-2xl font-bold text-foreground">{ctaTitle}</h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
                  {ctaDescription}
                </p>
                <Button className="mt-4" onClick={openForm}>
                  Talk to a counsellor
                </Button>
              </div>

              <SEOInternalLinks pageType={pageType} />
            </div>
          </div>
        </div>
      </section>

      <EeatBlock />
      <RelatedContentSection />
      <Footer />
      <CounselingFormComponent />

    </div>
  );
};

export default AuthorityPage;
