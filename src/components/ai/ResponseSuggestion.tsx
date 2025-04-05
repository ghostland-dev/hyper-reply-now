
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Sparkles, ThumbsUp, ThumbsDown, Copy, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResponseSuggestionProps {
  suggestion: string;
  onSelect: (suggestion: string) => void;
  className?: string;
}

export function ResponseSuggestion({ suggestion, onSelect, className }: ResponseSuggestionProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "border transition-all duration-200", 
        isHovered ? "border-indigo-300 shadow-md" : "border-border",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-indigo-500" />
            <CardTitle className="text-sm">Réponse suggérée</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{suggestion}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ThumbsUp size={14} />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ThumbsDown size={14} />
          </Button>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <RefreshCcw size={14} />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Copy size={14} />
          </Button>
          <Button 
            size="sm" 
            className="h-7 text-xs bg-indigo-600 hover:bg-indigo-700"
            onClick={() => onSelect(suggestion)}
          >
            Utiliser
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ResponseSuggestion;
