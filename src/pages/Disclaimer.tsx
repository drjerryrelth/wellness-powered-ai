const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Medical & Results Disclaimer</h1>
        
        <div className="prose max-w-none space-y-8">
          <section className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg">
            <h2 className="text-2xl font-semibold mb-4 text-destructive">Important Medical Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Client Health Tracker is not a medical device and should not be used for 
              medical diagnosis, treatment, or cure of any disease or medical condition.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Not Medical Advice</h2>
            <p className="text-muted-foreground mb-4">
              The information provided through Client Health Tracker is for informational and 
              educational purposes only. It is not intended as a substitute for professional 
              medical advice, diagnosis, or treatment.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Always seek the advice of your physician or qualified healthcare provider</li>
              <li>Never disregard professional medical advice because of something you read in our platform</li>
              <li>Do not delay seeking medical treatment based on information from our service</li>
              <li>If you think you may have a medical emergency, call your doctor immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Results Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              Individual results may vary. Success stories and testimonials are not guarantees 
              of future results for any individual.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Weight loss and health improvements depend on many individual factors</li>
              <li>Past performance does not guarantee future results</li>
              <li>Client compliance and adherence to recommendations may vary</li>
              <li>Results shown are not typical and may not be achievable by all users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">No Guaranteed Outcomes</h2>
            <p className="text-muted-foreground mb-4">
              We make no guarantees regarding:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Specific weight loss amounts or timeframes</li>
              <li>Health improvements or medical outcomes</li>
              <li>Business success or revenue increases for coaches</li>
              <li>Client retention or engagement rates</li>
              <li>FDA approval or medical device status</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Professional Licensing</h2>
            <p className="text-muted-foreground mb-4">
              Users of Client Health Tracker are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Operating within the scope of their professional licenses</li>
              <li>Complying with local and federal regulations</li>
              <li>Maintaining appropriate professional liability insurance</li>
              <li>Following their professional code of ethics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">AI and Technology Limitations</h2>
            <p className="text-muted-foreground mb-4">
              AI features in our platform are tools to assist coaches and should not replace 
              professional judgment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>AI insights are based on patterns in data, not medical diagnosis</li>
              <li>Technology may have errors or limitations</li>
              <li>Human oversight and professional judgment are always required</li>
              <li>AI recommendations should be reviewed before implementing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Integrations</h2>
            <p className="text-muted-foreground mb-4">
              Our platform may integrate with third-party services and devices. We are not 
              responsible for the accuracy, reliability, or security of third-party data or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Accuracy</h2>
            <p className="text-muted-foreground mb-4">
              While we strive for accuracy, users are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Verifying the accuracy of all data entered</li>
              <li>Ensuring proper calibration of connected devices</li>
              <li>Cross-referencing important health data with medical professionals</li>
              <li>Reporting any suspected data errors immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Age Restrictions</h2>
            <p className="text-muted-foreground mb-4">
              Client Health Tracker is intended for use by adults (18+) and healthcare 
              professionals working with adult clients. Use with minors requires appropriate 
              parental consent and professional oversight.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Emergency Situations</h2>
            <div className="bg-destructive/10 p-6 rounded-lg">
              <p className="text-muted-foreground font-semibold">
                If you are experiencing a medical emergency, do not use this platform. 
                Call 911 (in the US) or your local emergency services immediately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates to Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              This disclaimer may be updated periodically. Continued use of our services 
              constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Questions</h2>
            <p className="text-muted-foreground">
              For questions about this disclaimer or our services, contact us at 
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

export default Disclaimer;