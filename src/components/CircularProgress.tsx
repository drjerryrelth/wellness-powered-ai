interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  children?: React.ReactNode;
  color?: "default" | "success" | "warning" | "destructive";
}

export function CircularProgress({ 
  value, 
  size = 80, 
  strokeWidth = 8, 
  className = "",
  children,
  color = "default"
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const colorClasses = {
    default: "stroke-primary",
    success: "stroke-green-500",
    warning: "stroke-orange-500", 
    destructive: "stroke-red-500"
  };

  const backgroundColorClasses = {
    default: "stroke-primary/20",
    success: "stroke-green-500/20",
    warning: "stroke-orange-500/20",
    destructive: "stroke-red-500/20"
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={backgroundColorClasses[color]}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={colorClasses[color]}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children || (
          <span className="text-sm font-semibold">
            {Math.round(value)}%
          </span>
        )}
      </div>
    </div>
  );
}