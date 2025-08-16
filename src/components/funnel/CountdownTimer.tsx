import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";

interface CountdownTimerProps {
  deadline?: string; // ISO string
  className?: string;
}

export function CountdownTimer({ deadline, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (!deadline) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(deadline).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setIsExpired(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  if (!deadline || isExpired) {
    return null;
  }

  if (!timeLeft) {
    return null;
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge variant="destructive" className="animate-pulse">
        Offer ends in:
      </Badge>
      <div className="flex gap-1 text-sm font-mono">
        <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
          {timeLeft.days}d
        </span>
        <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
          {timeLeft.hours}h
        </span>
        <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
          {timeLeft.minutes}m
        </span>
        <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded">
          {timeLeft.seconds}s
        </span>
      </div>
    </div>
  );
}