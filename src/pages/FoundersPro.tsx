import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CountdownTimer } from "@/components/funnel/CountdownTimer";
import { SeatCounter } from "@/components/funnel/SeatCounter";
import { PricingOptions } from "@/components/funnel/PricingOptions";
import { UTMTracker } from "@/lib/pricing";
import { 
  Shield, 
  Brain, 
  Award, 
  Weight, 
  Clock, 
  Camera,
  TrendingUp,
  FileText,
  Heart,
  Users,
  CheckCircle,
  Star
} from "lucide-react";

const FoundersPro = () => {
  useEffect(() => {
    // Capture UTM parameters on page load
    UTMTracker.captureUTM();
    
    // SEO
    document.title = "Client Health Tracker — Founders Pro (First 200 Only) | Lifetime Price Lock";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Coach more clients with less burnout. AI-powered behavior tracking cuts review time from hours to minutes. $2,497/year founders price, first 200 coaches only.');
    }
  }, []);

  const handlePricingSelect = (option: 'annual' | 'twopay') => {
    // TODO: Navigate to checkout with selected option
    console.log('Selected pricing:', option);
  };

  const handleCTAClick = () => {
    // TODO: Navigate to checkout
    console.log('CTA clicked');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Client Health Tracker</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#how" className="text-sm hover:text-primary transition-colors">How it works</a>
              <a href="#benefits" className="text-sm hover:text-primary transition-colors">Benefits</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
              <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} size="sm">
                See pricing & claim a Founders seat
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* VSL Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Coach more clients with{" "}
                <span className="text-primary">less burnout</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Cut weekly review time from hours to minutes, keep clients engaged, and coach with 
                confidence powered by real behavior data.
              </p>
            </div>

            {/* Micro bullets */}
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">Review each client in 10–15 minutes—AI highlights what changed and what to say next.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">Fewer drop-offs: spot plateaus early and rescue at-risk clients.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-lg">Branded to your business. HIPAA-ready environment available.</p>
              </div>
            </div>

            {/* Social proof mini-row */}
            <div className="space-y-3">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg font-medium italic">
                "I went from spreadsheets & DMs to clean dashboards in a week."
              </p>
            </div>

            {/* Scarcity Block */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto space-y-4">
              <SeatCounter className="justify-center" />
              <CountdownTimer deadline="2025-08-25T23:59:00" className="justify-center" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button 
                size="xl" 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} 
                variant="cta" 
                className="flex-1"
              >
                See pricing & claim a Founders seat
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="flex-1"
                onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
              >
                How it works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Pain → Promise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                The coach killer isn't lack of clients—it's <span className="text-primary">admin</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-700 mb-2">Fragmented tools</h3>
                  <p className="text-sm text-red-600">Spreadsheets, photo texts, calorie apps that clients won't use</p>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-700 mb-2">Reactive coaching</h3>
                  <p className="text-sm text-red-600">Guessing on calls, missing early warning signs</p>
                </div>
                <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-400">
                  <h3 className="font-semibold text-red-700 mb-2">Burnout</h3>
                  <p className="text-sm text-red-600">Hours lost reviewing logs that don't translate into action</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-primary-light rounded-xl">
              <p className="text-xl lg:text-2xl font-semibold text-primary">
                Imagine every check-in starting with a ready-to-say 2-minute brief and a clear plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Benefit Stacks */}
      <section id="benefits" className="py-16 lg:py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Why coaches choose Client Health Tracker</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Time & Capacity */}
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Time & Capacity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>2–3 hours/month per client → 10–15 minutes.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Coach 2–3× more clients with the same hours.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>One app replaces spreadsheets, photo threads, and scattered DMs.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Client Results & Retention */}
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Client Results & Retention</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Better adherence without nagging (nudges, streaks, simple logging).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Plateau detection you can act on (e.g., low protein + late meals + poor sleep → a weekly plan).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Fewer drop-offs; win back stalled clients with reactivation prompts.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Revenue Without More Ads */}
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Revenue Without More Ads</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Turn insights into natural upsells (higher-touch packages, add-ons).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Higher LTV from longer stays and visible progress.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Win consults by showing real dashboards and weekly action plans.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Coach Confidence & Consistency */}
              <Card className="p-8">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Coach Confidence & Consistency</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Weekly "what to say" briefing (top 2–3 focus points per client).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>No more guess-coaching; coach to the data.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Consistent standards—even when you hire assistant coaches.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4">
              <Badge variant="default" className="gap-2 text-sm p-3">
                <Shield className="w-4 h-4" />
                HIPAA-ready; BAA available for clinics. Coaches can use the same environment without storing PHI.
              </Badge>
              <p className="text-muted-foreground">
                Fair-use AI included — no surprise overages under normal use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coach Math Moments */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Coach Math Moments</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-primary">Time Recaptured</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-3xl font-bold mb-2">$90k/yr</p>
                  <p className="text-sm text-muted-foreground">2 hrs/mo × $150/hr × 25 clients</p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-primary">Retention Lift</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-3xl font-bold mb-2">$4,500/qtr</p>
                  <p className="text-sm text-muted-foreground">Keep 5 clients × 3 months × $300/mo</p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl text-primary">Admin Replacement</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-3xl font-bold mb-2">$1,000+/mo</p>
                  <p className="text-sm text-muted-foreground">10 hrs/wk × $25/hr saved</p>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Illustrative examples. Individual results vary.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 lg:py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Get access & submit your branding", desc: "Logo, colors, domain setup" },
                { step: "2", title: "We brand your instance", desc: "Custom setup completed in 3 business days" },
                { step: "3", title: "Start coaching with AI briefs", desc: "Behavior tracking and smart insights" }
              ].map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VSL Template Module */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Prefer to watch? Here's the short version.</h2>
              <div className="bg-gray-100 rounded-xl p-8 aspect-video flex items-center justify-center">
                <p className="text-muted-foreground">Video coming soon</p>
              </div>
            </div>

            <details className="bg-secondary-light rounded-xl p-6">
              <summary className="cursor-pointer font-semibold text-lg mb-4">VSL Outline</summary>
              <div className="space-y-2 text-sm">
                <p><strong>00:00</strong> Hook (coach capacity + time saved)</p>
                <p><strong>00:30</strong> The real problem (admin + guess-coaching)</p>
                <p><strong>01:30</strong> What inaction costs (time, churn, missed upsells)</p>
                <p><strong>02:20</strong> The new way (behavior-first tracking + AI briefs)</p>
                <p><strong>03:20</strong> Quick walkthrough (what clients log; what coaches see)</p>
                <p><strong>05:00</strong> Proof & testimonials</p>
                <p><strong>06:00</strong> The math again (capacity, retention)</p>
                <p><strong>07:00</strong> Offer stack (software + coach content assets)</p>
                <p><strong>08:00</strong> Scarcity (200 seats), HIPAA note</p>
                <p><strong>09:00</strong> CTA tease (see pricing below)</p>
                <p><strong>10:00</strong> FAQ (coach objections)</p>
                <p><strong>11:00</strong> Price reveal (anchor vs. our price)</p>
                <p><strong>12:00</strong> Final CTA</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">What coaches are saying</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Megan Hart", role: "Weight Loss Coach", quote: "Check-ins are tighter and clients actually do the work." },
                { name: "Jordan Lee", role: "Gym-Based Coach", quote: "I added 12 clients without adding hours." },
                { name: "Elena Ruiz", role: "Med Spa Coach", quote: "Retention up 18% in 60 days." },
                { name: "Coach Dan Miller", role: "Online Coach", quote: "From guesswork to a weekly coaching brief. Close rate improved immediately." },
                { name: "Priya S.", role: "RN & Nutritionist", quote: "Clients trust the branded, secure app way more than texting." },
                { name: "Nora Kim", role: "Online Coach", quote: "Clients log more because it's simple. Photos beat macros." },
                { name: "Riley W.", role: "Hybrid Coach", quote: "Data-driven coaching became my differentiator." },
                { name: "Samir Patel", role: "Team Lead Coach", quote: "Consistent standards across assistant coaches." },
                { name: "Alex G.", role: "Bariatric Support Coach", quote: "At-risk clients don't slip through cracks." }
              ].map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Testimonials are illustrative placeholders while we collect formal case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Coach FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-6">
              {[
                { 
                  q: "Do I need to count macros?", 
                  a: "No. Photo-first + behavior tracking works great without macro counting." 
                },
                { 
                  q: "I'm not techy—will this be hard?", 
                  a: "Designed to be simple; we brand it for you and provide full setup support." 
                },
                { 
                  q: "Can I run challenges or group coaching?", 
                  a: "Yes—program-agnostic and flexible for any coaching style." 
                },
                { 
                  q: "Is HIPAA required for coaches?", 
                  a: "No. The platform is HIPAA-ready; use without storing PHI. BAA available for clinics." 
                },
                { 
                  q: "What about AI fees?", 
                  a: "Fair-use AI included under normal usage—no surprise overages." 
                },
                { 
                  q: "Delivery timelines?", 
                  a: "Branding in 3 business days; digital assets available immediately." 
                },
                { 
                  q: "Refunds?", 
                  a: "30-day money-back guarantee if you're not satisfied." 
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 pb-4">
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High-Value Price Anchor */}
      <section className="py-16 lg:py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">What this would cost without Client Health Tracker</h2>
            
            <div className="grid gap-6">
              <Card className="p-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Admin time: 2 hrs/mo/client × $150/hr × 25 clients</span>
                  <span className="text-xl font-bold text-primary">$7,500/mo</span>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Churn/revenue loss: 5 clients × 3 months × $300/mo</span>
                  <span className="text-xl font-bold text-primary">$4,500/quarter</span>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Tool sprawl/inefficiency</span>
                  <span className="text-xl font-bold text-primary">$150–$300/mo</span>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Training inconsistency & missed upsells</span>
                  <span className="text-xl font-bold text-primary">Silent cost every month</span>
                </div>
              </Card>
            </div>

            <div className="p-8 bg-white rounded-xl">
              <p className="text-2xl font-bold">
                It's easy to see why most expect an <span className="text-primary">$8k–$10k price tag</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-12 bg-accent-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="default" className="mb-4 text-lg p-3">
              30-Day Money-Back Guarantee
            </Badge>
            <p className="text-muted-foreground">
              If you're not completely satisfied, we'll refund your purchase within 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA / Pricing */}
      <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Founders Pro — first 200 coaches only (lifetime price lock).
              </h2>
              <SeatCounter className="justify-center" />
            </div>

            {/* Price Reveal */}
            <PricingOptions onSelectPricing={handlePricingSelect} />

            {/* Value Stack Brief */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-6">What's included:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Pro software (12 months)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Private-label setup (domain/logo/colors)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Onboarding Kickstart (1×45-min call + 8 weeks office hours)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Recipe Book License (100 recipes)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Sales Scripts & Objection Pack</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>100 Social Posts + 20 Short Emails</span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <Badge variant="outline" className="gap-2 text-sm p-3 bg-white/20 border-white/30 text-white">
                <Shield className="w-4 h-4" />
                HIPAA-ready; BAA available for clinics
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center gap-6 text-sm">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="/hipaa" className="hover:text-primary transition-colors">HIPAA/BAA Notice</a>
              <a href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</a>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 Client Health Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FoundersPro;