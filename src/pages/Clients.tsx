
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import { Search, UserPlus, Building, User } from 'lucide-react';

// Mock data for clients
const clientsData = [
  { id: 1, name: "Dupont SARL", type: "business", contactName: "Jean Dupont", email: "jean@dupontsarl.com", status: "active" },
  { id: 2, name: "Tech Solutions", type: "business", contactName: "Marie Lambert", email: "marie@techsolutions.com", status: "active" },
  { id: 3, name: "Pierre Martin", type: "individual", contactName: "Pierre Martin", email: "pierre.martin@email.com", status: "inactive" },
  { id: 4, name: "Studio Graphique", type: "business", contactName: "Sophie Bernard", email: "sophie@studiographique.com", status: "active" },
  { id: 5, name: "Resto Express", type: "business", contactName: "Thomas Petit", email: "thomas@restoexpress.com", status: "active" },
  { id: 6, name: "Emma Dubois", type: "individual", contactName: "Emma Dubois", email: "emma.dubois@email.com", status: "inactive" },
];

const Clients = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <Header />

        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold">Clients</h1>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Rechercher un client..." className="pl-10" />
              </div>
              <Button className="shrink-0">
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Ajouter</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="business">Entreprises</TabsTrigger>
              <TabsTrigger value="individual">Particuliers</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid gap-4">
                {clientsData.map(client => (
                  <ClientCard key={client.id} client={client} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="business" className="mt-4">
              <div className="grid gap-4">
                {clientsData
                  .filter(client => client.type === 'business')
                  .map(client => (
                    <ClientCard key={client.id} client={client} />
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="individual" className="mt-4">
              <div className="grid gap-4">
                {clientsData
                  .filter(client => client.type === 'individual')
                  .map(client => (
                    <ClientCard key={client.id} client={client} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// Client Card Component
const ClientCard = ({ client }) => {
  const Icon = client.type === 'business' ? Building : User;
  
  return (
    <Card>
      <CardHeader className="p-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-secondary p-2 rounded-md">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg">{client.name}</CardTitle>
              <CardDescription>{client.email}</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Voir les détails</Button>
            <Button variant="ghost" size="sm">Contacter</Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Clients;
