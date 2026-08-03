import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import SeoBreadcrumbs from "@/components/ui/seo-breadcrumbs";
import RelatedContentSection from "@/components/ui/related-content-section";
import EeatBlock from "@/components/ui/eeat-block";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <SeoBreadcrumbs />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground">
            Terms governing the use of Avadu.in services
          </p>
        </div>

        <Card>
          <CardContent className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-foreground leading-relaxed">
                By accessing, browsing, and using the Avadu.in website, you agree to be bound by these Terms & 
                Conditions, our Privacy Policy, and our Disclaimer. If you do not agree with any part of these 
                terms, you must not use our website.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Nature of Service</h2>
              <p className="text-foreground leading-relaxed">
                Avadu.in is an independent online platform that provides counseling and information about various 
                educational programs and universities. We are not officially affiliated with, partnered with, or 
                an agent of any of the universities mentioned on our website. Our service is limited to providing 
                information and neutral guidance to help you make informed decisions about your educational and 
                career choices.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. No Payment Processing</h2>
              <p className="text-foreground leading-relaxed">
                Avadu.in does not collect any payments from users, including registration fees, application fees, 
                or course fees. Our role is to guide you through the application process. All payments related to 
                university applications or course fees must be made directly on the official website of the 
                respective university. We are not responsible for any financial transactions you make with 
                third-party institutions.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Accuracy of Information</h2>
              <p className="text-foreground leading-relaxed">
                While we strive to ensure that all information on our website is accurate, we do not guarantee the 
                completeness, accuracy, or timeliness of the content. Information regarding universities, courses, 
                eligibility criteria, and fee structures is subject to change. It is your responsibility to verify 
                all details with the official university website or a university representative before making any 
                decisions.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
              <p className="text-foreground leading-relaxed">
                All content on Avadu.in, including text, graphics, logos, and the website name, is the property of 
                Avadu.in. All university names, logos, and trademarks displayed on the site are the intellectual 
                property of their respective owners and are used for informational purposes only. You are prohibited 
                from copying, reproducing, or distributing any content from this site without our prior written consent.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. User Responsibilities</h2>
              <p className="text-foreground leading-relaxed mb-3">By using our website, you agree to:</p>
              <ul className="space-y-2 ml-4 list-disc text-foreground">
                <li>Provide accurate and truthful information when filling out any forms</li>
                <li>Use our services for lawful purposes only</li>
                <li>Not engage in any activity that could harm, disable, or impair the website's functionality</li>
                <li>Respect the intellectual property rights of Avadu.in and third parties</li>
                <li>Not attempt to gain unauthorized access to our systems or data</li>
              </ul>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Links</h2>
              <p className="text-foreground leading-relaxed">
                Our website may contain links to third-party websites for your convenience. We have no control over 
                the content, policies, or practices of these sites and are not responsible for them. Your use of any 
                third-party website is at your own risk.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Communication Consent</h2>
              <p className="text-foreground leading-relaxed">
                By using our counseling services and providing your contact information, you consent to receive 
                communications from us via phone calls, SMS, WhatsApp, and email regarding educational opportunities, 
                course updates, and related services. You may opt out of these communications at any time by 
                contacting us.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Disclaimer of Warranties</h2>
              <p className="text-foreground leading-relaxed">
                The services and content on Avadu.in are provided "as is" and "as available" without any warranties 
                of any kind, either express or implied. We do not warrant that the website will be free from errors, 
                viruses, or other harmful components.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Limitation of Liability</h2>
              <p className="text-foreground leading-relaxed">
                In no event shall Avadu.in, its employees, or affiliates be liable for any direct, indirect, 
                incidental, special, or consequential damages arising out of your use or inability to use our website.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Governing Law</h2>
              <p className="text-foreground leading-relaxed">
                These Terms & Conditions are governed by the laws of India. Any legal action or proceeding related 
                to this website shall be brought exclusively in the courts of New Delhi, India.
              </p>
            </section>

            <Separator />

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Changes to the Terms & Conditions</h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to update these Terms & Conditions at any time. Any changes will be posted on 
                this page. Your continued use of the website after any changes constitutes your acceptance of the 
                new terms.
              </p>
            </section>

            <div className="bg-primary-light p-4 rounded-lg mt-6">
              <p className="text-sm text-foreground">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-sm text-foreground mt-2">
                For any questions regarding these Terms & Conditions, please contact us at legal@avadu.in
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

export default TermsConditions;