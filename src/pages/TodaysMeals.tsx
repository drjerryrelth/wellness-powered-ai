import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Plus, Clock, Sparkles, TrendingUp, Heart, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import aiFoodAnalysis from "@/assets/ai-food-analysis.jpg";
import { EnergyMacroSummary } from "@/components/EnergyMacroSummary";
import { NutrientTargets } from "@/components/NutrientTargets";

// Enhanced mock data
const mockData = {
  client: {
    name: "James Hall",
    email: "james@email.com",
    lastActivity: "Today, 7:25:17 AM"
  },
  calories: {
    consumed: 1450,
    burned: 480,
    remaining: 320,
    target: 1900
  },
  macros: {
    protein: { consumed: 125, target: 140, percentage: 89 },
    carbs: { consumed: 45, target: 95, percentage: 47 },
    fat: { consumed: 85, target: 75, percentage: 113 }
  },
  nutritionScores: [
    { name: "Fiber", value: 28, target: 38, unit: "g", percentage: 74, color: "success" as const },
    { name: "Thiamin", value: 1.8, target: 2.4, unit: "mg", percentage: 75, color: "success" as const },
    { name: "Vitamin C", value: 45, target: 75, unit: "mg", percentage: 60, color: "warning" as const },
    { name: "Manganese", value: 2.1, target: 2.3, unit: "mg", percentage: 91, color: "success" as const },
    { name: "Electrolytes", value: 820, target: 1600, unit: "mg", percentage: 51, color: "warning" as const },
    { name: "Antioxidants", value: 12, target: 18, unit: "ORAC", percentage: 67, color: "success" as const },
    { name: "Omega-3", value: 1.2, target: 1.6, unit: "g", percentage: 75, color: "success" as const },
    { name: "Vitamin D", value: 8, target: 10, unit: "mcg", percentage: 80, color: "success" as const }
  ],
  highlightedNutrients: [
    { name: "Iron", value: 15, target: 18, unit: "mg", percentage: 83, color: "success" as const },
    { name: "Folate", value: 285, target: 400, unit: "mcg", percentage: 71, color: "success" as const },
    { name: "Calcium", value: 850, target: 1000, unit: "mg", percentage: 85, color: "success" as const },
    { name: "Potassium", value: 2800, target: 3500, unit: "mg", percentage: 80, color: "success" as const },
    { name: "Zinc", value: 8.5, target: 11, unit: "mg", percentage: 77, color: "success" as const },
    { name: "Magnesium", value: 320, target: 400, unit: "mg", percentage: 80, color: "success" as const },
    { name: "Vitamin B12", value: 2.8, target: 2.4, unit: "mcg", percentage: 117, color: "success" as const },
    { name: "Biotin", value: 28, target: 30, unit: "mcg", percentage: 93, color: "success" as const }
  ],
  meals: [
    {
      type: "Breakfast",
      foods: [
        "Overnight Oats with Berries",
        "Almond Milk", 
        "Greek Yogurt"
      ],
      calories: 420,
      time: "7:30 AM",
      logged: true
    },
    {
      type: "Lunch", 
      foods: [
        "Grilled Salmon",
        "Quinoa Bowl",
        "Mixed Vegetables"
      ],
      calories: 580,
      time: "12:15 PM", 
      logged: true
    },
    {
      type: "Dinner",
      foods: [],
      calories: 0,
      time: "Planned",
      logged: false
    },
    {
      type: "Snacks",
      foods: [
        "Apple with Almond Butter",
        "Herbal Tea"
      ],
      calories: 180,
      time: "3:45 PM",
      logged: true
    }
  ]
};

export default function TodaysMeals() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20">
      {/* Premium Header Section with Client Info */}
      <div className="relative bg-gradient-to-r from-slate-800 via-gray-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Client Dashboard
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                  {mockData.client.name}
                </h1>
                <p className="text-lg text-gray-300">
                  {mockData.client.email}
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Last activity: {mockData.client.lastActivity}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  May
                </Button>
                <div className="text-white font-semibold">
                  Today • May 6, 2024
                </div>
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aiFoodAnalysis} 
                alt="Advanced Food Analysis Interface" 
                className="rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-8 -mt-6 relative z-10">

        {/* Energy and Macro Summary - Cronometer Style */}
        <EnergyMacroSummary 
          calories={mockData.calories}
          macros={mockData.macros}
        />

        {/* Nutrition Scores */}
        <NutrientTargets 
          title="Nutrition Scores"
          nutrients={mockData.nutritionScores}
          columns={4}
        />

        {/* Highlighted Nutrients */}
        <NutrientTargets 
          title="Highlighted Nutrients"
          nutrients={mockData.highlightedNutrients}
          columns={4}
        />

        {/* Suggest Food Section */}
        <Card className="premium-card bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-950/40 dark:to-orange-950/40 border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="text-xl font-display font-bold flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></div>
              Suggest Food
            </CardTitle>
            <p className="text-muted-foreground">AI-powered recommendations to optimize your nutrition</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-700">
                <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">For Fiber</h4>
                <p className="text-sm text-muted-foreground">Try adding chia seeds to your breakfast or having a large mixed salad with lunch.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-700">
                <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">For Vitamin C</h4>
                <p className="text-sm text-muted-foreground">Add bell peppers, citrus fruits, or strawberries to boost your vitamin C intake.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-amber-200 dark:border-amber-700">
                <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">For Electrolytes</h4>
                <p className="text-sm text-muted-foreground">Consider coconut water or adding a pinch of sea salt to your meals.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Targets Progress Summary */}
        <Card className="premium-card">
          <CardHeader>
            <CardTitle className="text-xl font-display font-bold flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
              Daily Targets Progress
            </CardTitle>
            <p className="text-muted-foreground">Overall nutritional goal achievement</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-green-700 dark:text-green-400">Targets Met</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Protein (89% - Close to target)
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Most micronutrients above 70%
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Good variety of whole foods
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-amber-700 dark:text-amber-400">Focus Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Increase fiber intake (74% of target)
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Boost vitamin C sources (60% of target)
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    Add more electrolyte-rich foods
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}