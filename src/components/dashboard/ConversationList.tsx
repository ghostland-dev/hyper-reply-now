
import { useState } from 'react';
import { cn } from "@/lib/utils";
import SlaIndicator from "../ui/SlaIndicator";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Mail,
  Phone,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Sample data
const conversations = [
  {
    id: 1,
    customer: "Sophie Martin",
    subject: "Problème avec la facturation",
    message: "Bonjour, je n'arrive pas à télécharger ma facture du mois dernier...",
    channel: "email",
    timestamp: "10:23",
    sla: { level: 'good', remainingTime: 18 },
    unread: true,
    priority: "normal"
  },
  {
    id: 2,
    customer: "Thomas Dubois",
    subject: "Question sur l'abonnement Premium",
    message: "Est-ce que l'abonnement Premium inclut également l'accès à...",
    channel: "chat",
    timestamp: "09:45",
    sla: { level: 'warning', remainingTime: 7 },
    unread: false,
    priority: "high"
  },
  {
    id: 3,
    customer: "Julie Lefèvre",
    subject: "Demande de remboursement",
    message: "Suite à notre appel d'hier, je vous confirme ma demande de...",
    channel: "email",
    timestamp: "Hier",
    sla: { level: 'critical', remainingTime: -15 },
    unread: true,
    priority: "urgent"
  },
  {
    id: 4,
    customer: "Marc Bernard",
    subject: "Assistance technique",
    message: "Le site affiche une erreur 404 quand j'essaie d'accéder à...",
    channel: "phone",
    timestamp: "Hier",
    sla: { level: 'good', remainingTime: 23 },
    unread: false,
    priority: "normal"
  },
  {
    id: 5,
    customer: "Emma Rousseau",
    subject: "Problème de connexion",
    message: "Je n'arrive pas à me connecter à mon compte depuis ce matin...",
    channel: "chat",
    timestamp: "Lun",
    sla: { level: 'critical', remainingTime: -45 },
    unread: false,
    priority: "high"
  },
  // Add WhatsApp conversations
  {
    id: 6,
    customer: "Pierre Dumont",
    subject: "Suivi de commande",
    message: "Bonjour, je voudrais savoir où en est ma commande #45678. Je n'ai pas reçu de confirmation d'expédition...",
    channel: "whatsapp",
    timestamp: "11:05",
    sla: { level: 'good', remainingTime: 15 },
    unread: true,
    priority: "normal"
  },
  {
    id: 7,
    customer: "Marie Leroy",
    subject: "Problème avec l'application mobile",
    message: "L'application se bloque systématiquement quand j'essaie d'ajouter un article au panier...",
    channel: "whatsapp",
    timestamp: "Hier",
    sla: { level: 'warning', remainingTime: 5 },
    unread: true,
    priority: "high"
  },
  {
    id: 8,
    customer: "Antoine Mercier",
    subject: "Question sur la garantie",
    message: "Bonjour, j'ai acheté un produit le mois dernier et il est déjà défectueux. Comment puis-je faire jouer la garantie?",
    channel: "whatsapp",
    timestamp: "Mar",
    sla: { level: 'good', remainingTime: 30 },
    unread: false,
    priority: "normal"
  }
];

interface ConversationListProps {
  onSelectConversation: (id: number) => void;
  selectedId?: number;
  className?: string;
  filter?: string; // Added this property to match the usage in the pages
}

export function ConversationList({ onSelectConversation, selectedId, className, filter: initialFilter }: ConversationListProps) {
  const [filter, setFilter] = useState<string | null>(initialFilter || null);
  
  const filteredConversations = filter 
    ? conversations.filter(c => c.channel === filter)
    : conversations;
  
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'email':
        return <Mail size={16} className="text-blue-500" />;
      case 'chat':
        return <MessageSquare size={16} className="text-green-500" />;
      case 'phone':
        return <Phone size={16} className="text-purple-500" />;
      case 'whatsapp':
        return <WhatsAppIcon size={16} className="text-green-600" />;
      default:
        return <MessageSquare size={16} />;
    }
  };
  
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge variant="destructive" className="text-xs">Urgent</Badge>;
      case 'high':
        return <Badge variant="outline" className="border-amber-500 text-amber-500 text-xs">Prioritaire</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <div className={cn("flex flex-col h-full border-r", className)}>
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold">Conversations</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Filter size={14} />
              <span>Filtrer</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Filtrer par canal</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => setFilter(null)}>
                <span>Tous les canaux</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('email')}>
                <Mail className="mr-2 h-4 w-4 text-blue-500" />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('chat')}>
                <MessageSquare className="mr-2 h-4 w-4 text-green-500" />
                <span>Chat</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('phone')}>
                <Phone className="mr-2 h-4 w-4 text-purple-500" />
                <span>Téléphone</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('whatsapp')}>
                <WhatsAppIcon className="mr-2 h-4 w-4 text-green-600" />
                <span>WhatsApp</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex-1 overflow-auto">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            className={cn(
              "border-b p-4 cursor-pointer transition-colors",
              selectedId === conversation.id ? "bg-muted" : "hover:bg-muted/50"
            )}
            onClick={() => onSelectConversation(conversation.id)}
          >
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <span className={cn(
                  "font-medium", 
                  conversation.unread && "font-semibold"
                )}>
                  {conversation.customer}
                </span>
                {conversation.unread && (
                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                )}
              </div>
              <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              {getChannelIcon(conversation.channel)}
              <h3 className={cn(
                "text-sm truncate",
                conversation.unread && "font-medium"
              )}>
                {conversation.subject}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-1 mb-2">{conversation.message}</p>
            <div className="flex justify-between items-center">
              <SlaIndicator 
                level={conversation.sla.level as 'good' | 'warning' | 'critical'} 
                remainingTime={conversation.sla.remainingTime} 
              />
              {getPriorityBadge(conversation.priority)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// WhatsApp Icon component
function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M8.5 14.5s1.5 1 3.5 1 3.5-1 3.5-1" />
    </svg>
  );
}

export default ConversationList;
