import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SeatTracker } from "@/lib/pricing";
import { 
  CheckCircle, 
  Download, 
  Calendar, 
  Upload, 
  Play, 
  Mail,
  Sparkles
} from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    // Decrement seat counter on successful purchase
    SeatTracker.decrementSeat();
    
    // Fire analytics events
    // TODO: Add analytics tracking
    console.log('Purchase completed - seat decremented');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary-light py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to the Founders Circle!</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Your Client Health Tracker account is being set up. Here's what happens next:
          </p>
          
          <Badge variant="default" className="text-lg p-3">
            <Sparkles className="w-5 h-5 mr-2" />
            You're now locked in at the Founders price for life!
          </Badge>
        </div>

        {/* Order Confirmation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Order Confirmation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Client Health Tracker - Founders Pro</span>
                <span className="font-semibold">$2,497.00</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Sales Idea Pack</span>
                <span>$97.00</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Year-Round Content Vault</span>
                <span>$497.00</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">$3,091.00</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              A receipt has been sent to your email address.
            </p>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Immediate Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-primary" />
                Start Right Now
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Play className="w-4 h-4 mr-3" />
                Watch: 5-Minute Quickstart Video
              </Button>
              
              <Button className="w-full justify-start" variant="outline">
                <Upload className="w-4 h-4 mr-3" />
                Submit Your Branding Assets
              </Button>
              
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="w-4 h-4 mr-3" />
                Book Your 45-Min Setup Call
              </Button>
            </CardContent>
          </Card>

          {/* Downloads */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Download Your Assets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-3" />
                Recipe Book #1 (100 Recipes)
              </Button>
              
              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-3" />
                Sales Scripts & Objection Pack
              </Button>
              
              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-3" />
                100 Social Posts + 20 Emails
              </Button>
              
              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-3" />
                Sales Idea Pack
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <Download className="w-4 h-4 mr-3" />
                Content Vault (365 Days)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What to Expect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  time: "Today",
                  title: "Digital Assets Available",
                  desc: "Download all your bonus materials immediately",
                  status: "complete"
                },
                {
                  time: "Within 24 hours",
                  title: "Setup Call Scheduled",
                  desc: "Book your 45-minute onboarding call with our team",
                  status: "next"
                },
                {
                  time: "3 Business Days",
                  title: "Branded Instance Ready",
                  desc: "Your custom-branded CHT platform will be live",
                  status: "pending"
                },
                {
                  time: "8 Weeks",
                  title: "Office Hours Access",
                  desc: "Weekly group calls for questions and optimization",
                  status: "pending"
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step.status === 'complete' ? 'bg-primary text-white' :
                    step.status === 'next' ? 'bg-accent text-white' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {step.status === 'complete' ? <CheckCircle className="w-4 h-4" /> : index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold">{step.title}</h3>
                      <Badge variant="outline" className="text-xs">{step.time}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our team is here to ensure your success. For any questions:
            </p>
            <Button variant="outline" className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Email support@clienthealthtracker.com
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;