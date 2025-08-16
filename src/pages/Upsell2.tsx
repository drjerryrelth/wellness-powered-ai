import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PRICING } from "@/lib/pricing";
import { BookOpen, Download, Star, CheckCircle } from "lucide-react";

const Upsell2 = () => {
  const handleAccept = () => {
    // TODO: Process one-click upsell
    console.log('Upsell 2 accepted');
    // Navigate to Thank You
  };

  const handleDecline = () => {
    // Navigate to Thank You
    console.log('Upsell 2 declined');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-light to-accent-light py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <Badge variant="default" className="mb-4">
            Final Exclusive Offer
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Complete Your Recipe Collection
          </h1>
          <p className="text-xl text-muted-foreground">
            Add 300 more recipes to give your clients endless healthy meal options
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8" />
            </div>
            <CardTitle className="text-3xl">Recipe Bundle Vol. 2–4</CardTitle>
            <div className="text-4xl font-bold text-secondary mt-4">
              ${PRICING.UPSELL2_PRICE}
              <span className="text-lg font-normal text-muted-foreground ml-2">one-time</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* What's Inside */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">What You Get:</h3>
              <div className="space-y-4">
                {[
                  { title: "Volume 2: Mediterranean Favorites", count: "100 recipes", desc: "Heart-healthy options your clients will love" },
                  { title: "Volume 3: Plant-Based Power", count: "100 recipes", desc: "Protein-rich vegetarian and vegan meals" },
                  { title: "Volume 4: Quick & Easy", count: "100 recipes", desc: "30-minute meals for busy lifestyles" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <Badge variant="secondary">{item.count}</Badge>
                      </div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold mb-4 text-center">Same Professional Quality:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Nutrition facts included",
                  "Your logo & branding",
                  "Client-ready PDFs", 
                  "Prep time & difficulty",
                  "Dietary restriction tags",
                  "Shopping list format"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Value Comparison */}
            <div className="text-center p-6 bg-accent-light rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Compare the Value:</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-muted-foreground line-through">$1,200</p>
                  <p className="text-sm text-muted-foreground">Hiring a nutritionist to create 300 custom recipes</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">${PRICING.UPSELL2_PRICE}</p>
                  <p className="text-sm font-semibold">Ready-to-use recipe collection</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center p-4 bg-background rounded-lg">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm font-medium">"These recipes are client favorites - they actually follow them!"</p>
              <p className="text-xs text-muted-foreground">Beta tester feedback</p>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <Button 
                onClick={handleAccept}
                size="xl" 
                className="w-full text-lg"
                variant="cta"
              >
                <Download className="w-5 h-5 mr-2" />
                Yes! Add Recipe Bundle for ${PRICING.UPSELL2_PRICE}
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

export default Upsell2;