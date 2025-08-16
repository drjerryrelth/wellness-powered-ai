const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Client Health Tracker, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
            <p className="text-muted-foreground mb-4">
              Client Health Tracker is a health and wellness tracking platform designed for 
              coaches and healthcare professionals to monitor client progress and engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Founders Pro Subscription</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Annual subscription at $2,497/year or 2 payments of $1,499</li>
              <li>Lifetime price lock guarantee for Founders Pro members</li>
              <li>Renewal at the same Founders rate for life</li>
              <li>Limited to first 200 customers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              We offer a 30-day money-back guarantee from the date of purchase. Refunds 
              must be requested within 30 days of your initial purchase date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Fair Use AI Policy</h2>
            <p className="text-muted-foreground mb-4">
              AI features are included under fair use terms for normal coaching activities. 
              Excessive or commercial-scale usage may result in additional charges or service limitations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Medical Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              Client Health Tracker is not a medical device and is not intended for diagnosis, 
              treatment, cure, or prevention of any disease. Always consult with qualified 
              healthcare professionals for medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate information when using our services</li>
              <li>Maintain the security of your account credentials</li>
              <li>Use the service in compliance with applicable laws</li>
              <li>Respect the privacy and rights of others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law, Client Health Tracker shall not be liable 
              for any indirect, incidental, special, or consequential damages resulting from 
              your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground mb-4">
              We may terminate or suspend your account immediately, without prior notice, 
              for conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting to our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, contact us at 
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

export default Terms;