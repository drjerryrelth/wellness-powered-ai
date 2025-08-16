import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { PricingOptions } from "@/components/funnel/PricingOptions";
import { PRICING } from "@/lib/pricing";
import { Lock, Shield, CheckCircle } from "lucide-react";

const Checkout = () => {
  const [selectedPricing, setSelectedPricing] = useState<'annual' | 'twopay'>('annual');
  const [orderBump, setOrderBump] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });

  const subtotal = selectedPricing === 'annual' ? PRICING.ANNUAL : PRICING.TWO_PAY;
  const bumpAmount = orderBump ? PRICING.BUMP_PRICE : 0;
  const total = subtotal + bumpAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Create Stripe Checkout Session
    console.log('Checkout submitted:', { selectedPricing, orderBump, formData, total });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Complete Your Order</h1>
          <p className="text-muted-foreground">Join the first 200 founders with lifetime pricing</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pricing Selection */}
              <div>
                <h3 className="font-semibold mb-4">Choose Your Payment Option</h3>
                <PricingOptions 
                  selectedOption={selectedPricing}
                  onSelectPricing={setSelectedPricing}
                  showCTA={false}
                />
              </div>

              {/* Order Bump */}
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    checked={orderBump}
                    onCheckedChange={(checked) => setOrderBump(!!checked)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">Sales Idea Pack</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>• 50 promo angles/headlines</li>
                      <li>• 24 consult-booking text prompts</li>
                      <li>• 10 consult frameworks</li>
                    </ul>
                  </div>
                  <Badge variant="secondary">${PRICING.BUMP_PRICE}</Badge>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Founders Pro ({selectedPricing === 'annual' ? 'Annual' : '2-Pay'})</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                {orderBump && (
                  <div className="flex justify-between text-sm">
                    <span>Sales Idea Pack</span>
                    <span>${PRICING.BUMP_PRICE}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="text-primary">${total.toLocaleString()}</span>
                </div>
                {selectedPricing === 'twopay' && (
                  <p className="text-sm text-muted-foreground">
                    Today: ${total.toLocaleString()}, then ${PRICING.TWO_PAY.toLocaleString()} in 30 days
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Checkout Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Billing Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company/Practice</Label>
                    <Input 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Legal Checkboxes */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Checkbox required className="mt-1" />
                    <label className="text-muted-foreground">
                      I accept the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and{' '}
                      <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                    </label>
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox className="mt-1" />
                    <label className="text-muted-foreground">
                      I acknowledge the <a href="/hipaa" className="text-primary hover:underline">HIPAA/BAA notice</a> for clinic use
                    </label>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground py-4 border-y">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    HIPAA-ready software
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Secure payment
                  </div>
                </div>

                <Button type="submit" size="xl" className="w-full" variant="cta">
                  Complete Order - ${total.toLocaleString()}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Not a medical device. For tracking purposes only.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;