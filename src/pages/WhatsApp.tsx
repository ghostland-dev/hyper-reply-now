
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import ConversationList from '@/components/dashboard/ConversationList';
import ConversationView from '@/components/dashboard/ConversationView';
import { useIsMobile } from '@/hooks/use-mobile';

const WhatsApp = () => {
  // Initialize with the ID of a WhatsApp conversation (6)
  const [selectedConversation, setSelectedConversation] = React.useState<number | undefined>(6);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <Header />

        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <h1 className="text-2xl font-bold">Canal WhatsApp</h1>
          
          <div className="border rounded-lg grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-16rem)]">
            <ConversationList 
              onSelectConversation={setSelectedConversation}
              selectedId={selectedConversation}
              className="md:col-span-1"
              filter="whatsapp"
            />
            <ConversationView 
              conversationId={selectedConversation}
              className="md:col-span-2 border-t md:border-t-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
