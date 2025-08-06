import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, TrendingUp, Target, CheckCircle } from "lucide-react";

// Mock data - replace with real API calls
const mockData = {
  client: {
    name: "Sarah",
    startDate: "January 15, 2024",
    daysActive: 45
  },
  keyMetrics: {
    compliance: { value: 87, target: 90 },
    currentWeight: 165.2,
    initialWeight: 178.5,
    goalWeight: 155,
    progressPercentage: 56
  },
  macros: {
    protein: { consumed: 120, target: 140, percentage: 86 },
    carbs: { consumed: 180, target: 200, percentage: 90 },
    fats: { consumed: 65, target: 70, percentage: 93 },
    calories: { consumed: 1850, target: 1900, percentage: 97 }
  }
};

export default function Progress() {
  const [timeRange, setTimeRange] = useState("week");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Welcome Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome back, {mockData.client.name}! 👋</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Started {mockData.client.startDate} • {mockData.client.daysActive} days active
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.keyMetrics.compliance.value}%</div>
              <ProgressBar value={mockData.keyMetrics.compliance.value} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">Target: {mockData.keyMetrics.compliance.target}%</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.keyMetrics.currentWeight} lbs</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-xs text-green-500">-1.8 lbs this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Goal Weight</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.keyMetrics.goalWeight} lbs</div>
              <div className="flex items-center gap-1 mt-1">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">
                  {(mockData.keyMetrics.currentWeight - mockData.keyMetrics.goalWeight).toFixed(1)} lbs to go
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.keyMetrics.progressPercentage}%</div>
              <ProgressBar value={mockData.keyMetrics.progressPercentage} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">Of total goal achieved</p>
            </CardContent>
          </Card>
        </div>

        {/* Time Range Selector */}
        <div className="flex gap-2">
          <Button 
            variant={timeRange === "week" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("week")}
          >
            This Week
          </Button>
          <Button 
            variant={timeRange === "month" ? "default" : "outline"} 
            size="sm"
            onClick={() => setTimeRange("month")}
          >
            This Month
          </Button>
        </div>

        {/* Progress Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="meals">Today's Meals</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="micronutrients">Micronutrients</TabsTrigger>
            <TabsTrigger value="goals" className="hidden lg:block">Goals</TabsTrigger>
            <TabsTrigger value="coaching" className="hidden lg:block">Coaching</TabsTrigger>
            <TabsTrigger value="reports" className="hidden lg:block">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* AI Health Assistant */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-sm">AI</span>
                  </div>
                  Weekly Trend Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  Great work this week! Your consistency with meal logging is paying off. 
                  I noticed you've been hitting your protein targets consistently, which is 
                  excellent for maintaining muscle mass during weight loss. Consider increasing 
                  your vegetable intake at lunch to boost fiber and micronutrients.
                </p>
              </CardContent>
            </Card>

            {/* Macro Tracking */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Macro Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Protein</span>
                      <span className="text-sm text-muted-foreground">
                        {mockData.macros.protein.consumed}g / {mockData.macros.protein.target}g
                      </span>
                    </div>
                    <ProgressBar value={mockData.macros.protein.percentage} className="h-2" />
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">{mockData.macros.protein.percentage}% of target</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Carbs</span>
                      <span className="text-sm text-muted-foreground">
                        {mockData.macros.carbs.consumed}g / {mockData.macros.carbs.target}g
                      </span>
                    </div>
                    <ProgressBar value={mockData.macros.carbs.percentage} className="h-2" />
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">{mockData.macros.carbs.percentage}% of target</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Fats</span>
                      <span className="text-sm text-muted-foreground">
                        {mockData.macros.fats.consumed}g / {mockData.macros.fats.target}g
                      </span>
                    </div>
                    <ProgressBar value={mockData.macros.fats.percentage} className="h-2" />
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">{mockData.macros.fats.percentage}% of target</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Calories</span>
                      <span className="text-sm text-muted-foreground">
                        {mockData.macros.calories.consumed} / {mockData.macros.calories.target}
                      </span>
                    </div>
                    <ProgressBar value={mockData.macros.calories.percentage} className="h-2" />
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">{mockData.macros.calories.percentage}% of target</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="meals">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Today's Meals content would go here</p>
              <Button className="mt-4">View Detailed Meals Page</Button>
            </div>
          </TabsContent>

          <TabsContent value="trends">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Trends analysis would go here</p>
            </div>
          </TabsContent>

          <TabsContent value="micronutrients">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Micronutrient tracking would go here</p>
              <Button className="mt-4">View Detailed Micronutrients Page</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}