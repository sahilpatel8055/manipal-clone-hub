import { ReactNode } from "react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

interface ToolLayoutProps {
  h1: string;
  intro: string;
  children: ReactNode;
  lastUpdated?: string;
}

/** Shared shell for the Phase 3 student tools — same chrome as every other page. */
const ToolLayout = ({ h1, intro, children, lastUpdated = "2026-08-01" }: ToolLayoutProps) => (
  <div className="min-h-screen bg-background">
    <NavigationHeader />
    <main className="container mx-auto px-4 py-6 md:py-10">
      <SeoBreadcrumbs />
      <header className="mb-6 md:mb-8 max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{h1}</h1>
        <p className="text-sm md:text-base text-muted-foreground">{intro}</p>
      </header>
      {children}
      <div className="mt-10">
        <EeatBlock lastUpdated={lastUpdated} />
      </div>
    </main>
    <RelatedContentSection />
    <Footer />
  </div>
);

export default ToolLayout;
