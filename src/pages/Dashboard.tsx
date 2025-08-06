import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, Weight, CheckCircle, BookOpen, Heart, Activity, Award, Sparkles } from "lucide-react";
import nutritionDashboard from "@/assets/nutrition-dashboard.jpg";

// Mock data - replace with real API calls
const mockData = {
  motivation: {
    message: "Great job staying consistent this week! 💪 Keep up the amazing work!",
    emoji: "🌟"
  },
  stats: {
    weight: { current: 165.2, change: -1.8, trend: "down" },
    sleep: { hours: 7.5, quality: "Good", trend: "up" },
    compliance: { percentage: 87, trend: "up" }
  },
  recentActivity: [
    { type: "meal", message: "Logged breakfast - Great protein choices!", time: "2 hours ago" },
    { type: "weight", message: "Weight check-in: 165.2 lbs", time: "This morning" },
    { type: "goal", message: "Hit daily water goal 💧", time: "Yesterday" }
  ]
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20">
      {/* Compact Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-display font-bold">Welcome back, Sarah! 👋</h1>
              <p className="text-sm text-muted-foreground">Your health dashboard</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                Check-In
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 space-y-6">
        {/* Daily Motivation - Premium Card */}
        <Card className="premium-card border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-950/40 dark:to-indigo-950/40">
          <CardContent className="p-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <div className="text-3xl">✨</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2">Daily Motivation</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{mockData.motivation.message}</p>
                <Badge className="mt-3 bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100">
                  <Award className="w-3 h-3 mr-1" />
                  Consistency Streak: 12 days
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Latest Stats - Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weight Card */}
          <Card className="premium-card group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-display font-semibold text-gray-900 dark:text-white">Current Weight</CardTitle>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <Weight className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-display font-bold text-gray-900 dark:text-white">{mockData.stats.weight.current} lbs</div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30">
                  <TrendingDown className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                    {mockData.stats.weight.change} lbs this week
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '67%'}}></div>
              </div>
            </CardContent>
          </Card>

          {/* Sleep Card */}
          <Card className="premium-card group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-display font-semibold text-gray-900 dark:text-white">Sleep Quality</CardTitle>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <Clock className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-display font-bold text-gray-900 dark:text-white">{mockData.stats.sleep.hours}h</div>
              <div className="flex items-center gap-2">
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100">
                  {mockData.stats.sleep.quality}
                </Badge>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Improving</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Card */}
          <Card className="premium-card group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-lg font-display font-semibold text-gray-900 dark:text-white">Weekly Compliance</CardTitle>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-display font-bold text-gray-900 dark:text-white">{mockData.stats.compliance.percentage}%</div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">+5% from last week</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{width: '87%'}}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions - Premium Layout */}
        <Card className="premium-card bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-gray-800/80 dark:to-gray-900/80">
          <CardHeader>
            <CardTitle className="text-xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
              Quick Actions
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">Fast-track your health journey</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Button className="h-20 flex-col gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all group">
                <CheckCircle className="h-7 w-7 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Daily Check-In</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col gap-3 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 shadow-sm hover:shadow-lg transition-all group">
                <BookOpen className="h-7 w-7 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-110 transition-all" />
                <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">My Program</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity - Enhanced */}
        <Card className="premium-card">
          <CardHeader>
            <CardTitle className="text-xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
              Recent Activity
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">Your latest health milestones</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50/50 to-transparent dark:from-gray-800/50 hover:from-blue-50/50 dark:hover:from-blue-950/30 transition-all group">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md group-hover:shadow-lg transition-all"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white">{activity.message}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-all">
                    <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}