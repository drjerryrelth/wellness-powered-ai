import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PRICING } from "@/lib/pricing";
import { Check } from "lucide-react";

interface PricingOptionsProps {
  onSelectPricing: (option: 'annual' | 'twopay') => void;
  selectedOption?: 'annual' | 'twopay';
  showCTA?: boolean;
  className?: string;
}

export function PricingOptions({ 
  onSelectPricing, 
  selectedOption = 'annual',
  showCTA = true,
  className = "" 
}: PricingOptionsProps) {
  const [selected, setSelected] = useState<'annual' | 'twopay'>(selectedOption);

  const handleSelect = (option: 'annual' | 'twopay') => {
    setSelected(option);
    onSelectPricing(option);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Price Strip */}
      <div className="text-center space-y-2">
        <p className="text-lg text-muted-foreground line-through">
          Not $697/mo… not $497… not $397… not even $297/mo.
        </p>
        <div className="text-4xl font-bold">
          <span className="text-primary">${PRICING.ANNUAL.toLocaleString()}/year</span>
          <span className="text-lg font-normal text-muted-foreground ml-2">
            (avg ${Math.round(PRICING.ANNUAL / 12)}/mo)
          </span>
        </div>
        <p className="text-lg text-muted-foreground">
          or 2 payments of <span className="font-semibold">${PRICING.TWO_PAY.toLocaleString()}</span>
        </p>
        <Badge variant="default" className="bg-accent text-accent-foreground">
          Lifetime price-lock guaranteed
        </Badge>
      </div>

      {/* Pricing Options */}
      <div className="grid gap-4 max-w-2xl mx-auto">
        <Card 
          className={`cursor-pointer transition-all ${
            selected === 'annual' 
              ? 'ring-2 ring-primary border-primary' 
              : 'hover:border-primary/50'
          }`}
          onClick={() => handleSelect('annual')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selected === 'annual' ? 'border-primary bg-primary' : 'border-muted-foreground'
                }`}>
                  {selected === 'annual' && <Check className="w-2 h-2 text-white" />}
                </div>
                <div>
                  <h3 className="font-semibold">Pay in Full</h3>
                  <p className="text-sm text-muted-foreground">Best value - save $999</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">${PRICING.ANNUAL.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">One-time payment</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className={`cursor-pointer transition-all ${
            selected === 'twopay' 
              ? 'ring-2 ring-primary border-primary' 
              : 'hover:border-primary/50'
          }`}
          onClick={() => handleSelect('twopay')}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selected === 'twopay' ? 'border-primary bg-primary' : 'border-muted-foreground'
                }`}>
                  {selected === 'twopay' && <Check className="w-2 h-2 text-white" />}
                </div>
                <div>
                  <h3 className="font-semibold">Split Payment</h3>
                  <p className="text-sm text-muted-foreground">2 payments of ${PRICING.TWO_PAY.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">${PRICING.TWO_PAY.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Today, then 30 days</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Buttons */}
      {showCTA && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          {selected === 'annual' ? (
            <Button size="xl" className="flex-1" variant="cta">
              Pay ${PRICING.ANNUAL.toLocaleString()} Today
            </Button>
          ) : (
            <Button size="xl" className="flex-1" variant="cta">
              Start with ${PRICING.TWO_PAY.toLocaleString()}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}