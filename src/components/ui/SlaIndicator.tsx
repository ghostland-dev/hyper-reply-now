
import { cn } from "@/lib/utils";

type SlaLevel = 'good' | 'warning' | 'critical';

interface SlaIndicatorProps {
  level: SlaLevel;
  remainingTime?: number; // in minutes
  className?: string;
}

export function SlaIndicator({ level, remainingTime, className }: SlaIndicatorProps) {
  const getColorForLevel = (level: SlaLevel) => {
    switch (level) {
      case 'good':
        return 'bg-green-500';
      case 'warning':
        return 'bg-amber-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };
  
  const getTimeDisplay = () => {
    if (!remainingTime && remainingTime !== 0) return null;
    
    if (remainingTime < 0) {
      // Time overdue
      const overdue = Math.abs(remainingTime);
      return `${overdue}m en retard`;
    } else if (remainingTime === 0) {
      return 'Imminent';
    } else {
      return `${remainingTime}m restantes`;
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "h-2.5 w-2.5 rounded-full", 
        getColorForLevel(level)
      )} />
      {remainingTime !== undefined && (
        <span className={cn(
          "text-xs font-medium",
          level === 'good' ? 'text-green-600' : 
          level === 'warning' ? 'text-amber-600' : 
          'text-red-600'
        )}>
          {getTimeDisplay()}
        </span>
      )}
    </div>
  );
}

export default SlaIndicator;
