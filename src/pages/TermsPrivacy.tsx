import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPrivacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service &amp; Privacy Policy</h1>
          
          {/* Terms of Service Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Terms of Service</h2>
            <p className="text-sm text-muted-foreground mb-6">Last updated: 2025.11.01</p>
            
            <p className="mb-6 text-foreground leading-relaxed">
              Welcome to Canadian Nuclear Safety Services Inc. ("CNSS," "we," "our," "us"). 
              By accessing or using our website, you agree to these Terms of Service. If you do not 
              agree, please do not use this site.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">1. Use of Website</h3>
                <p className="text-foreground leading-relaxed">
                  This website is provided for informational purposes only. You agree not to misuse 
                  the site, interfere with its operation, or attempt unauthorized access to any part of it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">2. Quotes and Submissions</h3>
                <p className="text-foreground leading-relaxed">
                  When you request information or a quote through our submission form, you agree to 
                  provide accurate and complete information. We will respond in good faith but do not 
                  guarantee a quote or service will be offered.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">3. Intellectual Property</h3>
                <p className="text-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the 
                  property of CNSS or its licensors and is protected by Canadian copyright and trademark 
                  law. You may not reproduce, modify, or distribute any content without prior written permission.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">4. Limitation of Liability</h3>
                <p className="text-foreground leading-relaxed">
                  The information on this website is provided "as is" without warranties of any kind. 
                  CNSS is not liable for any damages arising from the use of this site or reliance on 
                  its content.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">5. External Links</h3>
                <p className="text-foreground leading-relaxed">
                  Our website may contain links to third-party websites. CNSS is not responsible for 
                  the content or practices of those sites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">6. Governing Law</h3>
                <p className="text-foreground leading-relaxed">
                  These Terms are governed by the laws of the Province of Ontario and the laws of Canada. 
                  Any disputes will be resolved in the courts located in Ontario.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-primary">Privacy Policy</h2>
            <p className="text-sm text-muted-foreground mb-6">Last updated: 2025.11.01</p>
            
            <p className="mb-6 text-foreground leading-relaxed">
              CNSS is committed to protecting your personal information in compliance with the Personal 
              Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial 
              privacy laws.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">1. Information We Collect</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed ml-4">
                  <li>Name, email, phone number (if you complete our form or request a quote).</li>
                  <li>Any information you include in communications with us.</li>
                  <li>Technical data automatically collected by our ISP (e.g., IP address, browser type, pages visited).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">2. How We Use Information</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground leading-relaxed ml-4">
                  <li>Respond to inquiries and provide requested quotes.</li>
                  <li>Communicate with you about our services.</li>
                  <li>Improve our website and services.</li>
                </ul>
                <p className="mt-3 text-foreground leading-relaxed">
                  We do not sell, rent, or trade personal information to third parties.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">3. Consent</h3>
                <p className="text-foreground leading-relaxed">
                  By submitting information through our site, you consent to its collection, use, and 
                  disclosure as described in this policy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">4. Storage and Security</h3>
                <p className="text-foreground leading-relaxed">
                  Information is stored securely and only accessible by authorized personnel. We take 
                  reasonable steps to protect against loss, misuse, and unauthorized access.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">5. Disclosure</h3>
                <p className="text-foreground leading-relaxed">
                  We may disclose your information if required by law or necessary to protect the safety, 
                  rights, or property of CNSS, our clients, or the public.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">6. Retention</h3>
                <p className="text-foreground leading-relaxed">
                  We keep personal information only as long as necessary to fulfill the purposes collected 
                  or as required by law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">7. Your Rights</h3>
                <p className="text-foreground leading-relaxed">
                  You have the right to access, correct, or withdraw consent for your personal information 
                  (subject to legal restrictions). To exercise your rights, contact us at:{" "}
                  <a href="mailto:cnss@nuclearsafety.ca" className="text-primary hover:underline">
                    cnss@nuclearsafety.ca
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">8. Updates</h3>
                <p className="text-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Updates will be posted here with 
                  the revised date.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPrivacy;
