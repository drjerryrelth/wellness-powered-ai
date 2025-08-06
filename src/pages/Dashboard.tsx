import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Clock, Weight, CheckCircle, BookOpen } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Sarah! 👋</h1>
            <p className="text-muted-foreground">Here's your health summary for today</p>
          </div>
          <Button>
            <CheckCircle className="w-4 h-4 mr-2" />
            Quick Check-In
          </Button>
        </div>

        {/* Daily Motivation */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{mockData.motivation.emoji}</div>
              <div>
                <h3 className="font-semibold text-lg">Daily Motivation</h3>
                <p className="text-muted-foreground">{mockData.motivation.message}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Latest Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weight Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Weight</CardTitle>
              <Weight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.stats.weight.current} lbs</div>
              <div className="flex items-center gap-1 text-sm">
                {mockData.stats.weight.trend === "down" ? (
                  <TrendingDown className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingUp className="h-4 w-4 text-red-500" />
                )}
                <span className={mockData.stats.weight.trend === "down" ? "text-green-500" : "text-red-500"}>
                  {mockData.stats.weight.change > 0 ? "+" : ""}{mockData.stats.weight.change} lbs this week
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Sleep Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.stats.sleep.hours}h</div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="secondary">{mockData.stats.sleep.quality}</Badge>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
            </CardContent>
          </Card>

          {/* Compliance Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Compliance</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.stats.compliance.percentage}%</div>
              <div className="flex items-center gap-1 text-sm">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-green-500">+5% from last week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button className="h-16 flex-col gap-2" variant="outline">
                <CheckCircle className="h-6 w-6" />
                <span>Daily Check-In</span>
              </Button>
              <Button className="h-16 flex-col gap-2" variant="outline">
                <BookOpen className="h-6 w-6" />
                <span>My Program</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
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