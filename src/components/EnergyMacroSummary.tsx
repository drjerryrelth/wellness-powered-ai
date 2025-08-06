import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgress } from "@/components/CircularProgress";
import { Progress } from "@/components/ui/progress";

interface MacroData {
  consumed: number;
  target: number;
  percentage: number;
}

interface EnergyMacroSummaryProps {
  calories: {
    consumed: number;
    burned: number;
    remaining: number;
    target: number;
  };
  macros: {
    protein: MacroData;
    carbs: MacroData;
    fat: MacroData;
  };
}

export function EnergyMacroSummary({ calories, macros }: EnergyMacroSummaryProps) {
  const caloriePercentage = Math.round((calories.consumed / calories.target) * 100);
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Energy Summary */}
      <Card className="premium-card">
        <CardHeader>
          <CardTitle className="text-lg font-display font-semibold flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
            Energy Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center space-y-3">
              <CircularProgress 
                value={caloriePercentage} 
                size={80}
                color="success"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">{calories.consumed}</div>
                  <div className="text-xs text-muted-foreground">kcal</div>
                </div>
              </CircularProgress>
              <div className="text-center">
                <p className="text-sm font-semibold">Consumed</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <CircularProgress 
                value={85} 
                size={80}
                color="warning"
              >
                <div className="text-center">
                  <div className="text-lg font-bold">{calories.burned}</div>
                  <div className="text-xs text-muted-foreground">kcal</div>
                </div>
              </CircularProgress>
              <div className="text-center">
                <p className="text-sm font-semibold">Burned</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-muted/20 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-bold">{calories.remaining}</div>
                  <div className="text-xs text-muted-foreground">kcal</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold">Remaining</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Macronutrient Targets */}
      <Card className="premium-card">
        <CardHeader>
          <CardTitle className="text-lg font-display font-semibold flex items-center gap-2">
            <div className="w-2 h-6 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></div>
            Macronutrient Targets
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Energy</span>
              <span className="text-sm text-muted-foreground">
                {calories.consumed} / {calories.target} kcal
              </span>
              <span className="text-sm font-bold text-emerald-600">{caloriePercentage}%</span>
            </div>
            <Progress value={caloriePercentage} className="h-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Protein</span>
              <span className="text-sm text-muted-foreground">
                {macros.protein.consumed}g / {macros.protein.target}g
              </span>
              <span className="text-sm font-bold text-emerald-600">{macros.protein.percentage}%</span>
            </div>
            <Progress value={macros.protein.percentage} className="h-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Net Carbs</span>
              <span className="text-sm text-muted-foreground">
                {macros.carbs.consumed}g / {macros.carbs.target}g
              </span>
              <span className="text-sm font-bold text-emerald-600">{macros.carbs.percentage}%</span>
            </div>
            <Progress value={macros.carbs.percentage} className="h-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Fat</span>
              <span className="text-sm text-muted-foreground">
                {macros.fat.consumed}g / {macros.fat.target}g
              </span>
              <span className="text-sm font-bold text-amber-600">{macros.fat.percentage}%</span>
            </div>
            <Progress value={macros.fat.percentage} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}