
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, MessageSquare, Users, Clock } from 'lucide-react';

// Mock data for charts
const weeklyData = [
  { name: 'Lun', conversations: 40, resolvedIssues: 35 },
  { name: 'Mar', conversations: 30, resolvedIssues: 25 },
  { name: 'Mer', conversations: 45, resolvedIssues: 40 },
  { name: 'Jeu', conversations: 55, resolvedIssues: 50 },
  { name: 'Ven', conversations: 65, resolvedIssues: 60 },
  { name: 'Sam', conversations: 25, resolvedIssues: 22 },
  { name: 'Dim', conversations: 15, resolvedIssues: 13 },
];

const monthlyData = [
  { name: 'Jan', conversations: 200, resolvedIssues: 180 },
  { name: 'Fév', conversations: 250, resolvedIssues: 220 },
  { name: 'Mars', conversations: 300, resolvedIssues: 270 },
  { name: 'Avril', conversations: 280, resolvedIssues: 260 },
  { name: 'Mai', conversations: 350, resolvedIssues: 320 },
  { name: 'Juin', conversations: 400, resolvedIssues: 370 },
];

const channelData = [
  { name: 'Chat', value: 45 },
  { name: 'Email', value: 25 },
  { name: 'SMS', value: 10 },
  { name: 'Téléphone', value: 15 },
  { name: 'WhatsApp', value: 5 },
];

const Stats = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <Header />

        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <h1 className="text-2xl font-bold">Statistiques</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              title="Conversations" 
              value="583" 
              change="+12.3%" 
              trend="up" 
              description="vs mois précédent" 
              icon={MessageSquare}
            />
            <StatCard 
              title="Clients actifs" 
              value="245" 
              change="+5.2%" 
              trend="up" 
              description="vs mois précédent" 
              icon={Users}
            />
            <StatCard 
              title="Temps de réponse moyen" 
              value="18 min" 
              change="-3.1%" 
              trend="down" 
              description="vs mois précédent" 
              icon={Clock}
            />
          </div>

          <Tabs defaultValue="week" className="w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Évolution dans le temps</h2>
              <TabsList>
                <TabsTrigger value="week">Semaine</TabsTrigger>
                <TabsTrigger value="month">Mois</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="week" className="mt-4">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle className="text-base font-medium">Conversations et résolutions</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={weeklyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorConversations" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="conversations" stroke="#4f46e5" fillOpacity={1} fill="url(#colorConversations)" />
                      <Area type="monotone" dataKey="resolvedIssues" stroke="#10b981" fillOpacity={1} fill="url(#colorResolved)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="month" className="mt-4">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle className="text-base font-medium">Conversations et résolutions</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorConversationsMonth" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorResolvedMonth" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="conversations" stroke="#4f46e5" fillOpacity={1} fill="url(#colorConversationsMonth)" />
                      <Area type="monotone" dataKey="resolvedIssues" stroke="#10b981" fillOpacity={1} fill="url(#colorResolvedMonth)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <Card>
            <CardHeader>
              <CardTitle>Distribution par canal</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={channelData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, change, trend, description, icon: Icon }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center mt-1">
          {trend === "up" ? (
            <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-emerald-500 mr-1" />
          )}
          <span className={trend === "up" ? "text-emerald-500" : "text-emerald-500"}>
            {change}
          </span>
          <span className="ml-1 text-muted-foreground">{description}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default Stats;
