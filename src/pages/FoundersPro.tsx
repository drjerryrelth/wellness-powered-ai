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
      metaDesc.setAttribute('content', 'Track the habits that drive weight loss. HIPAA-ready software + lean digital assets. $2,497/year founders price, first 200 only. Lifetime renewal.');
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
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#bonuses" className="text-sm hover:text-primary transition-colors">Bonuses</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
              <Button onClick={handleCTAClick} size="sm">
                Claim 1 of 200 Seats
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Key Features Badges */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="gap-2">
                <Shield className="w-4 h-4" />
                HIPAA-Ready
              </Badge>
              <Badge variant="secondary" className="gap-2">
                <Brain className="w-4 h-4" />
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="gap-2">
                <Award className="w-4 h-4" />
                Founders Only
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Finally track what{" "}
                <span className="text-primary">actually drives</span>{" "}
                weight loss results.
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Coach-friendly progress tracking with built-in HIPAA controls—plus a lean content stack 
                to help you sell and retain clients.
              </p>
            </div>

            {/* Pricing Strip */}
            <PricingOptions onSelectPricing={handlePricingSelect} />

            {/* Scarcity Block */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto space-y-4">
              <SeatCounter className="justify-center" />
              <CountdownTimer deadline="2025-08-25T23:59:00" className="justify-center" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button size="xl" onClick={handleCTAClick} variant="cta" className="flex-1">
                Claim Your Founders License
              </Button>
              <Button size="xl" variant="outline" className="flex-1">
                See What's Included
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg font-medium">
              "Clinics saw a 20% rise in compliance in 4 weeks."
            </p>
            <p className="text-sm text-muted-foreground">
              Early adopter results from beta testing
            </p>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Core Software Features</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to track and improve client outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Weight, title: "Weight Tracking", desc: "Daily weigh-ins with trend analysis" },
                { icon: Clock, title: "Habit Tracking", desc: "Custom habits with streak counters" },
                { icon: Heart, title: "Sleep/Water/Exercise", desc: "Core wellness metrics in one place" },
                { icon: Camera, title: "Photo/Meal Logging", desc: "Visual progress with meal documentation" },
                { icon: Brain, title: "AI Insights", desc: "Smart pattern recognition and recommendations" },
                { icon: FileText, title: "Coach Notes & Reminders", desc: "Client communication and follow-ups" }
              ].map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 space-y-4">
              <div className="flex justify-center gap-4">
                <Badge variant="default" className="gap-2">
                  <Shield className="w-4 h-4" />
                  HIPAA Badge + BAA available for clinics
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Fair-use AI included — no surprise overages under normal use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section id="bonuses" className="py-16 lg:py-24 bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Founders-Only Bonuses</h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to launch and scale your practice
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Private-Label Setup", desc: "Custom domain + logo + colors for your brand", value: 499 },
                { title: "Onboarding Kickstart", desc: "1×45-min call + 8 weeks office hours", value: 800 },
                { title: "Recipe Book License", desc: "100 recipes, client-facing PDF", value: 600 },
                { title: "Sales Scripts & Objection Handling Pack", desc: "Proven scripts to close more clients", value: 400 },
                { title: "100 Social Posts + 20 Short Emails", desc: "Ready-to-use content for client acquisition", value: 400 }
              ].map((bonus, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-lg font-semibold">{bonus.title}</h3>
                        <p className="text-muted-foreground">{bonus.desc}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-lg font-semibold">
                      Reg. ${bonus.value}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 p-8 bg-white rounded-xl">
              <p className="text-2xl font-bold">
                Straight-line value: <span className="text-primary">$2,699 in bonuses</span> + one year of Pro software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Math */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">The Math Speaks for Itself</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-lg opacity-80">Standard Pro</p>
                <p className="text-3xl font-bold line-through opacity-60">$697/mo</p>
                <p className="text-xl">= $8,364/yr</p>
              </div>
              <div className="text-accent">
                <p className="text-lg">Founders Price</p>
                <p className="text-4xl font-bold">$2,497/yr</p>
                <p className="text-xl">Lifetime renewal</p>
              </div>
              <div className="text-accent">
                <p className="text-lg">You Save</p>
                <p className="text-3xl font-bold">$5,867</p>
                <p className="text-xl">in year one (~70% off)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">How It Works</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Purchase Founders Pro", desc: "Secure your license with lifetime pricing" },
                { step: "2", title: "We Brand Your Instance", desc: "Custom setup completed in 3 business days" },
                { step: "3", title: "Start Tracking", desc: "Import clients, use scripts/emails to drive adherence" }
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

      {/* Final CTA */}
      <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-br from-primary-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Lock your Founders price before seats run out.
            </h2>
            <SeatCounter className="justify-center" />
            <PricingOptions onSelectPricing={handlePricingSelect} />
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