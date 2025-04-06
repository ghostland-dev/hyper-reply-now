
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Users, 
  BarChart2, 
  Settings, 
  Menu, 
  X,
  PlusCircle,
  LifeBuoy,
  Inbox,
  Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const mainNavItems: NavItem[] = [
  { name: 'Conversations', href: '/dashboard', icon: MessageSquare },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'Statistiques', href: '/stats', icon: BarChart2 },
  { name: 'Paramètres', href: '/settings', icon: Settings },
];

const channelItems: NavItem[] = [
  { name: 'Chat', href: '/chat', icon: MessageSquare },
  { name: 'Email', href: '/email', icon: Inbox },
  { name: 'SMS', href: '/sms', icon: MessageSquare },
  { name: 'Téléphone', href: '/phone', icon: Phone },
  { name: 'WhatsApp', href: '/whatsapp', icon: WhatsAppIcon },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarClass = cn(
    "h-screen bg-sidebar fixed left-0 z-30 flex flex-col transition-all duration-300",
    isOpen || !isMobile ? "w-64" : "w-0 overflow-hidden"
  );

  return (
    <>
      {isMobile && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-40"
          onClick={toggleSidebar}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      )}
      <div className={sidebarClass}>
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border h-16">
          <h1 className="font-bold text-xl text-white">FastSupport</h1>
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="text-sidebar-foreground hover:text-white hover:bg-sidebar-accent"
            >
              <X size={18} />
            </Button>
          )}
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
          <div className="px-4 mb-6">
            <Button className="w-full justify-start gap-2 bg-indigo-600 hover:bg-indigo-700 text-white">
              <PlusCircle size={18} />
              Nouvelle conversation
            </Button>
          </div>
          
          <div className="px-2 space-y-1">
            <h2 className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Navigation principale
            </h2>
            {mainNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive 
                      ? "bg-sidebar-accent text-white" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-white"
                  )
                }
                end={item.href === '/dashboard'}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
          
          <div className="mt-8 px-2 space-y-1">
            <h2 className="px-2 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Canaux
            </h2>
            {channelItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive 
                      ? "bg-sidebar-accent text-white" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-white"
                  )
                }
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-sidebar-border">
          <NavLink
            to="/support"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-white transition-colors"
          >
            <LifeBuoy size={18} />
            <span>Centre d'aide</span>
          </NavLink>
        </div>
      </div>
    </>
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

export default Sidebar;
