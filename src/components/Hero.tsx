import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Brain, Users, Award, Play } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";
import VideoPlayer from "./VideoPlayer";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-medical flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary-light text-primary border-primary/20 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                HIPAA Compliant
              </Badge>
              <Badge className="bg-secondary-light text-secondary border-secondary/20 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                AI-Powered
              </Badge>
              <Badge className="bg-accent-light text-accent border-accent/20 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Trusted by 10,000+ Providers
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-hero leading-tight">
                AI-Powered Nutrition
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Coaching for Healthcare
                </span>
                <span className="block">Providers</span>
              </h1>
              
              <p className="text-xl text-text-medical leading-relaxed max-w-2xl">
                Empower your practice with HIPAA-compliant, AI-driven weight loss and nutrition coaching. 
                Custom templates, automated food analysis, and personalized care for every patient.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Get Started Today
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="medical" size="xl">
                Schedule Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-text-medical mb-4">Trusted by leading healthcare providers:</p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-lg font-semibold">Mayo Clinic Partners</div>
                <div className="text-lg font-semibold">Kaiser Permanente</div>
                <div className="text-lg font-semibold">Cleveland Clinic</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image/Video */}
          <div className="relative animate-slide-up">
            {/* Option 1: Video Player (uncomment when video URL is available) */}
            {/* <VideoPlayer 
              className="w-full"
              posterImage={heroImage}
              title="Client Health Tracker Demo"
              description="See our platform in action"
              autoplay={true}
              muted={true}
            /> */}
            
            {/* Option 2: Static Image with Video CTA (current default) */}
            <div className="relative">
              <img
                src={heroImage}
                alt="Healthcare provider using Client Health Tracker"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              
              {/* Video Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="ghost"
                  size="lg"
                  className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-primary hover:text-primary shadow-lg opacity-90 hover:opacity-100 transition-all"
                  onClick={() => {
                    // Scroll to video section
                    document.querySelector('#video-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-card animate-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm font-medium">Patient Progress: +15%</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-card">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium">AI Insights: 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;