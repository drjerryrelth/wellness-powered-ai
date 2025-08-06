import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Dna, Leaf, Zap, Sparkles, Heart, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nutritionDashboard from "@/assets/nutrition-dashboard.jpg";

const Templates = () => {
  const templates = [
    {
      title: "GLP-1 Support",
      icon: <Dna className="w-8 h-8" />,
      description: "Comprehensive support program for patients using GLP-1 medications",
      features: [
        "Medication adherence tracking",
        "Side effect management",
        "Nutrition optimization for GLP-1 users",
        "Progress monitoring and adjustments",
        "Educational resources and support"
      ],
      badge: "Popular"
    },
    {
      title: "Practice Naturals™",
      icon: <Leaf className="w-8 h-8" />,
      description: "Natural wellness approach focusing on whole food nutrition and lifestyle",
      features: [
        "Whole food nutrition protocols",
        "Natural supplement recommendations",
        "Lifestyle modification strategies",
        "Holistic health assessments",
        "Sustainable wellness plans"
      ],
      badge: "Holistic"
    },
    {
      title: "ChiroThin™",
      icon: <Zap className="w-8 h-8" />,
      description: "Specialized weight loss program designed for chiropractic practices",
      features: [
        "Structured weight loss protocols",
        "Chiropractic-specific guidelines",
        "Patient education materials",
        "Progress tracking tools",
        "Maintenance phase support"
      ],
      badge: "Specialized"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20">
      <Header />
      
      {/* Premium Header Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-white/5 opacity-20" style={{backgroundImage: "radial-gradient(circle at 50% 50%, white 2px, transparent 2px)", backgroundSize: "60px 60px"}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Enterprise Templates
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight">
                  Pre-Built <span className="text-purple-200">Templates</span>
                </h1>
                <p className="text-xl text-purple-100 font-medium leading-relaxed">
                  We have pre-built templates for many popular programs and you can also quickly and easily create your own to fit your business model.
                </p>
                <p className="text-purple-200 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Enterprise-grade solutions • Custom template builder
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 shadow-lg font-semibold">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Schedule Demo
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Create Custom Template
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src={nutritionDashboard} 
                alt="Template Management Interface" 
                className="relative rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
      
      <main className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Templates Grid - Premium Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {templates.map((template, index) => (
              <Card key={index} className="premium-card group hover:shadow-elegant transition-all duration-300">
                <CardHeader className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all">
                      {template.icon}
                    </div>
                    <Badge variant="secondary" className="bg-primary-light text-primary-foreground px-3 py-1 font-semibold">
                      {template.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-display font-bold text-text-hero mb-3">
                    {template.title}
                  </CardTitle>
                  <CardDescription className="text-text-medical text-lg leading-relaxed">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4 mb-8">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mt-0.5 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-text-medical font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-lg hover:shadow-xl transition-all font-semibold" size="lg">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Custom Templates Section - Premium */}
          <Card className="premium-card bg-gradient-to-r from-primary-light/50 to-secondary-light/50 dark:from-primary-light/20 dark:to-secondary-light/20 border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow">
                  <Zap className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-display font-bold text-text-hero mb-6">
                Create Your Own Template
              </h2>
              <p className="text-xl text-text-medical mb-10 max-w-3xl mx-auto leading-relaxed">
                Don't see what you're looking for? Our intuitive template builder lets you create custom programs tailored to your specific practice needs and methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="h-14 px-8 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-lg hover:shadow-xl transition-all font-semibold text-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Building
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-8 border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 transition-all font-semibold text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Templates;