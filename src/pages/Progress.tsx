import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircularProgress } from "@/components/CircularProgress";
import { Calendar, TrendingUp, Target, CheckCircle, Activity, Sparkles, Heart } from "lucide-react";
import progressDashboard from "@/assets/progress-dashboard.jpg";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20">
      {/* Premium Header Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-white/5 opacity-20" style={{backgroundImage: "radial-gradient(circle at 50% 50%, white 2px, transparent 2px)", backgroundSize: "60px 60px"}}></div>
        
        <div className="relative container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Progress Analytics
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                  Welcome back, <span className="text-purple-200">{mockData.client.name}</span>! 👋
                </h1>
                <p className="text-xl text-purple-100 font-medium">
                  Your comprehensive wellness journey tracking
                </p>
                <p className="text-purple-200 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Started {mockData.client.startDate} • {mockData.client.daysActive} days active
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-3xl blur-3xl"></div>
              <img 
                src={progressDashboard} 
                alt="Advanced Progress Dashboard" 
                className="relative rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6 space-y-8 -mt-12 relative z-10">

        {/* Key Metrics - Premium Circular Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="premium-card group">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <CircularProgress 
                  value={mockData.keyMetrics.compliance.value} 
                  size={100}
                  color="success"
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">{mockData.keyMetrics.compliance.value}%</div>
                  </div>
                </CircularProgress>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg">Compliance</h3>
                  <p className="text-sm text-muted-foreground">Target: {mockData.keyMetrics.compliance.target}%</p>
                  <Badge className="mt-2 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100">
                    Excellent
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card group">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <CircularProgress 
                  value={75} 
                  size={100}
                  color="default"
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">{mockData.keyMetrics.currentWeight}</div>
                    <div className="text-xs text-muted-foreground">lbs</div>
                  </div>
                </CircularProgress>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg">Current Weight</h3>
                  <div className="flex items-center gap-1 justify-center mt-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">-1.8 lbs this week</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card group">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <CircularProgress 
                  value={100} 
                  size={100}
                  color="warning"
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">{mockData.keyMetrics.goalWeight}</div>
                    <div className="text-xs text-muted-foreground">lbs</div>
                  </div>
                </CircularProgress>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg">Goal Weight</h3>
                  <div className="flex items-center gap-1 justify-center mt-1">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {(mockData.keyMetrics.currentWeight - mockData.keyMetrics.goalWeight).toFixed(1)} lbs to go
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="premium-card group">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <CircularProgress 
                  value={mockData.keyMetrics.progressPercentage} 
                  size={100}
                  color="success"
                >
                  <div className="text-center">
                    <div className="text-xl font-bold">{mockData.keyMetrics.progressPercentage}%</div>
                  </div>
                </CircularProgress>
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg">Progress</h3>
                  <p className="text-sm text-muted-foreground">Of total goal achieved</p>
                  <Badge className="mt-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100">
                    On Track
                  </Badge>
                </div>
              </div>
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

            {/* Macro Tracking - Premium Circular Progress */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-xl font-display font-bold flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  Today's Macro Breakdown
                </CardTitle>
                <p className="text-muted-foreground">Real-time nutritional balance analysis</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center space-y-3">
                    <CircularProgress 
                      value={mockData.macros.protein.percentage} 
                      size={90}
                      color="success"
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">{mockData.macros.protein.percentage}%</div>
                      </div>
                    </CircularProgress>
                    <div className="text-center">
                      <h4 className="font-semibold">Protein</h4>
                      <p className="text-sm text-muted-foreground">
                        {mockData.macros.protein.consumed}g / {mockData.macros.protein.target}g
                      </p>
                      <Badge className="mt-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        On Target
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <CircularProgress 
                      value={mockData.macros.carbs.percentage} 
                      size={90}
                      color="warning"
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">{mockData.macros.carbs.percentage}%</div>
                      </div>
                    </CircularProgress>
                    <div className="text-center">
                      <h4 className="font-semibold">Carbs</h4>
                      <p className="text-sm text-muted-foreground">
                        {mockData.macros.carbs.consumed}g / {mockData.macros.carbs.target}g
                      </p>
                      <Badge className="mt-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-100">
                        Good
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <CircularProgress 
                      value={mockData.macros.fats.percentage} 
                      size={90}
                      color="success"
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">{mockData.macros.fats.percentage}%</div>
                      </div>
                    </CircularProgress>
                    <div className="text-center">
                      <h4 className="font-semibold">Fats</h4>
                      <p className="text-sm text-muted-foreground">
                        {mockData.macros.fats.consumed}g / {mockData.macros.fats.target}g
                      </p>
                      <Badge className="mt-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Excellent
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <CircularProgress 
                      value={mockData.macros.calories.percentage} 
                      size={90}
                      color="success"
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold">{mockData.macros.calories.percentage}%</div>
                      </div>
                    </CircularProgress>
                    <div className="text-center">
                      <h4 className="font-semibold">Calories</h4>
                      <p className="text-sm text-muted-foreground">
                        {mockData.macros.calories.consumed} / {mockData.macros.calories.target}
                      </p>
                      <Badge className="mt-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Perfect
                      </Badge>
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