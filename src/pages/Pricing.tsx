import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Zap, Crown, Sparkles, Heart, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hipaaBoard from "@/assets/hipaa-dashboard.jpg";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$297",
      period: "/month",
      icon: <Users className="w-8 h-8" />,
      description: "Perfect for smaller practices getting started",
      features: [
        "Up to 20 clients or patients",
        "Standard AI food analysis",
        "30 Micronutrients tracked, not just Macros",
        "Basic nutrition coaching tools",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      badge: null,
      buttonText: "Schedule Demo",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional",
      price: "$697",
      period: "/month",
      icon: <Crown className="w-8 h-8" />,
      description: "Advanced features for growing practices",
      features: [
        "Unlimited clients or patients",
        "Unlimited coaches within your organization",
        "Advanced AI-driven nutrition coaching and analysis",
        "30 Micronutrients tracked, not just Macros",
        "Priority support",
        "Advanced reporting and analytics",
        "Let us do the heavy lifting for you!"
      ],
      badge: "Most Popular",
      buttonText: "Schedule Demo",
      buttonVariant: "cta" as const
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for all plans so you can explore all features before committing."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide email support for Starter plans and priority support for Professional plans, including phone and chat support."
    },
    {
      question: "Can I add more coaches to my organization?",
      answer: "With the Professional plan, you can add unlimited coaches within your organization at no additional cost."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20">
      <Header />
      
      {/* Premium Header Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-white/5 opacity-20" style={{backgroundImage: "radial-gradient(circle at 50% 50%, white 2px, transparent 2px)", backgroundSize: "60px 60px"}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Enterprise Pricing
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
                  Simple, <span className="text-emerald-200">Transparent</span> Pricing
                </h1>
                <p className="text-xl text-emerald-100 font-medium leading-relaxed">
                  Choose the plan that fits your practice. Scale as you grow with unlimited access to our advanced AI-powered nutrition coaching platform.
                </p>
                <p className="text-emerald-200 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  No setup fees • Cancel anytime • 14-day free trial
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src={hipaaBoard} 
                alt="Pricing Dashboard Interface" 
                className="relative rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
      
      <main className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Pricing Cards - Premium Design */}
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <Card key={index} className={`premium-card relative group hover:shadow-elegant transition-all duration-500 ${plan.badge ? 'ring-2 ring-primary/50 scale-105 shadow-glow' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="px-6 py-2 bg-gradient-to-r from-primary to-primary-glow text-white font-bold text-sm shadow-lg">
                      <Crown className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-10 pt-12">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-display font-bold text-text-hero mb-4">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-6xl font-display font-bold text-text-hero">
                      {plan.price}
                    </span>
                    <span className="text-xl text-text-medical ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className="text-text-medical text-lg leading-relaxed max-w-sm mx-auto">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-10 pb-10">
                  <ul className="space-y-5 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-4">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mt-1 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-text-medical font-medium text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full h-14 text-lg font-semibold transition-all ${
                      plan.buttonVariant === 'cta' 
                        ? 'bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-lg hover:shadow-xl' 
                        : 'border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5'
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonVariant === 'cta' ? <Sparkles className="w-5 h-5 mr-2" /> : <Users className="w-5 h-5 mr-2" />}
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enterprise Section */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-lg bg-primary/10">
                <Zap className="w-10 h-10" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-text-hero mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-lg text-text-medical mb-8 max-w-2xl mx-auto">
              Large organization? We offer custom enterprise solutions with advanced security, dedicated support, and tailored integrations.
            </p>
            <Button variant="cta" size="lg">
              Contact Sales
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-hero text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-text-hero">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-text-medical">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;