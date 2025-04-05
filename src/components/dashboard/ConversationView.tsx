
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Send, 
  PhoneCall, 
  Clock, 
  ChevronDown,
  Tag,
  User,
  Building,
  ExternalLink,
  Paperclip,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import ResponseSuggestion from '../ai/ResponseSuggestion';
import SlaIndicator from '../ui/SlaIndicator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sample data
const sampleConversation = {
  id: 1,
  customer: {
    name: "Sophie Martin",
    email: "sophie.martin@example.com",
    company: "Acme Inc.",
    avatar: "https://i.pravatar.cc/150?img=32",
    firstContact: "12 Mai 2023"
  },
  subject: "Problème avec la facturation",
  channel: "email",
  sla: { level: 'good' as const, remainingTime: 18 },
  priority: "normal",
  messages: [
    {
      id: 1,
      sender: "customer",
      content: "Bonjour, je n'arrive pas à télécharger ma facture du mois dernier. Le bouton de téléchargement ne fonctionne pas. Pouvez-vous m'aider ?",
      timestamp: "10:23",
      read: true
    },
    {
      id: 2,
      sender: "agent",
      content: "Bonjour Sophie, merci pour votre message. Je suis désolé pour ce problème. Pouvez-vous me préciser sur quel appareil vous essayez d'accéder à votre facture ?",
      timestamp: "10:25",
      read: true
    },
    {
      id: 3,
      sender: "customer",
      content: "J'utilise Chrome sur Windows 10. J'ai essayé à la fois sur mon ordinateur personnel et celui du bureau, mais le problème persiste.",
      timestamp: "10:30",
      read: true
    }
  ],
  aiSuggestions: [
    "Merci pour ces précisions. Il semble y avoir un problème technique avec notre serveur de facturation. Notre équipe travaille actuellement à résoudre ce problème. En attendant, je peux vous envoyer votre facture directement par e-mail. Souhaitez-vous que je fasse cela ?",
    "Je comprends votre problème. Pourriez-vous essayer d'utiliser un autre navigateur comme Firefox ou Edge pour voir si le problème persiste ? Parfois, certaines extensions Chrome peuvent bloquer les téléchargements."
  ]
};

interface ConversationViewProps {
  conversationId?: number;
  className?: string;
}

export function ConversationView({ conversationId, className }: ConversationViewProps) {
  const [newMessage, setNewMessage] = useState('');
  const [showSidepanel, setShowSidepanel] = useState(true);
  
  // If no conversation is selected, show placeholder
  if (!conversationId) {
    return (
      <div className={cn("flex flex-col h-full justify-center items-center text-center p-6", className)}>
        <div className="max-w-sm">
          <MessageSquare size={48} className="mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">Aucune conversation sélectionnée</h3>
          <p className="mt-2 text-muted-foreground">
            Sélectionnez une conversation dans la liste à gauche pour afficher son contenu.
          </p>
        </div>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // In a real app, this would send the message to the API
    console.log("Sending message:", newMessage);
    setNewMessage('');
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleSelectSuggestion = (suggestion: string) => {
    setNewMessage(suggestion);
  };
  
  return (
    <div className={cn("flex h-full", className)}>
      {/* Main conversation area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Conversation header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-lg">{sampleConversation.subject}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{sampleConversation.customer.name}</span>
              <span>•</span>
              <SlaIndicator 
                level={sampleConversation.sla.level} 
                remainingTime={sampleConversation.sla.remainingTime} 
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Clock size={14} />
              <span>Historique</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <PhoneCall size={14} />
              <span>Appeler</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSidepanel(!showSidepanel)}
              className="md:hidden"
            >
              <User size={14} />
            </Button>
          </div>
        </div>
        
        {/* Message list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {sampleConversation.messages.map((message) => (
            <div 
              key={message.id}
              className={cn(
                "flex max-w-3xl",
                message.sender === 'agent' ? "self-end flex-row-reverse" : ""
              )}
            >
              <Avatar className="h-8 w-8 mt-1">
                {message.sender === 'customer' ? (
                  <>
                    <AvatarImage src={sampleConversation.customer.avatar} />
                    <AvatarFallback>SM</AvatarFallback>
                  </>
                ) : (
                  <>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>AG</AvatarFallback>
                  </>
                )}
              </Avatar>
              <div className={cn(
                "mx-2 p-3 rounded-lg",
                message.sender === 'agent' 
                  ? "bg-indigo-600 text-white" 
                  : "bg-muted"
              )}>
                <p className="text-sm">{message.content}</p>
                <span className={cn(
                  "text-xs block text-right mt-1",
                  message.sender === 'agent' ? "text-indigo-100" : "text-muted-foreground"
                )}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* AI suggestions */}
        <div className="p-4 border-t bg-muted/30 space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium flex items-center gap-1">
              <Sparkles size={14} className="text-indigo-500" />
              Réponses suggérées
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sampleConversation.aiSuggestions.map((suggestion, index) => (
              <ResponseSuggestion 
                key={index}
                suggestion={suggestion}
                onSelect={handleSelectSuggestion}
              />
            ))}
          </div>
        </div>
        
        {/* Message input */}
        <div className="p-4 border-t">
          <div className="relative">
            <Textarea
              placeholder="Tapez votre réponse ici..."
              className="min-h-24 resize-none pr-20"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="absolute right-2 bottom-2 flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Paperclip size={16} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="top" align="end" className="w-72">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Pièces jointes</h4>
                      <p className="text-sm text-muted-foreground">Ajoutez des fichiers à votre réponse.</p>
                    </div>
                    <div className="grid gap-2">
                      <Button variant="outline" className="w-full justify-start text-sm">Parcourir les fichiers</Button>
                      <Button variant="outline" className="w-full justify-start text-sm">Prendre une capture d'écran</Button>
                      <Button variant="outline" className="w-full justify-start text-sm">Ajouter depuis Google Drive</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button 
                className="h-8 bg-indigo-600 hover:bg-indigo-700" 
                size="sm"
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
              >
                <Send size={14} className="mr-1" /> Envoyer
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer sidebar */}
      {showSidepanel && (
        <div className="border-l w-80 hidden md:block">
          <div className="p-4 border-b">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-16 w-16">
                <AvatarImage src={sampleConversation.customer.avatar} />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <h3 className="font-medium mt-2">{sampleConversation.customer.name}</h3>
              <p className="text-sm text-muted-foreground">{sampleConversation.customer.email}</p>
              <Badge className="mt-2 text-xs">{sampleConversation.customer.company}</Badge>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm">Informations client</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Premier contact</span>
                    <span>{sampleConversation.customer.firstContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Requêtes totales</span>
                    <span>7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Temps de réponse moyen</span>
                    <span>3h 12m</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  <User size={12} className="mr-1" />
                  Voir profil complet
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm">Tags</CardTitle>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ChevronDown size={14} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Facturation</Badge>
                  <Badge variant="outline" className="text-xs">Problème technique</Badge>
                  <Badge variant="outline" className="text-xs">Client Premium</Badge>
                  <Button variant="ghost" size="sm" className="h-6 text-xs">
                    <Tag size={10} className="mr-1" />
                    Ajouter
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm">Applications connectées</CardTitle>
                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                    <ChevronDown size={14} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Building size={16} className="mr-2" />
                      <span className="text-sm">CRM</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Trello size={16} className="mr-2" />
                      <span className="text-sm">Trello</span>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

// Icons that weren't imported
function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}

function Trello(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
      <rect width="3" height="9" x="7" y="7"></rect>
      <rect width="3" height="5" x="14" y="7"></rect>
    </svg>
  );
}

export default ConversationView;
