const Hipaa = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">HIPAA/BAA Notice</h1>
        
        <div className="prose max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">HIPAA Compliance Overview</h2>
            <p className="text-muted-foreground mb-4">
              Client Health Tracker provides HIPAA-ready software infrastructure for healthcare 
              practices and covered entities. Our platform includes technical, administrative, 
              and physical safeguards designed to protect health information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Business Associate Agreement (BAA)</h2>
            <p className="text-muted-foreground mb-4">
              For covered entities under HIPAA (clinics, healthcare practices, hospitals), 
              we provide Business Associate Agreements upon request. The BAA establishes 
              the permitted uses and disclosures of protected health information (PHI).
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Available for Founders Pro subscribers</li>
              <li>Covers use and disclosure of PHI</li>
              <li>Includes data breach notification procedures</li>
              <li>Establishes security requirements and obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">For Individual Coaches</h2>
            <p className="text-muted-foreground mb-4">
              Individual health coaches who are not covered entities under HIPAA can still 
              benefit from our HIPAA-ready environment to maintain high standards of 
              client data protection and privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Safeguards</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>End-to-end encryption for data transmission</li>
              <li>Encrypted data storage at rest</li>
              <li>Access controls and user authentication</li>
              <li>Audit logs and monitoring</li>
              <li>Automatic session timeouts</li>
              <li>Regular security updates and patches</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Administrative Safeguards</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Role-based access permissions</li>
              <li>Employee training on privacy practices</li>
              <li>Incident response procedures</li>
              <li>Regular risk assessments</li>
              <li>Business continuity planning</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Physical Safeguards</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Secure data centers with 24/7 monitoring</li>
              <li>Restricted physical access to servers</li>
              <li>Environmental controls and redundancy</li>
              <li>Secure disposal of hardware and media</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Important Limitations</h2>
            <div className="bg-accent-light p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Medical Device Disclaimer</h3>
              <p className="text-muted-foreground mb-4">
                Client Health Tracker is <strong>not a medical device</strong> and is not intended 
                for diagnosis, treatment, cure, or prevention of any disease.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Not FDA approved for medical use</li>
                <li>Not intended for diagnostic purposes</li>
                <li>Should not replace professional medical advice</li>
                <li>For wellness tracking and coaching purposes only</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Breach Procedures</h2>
            <p className="text-muted-foreground mb-4">
              In the event of a potential data breach involving PHI, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Notify covered entities within 60 days of discovery</li>
              <li>Provide details of the breach and affected data</li>
              <li>Document remediation steps taken</li>
              <li>Assist with regulatory reporting as required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Requesting a BAA</h2>
            <p className="text-muted-foreground mb-4">
              Healthcare practices requiring a Business Associate Agreement should contact 
              our support team at support@clienthealthtracker.com. Please include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your practice name and license information</li>
              <li>Confirmation of covered entity status</li>
              <li>Authorized signatory information</li>
              <li>Any specific BAA requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact for HIPAA Questions</h2>
            <p className="text-muted-foreground">
              For questions about our HIPAA compliance or to request a Business Associate 
              Agreement, please contact our compliance team at support@clienthealthtracker.com.
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

export default Hipaa;