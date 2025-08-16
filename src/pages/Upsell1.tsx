import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRICING } from "@/lib/pricing";
import { TrendingUp, Calendar, Mail, Clock, CheckCircle } from "lucide-react";

const Upsell1 = () => {
  const handleAccept = () => {
    // TODO: Process one-click upsell
    console.log('Upsell 1 accepted');
    // Navigate to Upsell 2
  };

  const handleDecline = () => {
    // Navigate to Upsell 2
    console.log('Upsell 1 declined');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light to-secondary-light py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <Badge variant="default" className="mb-4">
            Special One-Time Offer
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Never Run Out of Content Again
          </h1>
          <p className="text-xl text-muted-foreground">
            Add the Year-Round Content Vault to keep your audience engaged 365 days a year
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <CardTitle className="text-3xl">Year-Round Content Vault</CardTitle>
            <div className="text-4xl font-bold text-primary mt-4">
              ${PRICING.UPSELL1_PRICE}
              <span className="text-lg font-normal text-muted-foreground ml-2">one-time</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* What's Inside */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">What's Inside:</h3>
              <div className="space-y-4">
                {[
                  { icon: Calendar, title: "365 Daily Social Prompts", desc: "Never stare at a blank screen again" },
                  { icon: Mail, title: "52 Weekly Newsletter Prompts", desc: "Keep your email list engaged year-round" },
                  { icon: Clock, title: "12 Monthly Promo Themes", desc: "Seasonal campaigns that convert" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg">
                    <item.icon className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Proposition */}
            <div className="text-center p-6 bg-accent-light rounded-lg">
              <h3 className="font-semibold text-lg mb-2">This would cost you:</h3>
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <p className="text-2xl font-bold">$200/mo</p>
                  <p className="text-sm text-muted-foreground">Content writer</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">40+ hrs</p>
                  <p className="text-sm text-muted-foreground">Your time monthly</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">$2,400+</p>
                  <p className="text-sm text-muted-foreground">Annual cost</p>
                </div>
              </div>
              <p className="text-lg">
                Get it all today for just <span className="font-bold text-primary">${PRICING.UPSELL1_PRICE}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Button 
                onClick={handleAccept}
                size="xl" 
                className="w-full text-lg"
                variant="cta"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Yes! Add Content Vault for ${PRICING.UPSELL1_PRICE}
              </Button>
              
              <div className="text-center">
                <button 
                  onClick={handleDecline}
                  className="text-muted-foreground hover:text-foreground underline"
                >
                  No thanks, continue to my account
                </button>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="text-center text-sm text-muted-foreground border-t pt-4">
              <p>✓ One-click purchase using your saved payment method</p>
              <p>✓ Instant download after purchase</p>
              <p>✓ Same 30-day money-back guarantee</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upsell1;