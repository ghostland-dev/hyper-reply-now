
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import ConversationList from '@/components/dashboard/ConversationList';
import ConversationView from '@/components/dashboard/ConversationView';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone as PhoneIcon, Plus, Clock } from 'lucide-react';

const Phone = () => {
  const [selectedConversation, setSelectedConversation] = React.useState<number | undefined>(5);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <Header />

        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Canal Téléphone</h1>
            <Button className="bg-green-600 hover:bg-green-700">
              <PhoneIcon className="mr-2 h-4 w-4" />
              Appeler
            </Button>
          </div>
          
          <Tabs defaultValue="conversations">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="conversations">Conversations</TabsTrigger>
              <TabsTrigger value="missed">Appels manqués</TabsTrigger>
              <TabsTrigger value="scheduled">Rendez-vous</TabsTrigger>
            </TabsList>
            
            <TabsContent value="conversations" className="mt-4">
              <div className="border rounded-lg grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-20rem)]">
                <ConversationList 
                  onSelectConversation={setSelectedConversation}
                  selectedId={selectedConversation}
                  className="md:col-span-1"
                  filter="phone"
                />
                <ConversationView 
                  conversationId={selectedConversation}
                  className="md:col-span-2 border-t md:border-t-0"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="missed" className="mt-4">
              <div className="border rounded-lg p-6">
                <div className="flex flex-col space-y-4">
                  <MissedCallItem 
                    name="Marie Durand"
                    time="Aujourd'hui, 14:32"
                    number="+33 6 12 34 56 78"
                  />
                  <MissedCallItem 
                    name="Jean Dupont"
                    time="Aujourd'hui, 11:15"
                    number="+33 6 98 76 54 32"
                  />
                  <MissedCallItem 
                    name="Sophie Martin"
                    time="Hier, 16:45"
                    number="+33 6 55 66 77 88"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="scheduled" className="mt-4">
              <div className="border rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Rendez-vous planifiés</h3>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Nouveau rendez-vous
                  </Button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <ScheduledCallItem 
                    name="Pierre Martin"
                    time="Demain, 10:00"
                    duration="30 min"
                    topic="Présentation du produit"
                  />
                  <ScheduledCallItem 
                    name="Entreprise ABC"
                    time="23 Avril, 15:30"
                    duration="45 min"
                    topic="Suivi de commande"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// Missed Call Item Component
const MissedCallItem = ({ name, time, number }) => {
  return (
    <div className="flex justify-between items-center p-3 border rounded-md">
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{number}</p>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <Clock className="h-3 w-3 mr-1" />
          {time}
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline">
          <PhoneIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// Scheduled Call Item Component
const ScheduledCallItem = ({ name, time, duration, topic }) => {
  return (
    <div className="flex justify-between items-center p-3 border rounded-md">
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm">{topic}</p>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <Clock className="h-3 w-3 mr-1" />
          {time} ({duration})
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline">Modifier</Button>
        <Button size="sm">Rejoindre</Button>
      </div>
    </div>
  );
};

export default Phone;
