import VideoPlayer from "./VideoPlayer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Award, TrendingUp } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="video-section" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Video */}
          <div className="space-y-6">
            <VideoPlayer
              className="w-full"
              title="See Client Health Tracker in Action"
              description="Watch how healthcare providers are transforming patient care with AI-powered nutrition coaching"
            />
            
            {/* Video Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Provider Satisfaction</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-secondary">35%</div>
                <div className="text-sm text-muted-foreground">Better Outcomes</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-accent">2K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-primary-light text-primary border-primary/20 mb-4">
                <PlayCircle className="w-4 h-4 mr-2" />
                Platform Demo
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-text-hero mb-4">
                Transform Patient Care with
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  AI-Powered Nutrition
                </span>
              </h2>
              
              <p className="text-lg text-text-medical leading-relaxed">
                See how Client Health Tracker integrates seamlessly into your practice workflow, 
                providing personalized nutrition coaching and real-time patient insights that 
                drive better health outcomes.
              </p>
            </div>

            {/* Key Features Highlighted */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-hero">HIPAA-Compliant Platform</h4>
                  <p className="text-text-medical">Enterprise-grade security for patient data</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-hero">AI-Driven Insights</h4>
                  <p className="text-text-medical">Automated analysis and personalized recommendations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <PlayCircle className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-hero">Seamless Integration</h4>
                  <p className="text-text-medical">Works with your existing EHR systems</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                Schedule Personal Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;