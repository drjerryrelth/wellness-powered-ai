import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgress } from "@/components/CircularProgress";

interface Nutrient {
  name: string;
  value: number;
  target: number;
  unit: string;
  percentage: number;
  color: "success" | "warning" | "destructive" | "default";
}

interface NutrientTargetsProps {
  title?: string;
  nutrients: Nutrient[];
  columns?: number;
}

export function NutrientTargets({ 
  title = "Nutrient Targets", 
  nutrients,
  columns = 4 
}: NutrientTargetsProps) {
  return (
    <Card className="premium-card">
      <CardHeader>
        <CardTitle className="text-lg font-display font-semibold flex items-center gap-2">
          <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(columns, 4)} lg:grid-cols-${columns} gap-6`}>
          {nutrients.map((nutrient, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <CircularProgress 
                value={nutrient.percentage} 
                size={70}
                color={nutrient.color}
              >
                <div className="text-center">
                  <div className="text-sm font-bold">{nutrient.percentage}%</div>
                </div>
              </CircularProgress>
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground">{nutrient.name}</p>
                <p className="text-xs text-muted-foreground">
                  {nutrient.value} / {nutrient.target} {nutrient.unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}