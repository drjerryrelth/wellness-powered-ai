const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Account information (name, email address, phone number)</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Health and wellness data you input into our platform</li>
              <li>Communication preferences and support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Analytics and Tracking</h2>
            <p className="text-muted-foreground mb-4">
              We use analytics services including Google Analytics 4 and Meta Pixel to understand 
              how our website is used and to improve our services. These services may collect 
              information about your device and browsing behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Payment Processing</h2>
            <p className="text-muted-foreground mb-4">
              Payment information is processed securely through Stripe. We do not store your 
              complete payment card information on our servers. Stripe's privacy policy 
              governs the collection and use of payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">HIPAA Compliance</h2>
            <p className="text-muted-foreground mb-4">
              For healthcare practices requiring HIPAA compliance, we offer Business Associate 
              Agreements (BAA). Our platform includes HIPAA-ready features for covered entities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to access, update, or delete your personal information. 
              You may also opt out of certain communications from us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at 
              support@clienthealthtracker.com.
            </p>
          </section>

          <section className="text-sm text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;