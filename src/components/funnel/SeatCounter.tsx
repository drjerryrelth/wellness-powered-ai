import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { SeatTracker } from "@/lib/pricing";

interface SeatCounterProps {
  className?: string;
}

export function SeatCounter({ className = "" }: SeatCounterProps) {
  const [seatsRemaining, setSeatsRemaining] = useState<number>(200);

  useEffect(() => {
    setSeatsRemaining(SeatTracker.getSeatsRemaining());
    
    // Update every few seconds to reflect changes
    const interval = setInterval(() => {
      setSeatsRemaining(SeatTracker.getSeatsRemaining());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const isLowStock = SeatTracker.isLowStock();
  const isCriticalStock = SeatTracker.isCriticalStock();

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge 
        variant={isCriticalStock ? "destructive" : isLowStock ? "secondary" : "default"}
        className={isCriticalStock ? "animate-pulse" : ""}
      >
        {isCriticalStock ? "Only" : isLowStock ? "Low Stock:" : ""} {seatsRemaining} of 200 Founders licenses left
      </Badge>
      {isLowStock && (
        <span className="text-sm text-muted-foreground">
          {isCriticalStock ? "🔥 Almost gone!" : "⚡ Limited remaining"}
        </span>
      )}
    </div>
  );
}