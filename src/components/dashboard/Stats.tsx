
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Clock,
  CheckSquare,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversations actives</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">34</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-500 inline-flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              8%
            </span>{" "}
            depuis la semaine dernière
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Temps de réponse moyen</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18min</div>
          <div className="flex items-center mt-1">
            <Badge className="text-xs bg-green-500 hover:bg-green-600">
              Dans l'objectif
            </Badge>
            <span className="text-xs text-muted-foreground ml-2">
              Objectif: 30min
            </span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Taux de résolution</CardTitle>
          <CheckSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">92%</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-green-500 inline-flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              3%
            </span>{" "}
            depuis le mois dernier
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">SLA non respectés</CardTitle>
          <AlertIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5</div>
          <p className="text-xs text-muted-foreground mt-1">
            <span className="text-red-500 inline-flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              7%
            </span>{" "}
            depuis hier
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// Missing icon
function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" x2="12" y1="8" y2="12"></line>
      <line x1="12" x2="12.01" y1="16" y2="16"></line>
    </svg>
  );
}

export default Stats;
