import { Card, CardContent } from "@/components/ui/card";
import { CircularProgress } from "@/components/CircularProgress";
import { cn } from "@/lib/utils";

interface NutritionCardProps {
  title: string;
  value: number;
  target: number;
  unit: string;
  color?: "default" | "success" | "warning" | "destructive";
  size?: number;
  className?: string;
  showProgress?: boolean;
}

export function NutritionCard({ 
  title, 
  value, 
  target, 
  unit, 
  color = "default",
  size = 80,
  className,
  showProgress = true
}: NutritionCardProps) {
  const percentage = Math.min(Math.round((value / target) * 100), 100);
  
  return (
    <Card className={cn("premium-card group hover:shadow-lg transition-all", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          {showProgress ? (
            <CircularProgress 
              value={percentage} 
              size={size}
              color={color}
            >
              <div className="text-center">
                <div className="text-lg font-bold">{value}</div>
                <div className="text-xs text-muted-foreground">{unit}</div>
              </div>
            </CircularProgress>
          ) : (
            <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">{value}</div>
                <div className="text-xs text-muted-foreground">{unit}</div>
              </div>
            </div>
          )}
          
          <div className="text-center space-y-1">
            <h3 className="font-semibold text-sm">{title}</h3>
            {showProgress && (
              <p className="text-xs text-muted-foreground">
                Target: {target} {unit}
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}