import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Disclaimer</h1>
          <p className="text-muted-foreground">
            Important information about Avadu.in services and content
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Independent Platform</h2>
              <p className="text-foreground leading-relaxed">
                Avadu.in is an independent online counseling and information platform. We are not officially 
                affiliated with, endorsed by, or partnered with any of the universities, educational institutions, 
                or their brands mentioned on this website. Our sole purpose is to serve as an informational guide 
                to help users explore online courses and universities in one centralized location.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Accuracy of Information</h2>
              <p className="text-foreground leading-relaxed">
                While we strive to provide accurate and up-to-date information, the content on Avadu.in is for 
                general informational purposes only. We collect data from various public sources, and there may be 
                changes or discrepancies. We do not make any warranties or guarantees regarding the completeness, 
                reliability, or accuracy of this information. We strongly advise all users to verify any 
                information—including but not limited to program details, eligibility criteria, and fee 
                structures—directly with the respective university's official website or official representatives 
                before making any decisions.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Use of University Trademarks and Logos</h2>
              <p className="text-foreground leading-relaxed">
                All university names, logos, images, program details, and accreditation information displayed on 
                Avadu.in are the intellectual property of their respective owners. These are used strictly for 
                informational and educational purposes to help users identify and learn about different institutions. 
                The use of these trademarks and logos does not imply an endorsement, partnership, or affiliation 
                with Avadu.in.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. No Professional Advice</h2>
              <p className="text-foreground leading-relaxed">
                The content on this website, including all information provided in our counseling sessions, is 
                intended for guidance only and does not constitute professional, financial, or legal advice. Our 
                expert counselors provide neutral opinions to help you select a suitable career path, course, and 
                university. The ultimate responsibility for any decision made rests solely with the user.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Links</h2>
              <p className="text-foreground leading-relaxed">
                Avadu.in may contain links to external, third-party websites, including the official websites of 
                universities. These links are provided for your convenience and for informational purposes only. We 
                are not responsible for the content, accuracy, or privacy practices of these external sites. 
                Accessing any third-party link from our website is at your own risk.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. User Responsibility</h2>
              <p className="text-foreground leading-relaxed">
                Your use of our website and its content is entirely at your own risk. Avadu.in provides its 
                services on an "as is" and "as available" basis. We are not liable for any direct or indirect 
                damages, losses, or expenses arising from your use of this website.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Changes to Disclaimer</h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to update this disclaimer at any time. Any changes will be posted on this 
                page, and we encourage you to review this disclaimer periodically to stay informed about how we 
                are protecting our users and the information we provide.
              </p>
            </section>

            <div className="bg-primary-light p-4 rounded-lg mt-6">
              <p className="text-sm text-foreground">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-sm text-foreground mt-2">
                If you have any questions about this disclaimer, please contact us at info@avadu.in
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <RelatedContentSection />
      <EeatBlock />
      <Footer />
    </div>
  );
};

export default Disclaimer;