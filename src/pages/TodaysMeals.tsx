import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, Plus, AlertCircle, TrendingUp, Sparkles } from "lucide-react";
import nutritionDashboard from "@/assets/nutrition-dashboard.jpg";
import aiAnalysis from "@/assets/ai-food-analysis.jpg";

// Mock meal data - replace with real API calls
const mockMeals = [
  {
    id: 1,
    type: "Breakfast",
    time: "8:30 AM",
    foods: [
      "2 whole eggs",
      "1 slice avocado toast",
      "1 cup mixed berries",
      "1 cup black coffee"
    ],
    nutrition: {
      calories: 485,
      protein: 22,
      carbs: 45,
      fat: 24
    },
    feedback: {
      status: "excellent",
      message: "Perfect protein start to your day! Great balance of healthy fats."
    }
  },
  {
    id: 2,
    type: "Lunch",
    time: "12:45 PM", 
    foods: [
      "Grilled chicken breast (6oz)",
      "Quinoa salad with vegetables",
      "Mixed green salad",
      "Olive oil dressing"
    ],
    nutrition: {
      calories: 625,
      protein: 54,
      carbs: 48,
      fat: 18
    },
    feedback: {
      status: "good",
      message: "Excellent protein choice! Consider adding more colorful vegetables for extra micronutrients."
    }
  },
  {
    id: 3,
    type: "Dinner",
    time: "7:15 PM",
    foods: [
      "Baked salmon (5oz)",
      "Roasted sweet potato",
      "Steamed broccoli",
      "Small side salad"
    ],
    nutrition: {
      calories: 540,
      protein: 38,
      carbs: 32,
      fat: 22
    },
    feedback: {
      status: "excellent",
      message: "Fantastic omega-3 rich choice! Perfect portion sizes and great vegetable variety."
    }
  },
  {
    id: 4,
    type: "Snacks",
    time: "Various",
    foods: [
      "Greek yogurt with almonds",
      "Apple with almond butter"
    ],
    nutrition: {
      calories: 320,
      protein: 18,
      carbs: 28,
      fat: 16
    },
    feedback: {
      status: "good",
      message: "Good protein-rich snacks! Well timed between meals."
    }
  }
];

const dailyTotals = {
  calories: { consumed: 1970, target: 1900, percentage: 104 },
  protein: { consumed: 132, target: 140, percentage: 94 },
  carbs: { consumed: 153, target: 190, percentage: 81 },
  fat: { consumed: 80, target: 75, percentage: 107 }
};

const aiSummary = {
  overall: "excellent",
  compliance: 94,
  highlights: [
    "Hit protein targets consistently across all meals",
    "Great variety of nutrient-dense whole foods",
    "Well-timed meals and snacks for stable energy"
  ],
  improvements: [
    "Add 1-2 more servings of colorful vegetables",
    "Consider increasing complex carbs at breakfast",
    "Stay within calorie target by reducing portion sizes slightly"
  ],
  nextDayFocus: "Focus on hitting fiber targets with more vegetables and consider meal prep for consistent timing."
};

export default function TodaysMeals() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 dark:from-green-950/20 dark:to-emerald-950/20";
      case "good": return "text-blue-600 bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200 dark:from-blue-950/20 dark:to-sky-950/20";
      case "needs-work": return "text-orange-600 bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 dark:from-orange-950/20 dark:to-amber-950/20";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "good":
        return <TrendingUp className="w-4 h-4 text-blue-500" />;
      case "needs-work":
        return <AlertCircle className="w-4 h-4 text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with AI Analysis Visual */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-300" />
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  AI-Powered Analysis
                </Badge>
              </div>
              <h1 className="text-4xl font-bold">Today's Meal Analysis</h1>
              <p className="text-xl text-blue-100">
                Advanced AI instantly analyzes your food choices, providing detailed nutritional insights and personalized coaching recommendations.
              </p>
              <div className="flex items-center gap-2 text-blue-200">
                <Clock className="w-4 h-4" />
                Tuesday, March 12, 2024
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiAnalysis} 
                alt="AI Food Analysis Dashboard" 
                className="rounded-xl shadow-2xl border border-white/20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-6 -mt-8 relative z-10">

        {/* Quick Actions */}
        <div className="flex justify-end mb-6">
          <Button size="lg" className="shadow-lg">
            <Plus className="w-4 h-4 mr-2" />
            Add Meal
          </Button>
        </div>

        {/* Daily Review Summary */}
        <Card className={`border-2 shadow-xl ${getStatusColor(aiSummary.overall)}`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                <Sparkles className="text-white text-sm" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xl">AI Nutrition Analysis</span>
                  <Badge variant="outline" className="bg-white/80">
                    {aiSummary.compliance}% Compliance
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">Advanced AI insights for optimal nutrition</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  What You Did Great
                </h4>
                <ul className="space-y-1">
                  {aiSummary.highlights.map((highlight, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  Areas for Improvement
                </h4>
                <ul className="space-y-1">
                  {aiSummary.improvements.map((improvement, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-1">Tomorrow's Focus</h4>
              <p className="text-sm text-blue-600 dark:text-blue-300">{aiSummary.nextDayFocus}</p>
            </div>
          </CardContent>
        </Card>

        {/* Daily Macro Summary */}
        <Card className="shadow-lg border-primary/20 bg-gradient-to-r from-white to-blue-50/30 dark:from-gray-900 dark:to-blue-950/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-primary to-blue-600 rounded-full"></div>
              Daily Macro Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Calories</span>
                  <span className="text-sm text-muted-foreground">
                    {dailyTotals.calories.consumed} / {dailyTotals.calories.target}
                  </span>
                </div>
                <Progress value={dailyTotals.calories.percentage} className="h-3" />
                <span className="text-xs text-muted-foreground">{dailyTotals.calories.percentage}% of target</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Protein</span>
                  <span className="text-sm text-muted-foreground">
                    {dailyTotals.protein.consumed}g / {dailyTotals.protein.target}g
                  </span>
                </div>
                <Progress value={dailyTotals.protein.percentage} className="h-3" />
                <span className="text-xs text-muted-foreground">{dailyTotals.protein.percentage}% of target</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Carbs</span>
                  <span className="text-sm text-muted-foreground">
                    {dailyTotals.carbs.consumed}g / {dailyTotals.carbs.target}g
                  </span>
                </div>
                <Progress value={dailyTotals.carbs.percentage} className="h-3" />
                <span className="text-xs text-muted-foreground">{dailyTotals.carbs.percentage}% of target</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Fat</span>
                  <span className="text-sm text-muted-foreground">
                    {dailyTotals.fat.consumed}g / {dailyTotals.fat.target}g
                  </span>
                </div>
                <Progress value={dailyTotals.fat.percentage} className="h-3" />
                <span className="text-xs text-muted-foreground">{dailyTotals.fat.percentage}% of target</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Meals */}
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-blue-600 rounded-full"></div>
            Meal Breakdown
          </h2>
          <p className="text-muted-foreground">Detailed analysis of each meal with AI-powered feedback</p>
        </div>
        <div className="grid gap-6">{mockMeals.map((meal) => (
            <Card key={meal.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/50 bg-gradient-to-r from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {meal.type}
                      {getStatusIcon(meal.feedback.status)}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {meal.time}
                    </p>
                  </div>
                  <Badge variant="outline">{meal.nutrition.calories} cal</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Food Items */}
                <div>
                  <h4 className="font-medium mb-2">Foods</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {meal.foods.map((food, index) => (
                      <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {food}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutrition Breakdown */}
                <div>
                  <h4 className="font-medium mb-2">Nutrition Breakdown</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-2 rounded-lg bg-muted/50">
                      <div className="text-lg font-bold">{meal.nutrition.calories}</div>
                      <div className="text-xs text-muted-foreground">Calories</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                      <div className="text-lg font-bold text-blue-600">{meal.nutrition.protein}g</div>
                      <div className="text-xs text-blue-600">Protein</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                      <div className="text-lg font-bold text-orange-600">{meal.nutrition.carbs}g</div>
                      <div className="text-xs text-orange-600">Carbs</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                      <div className="text-lg font-bold text-purple-600">{meal.nutrition.fat}g</div>
                      <div className="text-xs text-purple-600">Fat</div>
                    </div>
                  </div>
                </div>

                {/* AI Feedback */}
                <div className={`p-4 rounded-xl border shadow-sm ${getStatusColor(meal.feedback.status)}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-md flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-sm flex items-center gap-2">
                        AI Nutrition Feedback
                        {getStatusIcon(meal.feedback.status)}
                      </h5>
                      <p className="text-sm mt-1 leading-relaxed">{meal.feedback.message}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}