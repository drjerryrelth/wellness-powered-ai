import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CircularProgress } from "@/components/CircularProgress";
import { Search, Heart, TrendingUp, AlertCircle, CheckCircle, Sparkles, Activity } from "lucide-react";
import micronutrientInterface from "@/assets/micronutrient-interface.jpg";

// Mock micronutrient data - replace with real API calls
const mockNutrients = [
  { name: "Vitamin D", value: 45, target: 100, unit: "IU", status: "low", category: "vitamins", 
    description: "Essential for bone health and immune function",
    sources: ["Salmon", "Fortified milk", "Sunlight"], 
    tip: "Consider morning sunlight exposure or supplementation" },
  { name: "Iron", value: 85, target: 100, unit: "mg", status: "good", category: "minerals",
    description: "Crucial for oxygen transport and energy production",
    sources: ["Red meat", "Spinach", "Lentils"],
    tip: "Pair with vitamin C for better absorption" },
  { name: "Vitamin B12", value: 120, target: 100, unit: "mcg", status: "high", category: "vitamins",
    description: "Important for nerve function and red blood cell formation", 
    sources: ["Fish", "Meat", "Fortified cereals"],
    tip: "Levels look great! Maintain current intake" },
  { name: "Folate", value: 92, target: 100, unit: "mcg", status: "good", category: "vitamins",
    description: "Essential for DNA synthesis and cell division",
    sources: ["Leafy greens", "Legumes", "Fortified grains"],
    tip: "Excellent intake from whole foods" },
  { name: "Calcium", value: 65, target: 100, unit: "mg", status: "moderate", category: "minerals",
    description: "Critical for bone and tooth health",
    sources: ["Dairy", "Leafy greens", "Almonds"],
    tip: "Add more dairy or plant-based alternatives" },
  { name: "Magnesium", value: 78, target: 100, unit: "mg", status: "moderate", category: "minerals",
    description: "Supports muscle and nerve function",
    sources: ["Nuts", "Seeds", "Dark chocolate"],
    tip: "Snack on almonds or pumpkin seeds" },
  { name: "Zinc", value: 88, target: 100, unit: "mg", status: "good", category: "minerals",
    description: "Important for immune system and wound healing",
    sources: ["Oysters", "Beef", "Pumpkin seeds"],
    tip: "Well balanced! Keep up current diet" },
  { name: "Vitamin C", value: 145, target: 100, unit: "mg", status: "high", category: "vitamins",
    description: "Powerful antioxidant and immune booster",
    sources: ["Citrus fruits", "Berries", "Bell peppers"],
    tip: "Great intake! Supports iron absorption" },
];

const statusCounts = {
  good: mockNutrients.filter(n => n.status === "good" || n.status === "high").length,
  moderate: mockNutrients.filter(n => n.status === "moderate").length,
  low: mockNutrients.filter(n => n.status === "low").length
};

export default function Micronutrients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNutrient, setSelectedNutrient] = useState<typeof mockNutrients[0] | null>(null);

  const filteredNutrients = mockNutrients.filter(nutrient => {
    const matchesSearch = nutrient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || nutrient.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good": return "success";
      case "high": return "success";
      case "moderate": return "warning";
      case "low": return "destructive";
      default: return "default";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
      case "high":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "moderate":
        return <AlertCircle className="w-4 h-4 text-orange-500" />;
      case "low":
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20">
      {/* Compact Header with Background Color */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-display font-bold">Precision Micronutrient Tracking</h1>
            <p className="text-lg text-emerald-100 mt-2">Advanced nutritional insights beyond basic macros</p>
            <p className="text-emerald-200 text-sm mt-1">30+ Essential nutrients • AI-powered recommendations</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 space-y-6">

        {/* Status Summary - Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="premium-card bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-950/40 dark:to-emerald-950/40 border-l-4 border-l-green-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-green-700 dark:text-green-400">{statusCounts.good}</div>
                  <p className="text-lg font-medium text-green-600 dark:text-green-500">Meeting Goals</p>
                  <p className="text-sm text-green-500/80">Optimal levels achieved</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card bg-gradient-to-r from-orange-50/80 to-amber-50/80 dark:from-orange-950/40 dark:to-amber-950/40 border-l-4 border-l-orange-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-orange-700 dark:text-orange-400">{statusCounts.moderate}</div>
                  <p className="text-lg font-medium text-orange-600 dark:text-orange-500">Close to Goals</p>
                  <p className="text-sm text-orange-500/80">Minor adjustments needed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card bg-gradient-to-r from-red-50/80 to-rose-50/80 dark:from-red-950/40 dark:to-rose-950/40 border-l-4 border-l-red-500">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-red-700 dark:text-red-400">{statusCounts.low}</div>
                  <p className="text-lg font-medium text-red-600 dark:text-red-500">Need Attention</p>
                  <p className="text-sm text-red-500/80">Immediate focus required</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search nutrients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              size="sm"
            >
              All
            </Button>
            <Button 
              variant={selectedCategory === "vitamins" ? "default" : "outline"}
              onClick={() => setSelectedCategory("vitamins")}
              size="sm"
            >
              Vitamins
            </Button>
            <Button 
              variant={selectedCategory === "minerals" ? "default" : "outline"}
              onClick={() => setSelectedCategory("minerals")}
              size="sm"
            >
              Minerals
            </Button>
          </div>
        </div>

        {/* Priority Focus (show nutrients that need attention) */}
        {statusCounts.low > 0 && (
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertCircle className="w-5 h-5" />
                Priority Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockNutrients.filter(n => n.status === "low").map((nutrient) => (
                  <div key={nutrient.name} className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-red-900 dark:text-red-100">{nutrient.name}</h4>
                      <Badge variant="destructive">{Math.round((nutrient.value / nutrient.target) * 100)}%</Badge>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-300">{nutrient.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Micronutrient Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNutrients.map((nutrient) => {
            const percentage = Math.round((nutrient.value / nutrient.target) * 100);
            return (
              <Card 
                key={nutrient.name} 
                className="cursor-pointer transition-all hover:shadow-lg"
                onClick={() => setSelectedNutrient(nutrient)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <CircularProgress 
                      value={percentage} 
                      size={80}
                      color={getStatusColor(nutrient.status) as any}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">{percentage}%</div>
                      </div>
                    </CircularProgress>
                    
                    <div className="text-center space-y-1">
                      <h3 className="font-semibold">{nutrient.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {nutrient.value} / {nutrient.target} {nutrient.unit}
                      </p>
                      <div className="flex items-center justify-center gap-1">
                        {getStatusIcon(nutrient.status)}
                        <Badge variant={nutrient.status === "good" || nutrient.status === "high" ? "default" : 
                                      nutrient.status === "moderate" ? "secondary" : "destructive"}>
                          {nutrient.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Nutrient Detail Modal */}
        {selectedNutrient && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedNutrient(null)}>
            <Card className="w-full max-w-md" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {selectedNutrient.name}
                  <Button variant="ghost" size="sm" onClick={() => setSelectedNutrient(null)}>×</Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <CircularProgress 
                    value={Math.round((selectedNutrient.value / selectedNutrient.target) * 100)} 
                    size={120}
                    color={getStatusColor(selectedNutrient.status) as any}
                  />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-1">What it does</h4>
                    <p className="text-sm text-muted-foreground">{selectedNutrient.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Best sources</h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedNutrient.sources.map((source) => (
                        <Badge key={source} variant="outline" className="text-xs">{source}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Pro tip</h4>
                    <p className="text-sm text-muted-foreground">{selectedNutrient.tip}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}