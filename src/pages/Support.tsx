
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { useIsMobile } from '@/hooks/use-mobile';
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
import { Search, Book, FileText, Video, MessageSquare } from 'lucide-react';

const Support = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <Header />

        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <h1 className="text-2xl font-bold">Centre d'aide</h1>
          
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Comment pouvons-nous vous aider ?</h2>
            <p className="mb-6 text-indigo-100">
              Recherchez dans notre base de connaissances ou contactez-nous directement.
            </p>
            
            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher une question ou un sujet..." 
                className="pl-10 bg-white text-black" 
              />
            </div>
          </div>
          
          <Tabs defaultValue="guides" className="w-full">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="videos">Vidéos</TabsTrigger>
              <TabsTrigger value="contact">Contactez-nous</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guides" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <GuideCard 
                  title="Premiers pas avec FastSupport" 
                  description="Apprenez les bases de l'utilisation de notre plateforme."
                  icon={Book}
                  readingTime="5 min"
                />
                <GuideCard 
                  title="Configuration des canaux" 
                  description="Comment configurer et gérer vos canaux de communication."
                  icon={FileText}
                  readingTime="10 min"
                />
                <GuideCard 
                  title="Intégrations" 
                  description="Connectez FastSupport à vos outils préférés."
                  icon={FileText}
                  readingTime="7 min"
                />
                <GuideCard 
                  title="Gestion des clients" 
                  description="Optimisez la gestion de votre base clients."
                  icon={Book}
                  readingTime="8 min"
                />
                <GuideCard 
                  title="Automatisations" 
                  description="Configurez des réponses et workflows automatiques."
                  icon={FileText}
                  readingTime="12 min"
                />
                <GuideCard 
                  title="Analyses et statistiques" 
                  description="Comment interpréter les données de performance."
                  icon={Book}
                  readingTime="6 min"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="faqs" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Questions fréquemment posées</CardTitle>
                  <CardDescription>Trouvez rapidement des réponses aux questions les plus courantes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FAQItem
                    question="Comment changer mon abonnement ?"
                    answer="Pour changer votre abonnement, rendez-vous dans les paramètres du compte, section 'Facturation', puis cliquez sur 'Modifier l'abonnement'. Vous pourrez y choisir le plan qui vous convient."
                  />
                  <FAQItem
                    question="Comment ajouter un nouveau membre à mon équipe ?"
                    answer="Accédez à la section 'Paramètres > Équipe', puis cliquez sur 'Inviter un membre'. Saisissez l'adresse email et définissez le rôle. Un email d'invitation sera automatiquement envoyé."
                  />
                  <FAQItem
                    question="Est-ce que je peux personnaliser les réponses automatiques ?"
                    answer="Oui, vous pouvez personnaliser toutes les réponses automatiques dans 'Paramètres > Automatisations > Réponses'. Vous pouvez créer des modèles avec des variables dynamiques qui s'adapteront à chaque client."
                  />
                  <FAQItem
                    question="Comment connecter mon numéro de téléphone professionnel ?"
                    answer="Dans 'Paramètres > Canaux > Téléphone', cliquez sur 'Ajouter un numéro'. Vous pouvez soit acheter un nouveau numéro, soit transférer un numéro existant en suivant les instructions."
                  />
                  <FAQItem
                    question="Puis-je exporter mes données clients ?"
                    answer="Oui, vous pouvez exporter vos données clients au format CSV ou Excel depuis 'Clients > Exporter'. Vous pouvez filtrer les données avant l'export selon vos besoins."
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <VideoCard 
                  title="Présentation de FastSupport" 
                  duration="3:45"
                  thumbnail="/placeholder.svg"
                />
                <VideoCard 
                  title="Configuration des intégrations" 
                  duration="5:20"
                  thumbnail="/placeholder.svg"
                />
                <VideoCard 
                  title="Gestion efficace des conversations" 
                  duration="4:15"
                  thumbnail="/placeholder.svg"
                />
                <VideoCard 
                  title="Rapports et analyses avancées" 
                  duration="6:30"
                  thumbnail="/placeholder.svg"
                />
                <VideoCard 
                  title="Automatisations pour gagner du temps" 
                  duration="7:10"
                  thumbnail="/placeholder.svg"
                />
                <VideoCard 
                  title="Bonnes pratiques de support client" 
                  duration="8:25"
                  thumbnail="/placeholder.svg"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contactez notre équipe</CardTitle>
                  <CardDescription>
                    Besoin d'aide supplémentaire ? Notre équipe est là pour vous.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <MessageSquare className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Chat en direct</h3>
                          <p className="text-sm text-muted-foreground">Temps de réponse: ~2 min</p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Discutez directement avec notre équipe de support pour obtenir de l'aide rapidement.
                      </p>
                      <Button>Démarrer une conversation</Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 p-3 rounded-full">
                          <MessageSquare className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-muted-foreground">Temps de réponse: < 24h</p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Envoyez-nous un email pour toutes questions ou problèmes plus complexes.
                      </p>
                      <Button variant="outline">support@fastsupport.com</Button>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <h3 className="font-medium mb-4">Envoyez-nous un message</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">Nom</label>
                          <Input id="name" placeholder="Votre nom" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <Input id="email" type="email" placeholder="Votre email" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                        <Input id="subject" placeholder="Sujet de votre message" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea 
                          id="message" 
                          rows={4} 
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          placeholder="Décrivez votre problème ou posez votre question..."
                        ></textarea>
                      </div>
                      <Button type="submit">Envoyer le message</Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// Guide Card Component
const GuideCard = ({ title, description, icon: Icon, readingTime }) => {
  return (
    <Card className="hover:border-primary/50 cursor-pointer transition-all">
      <CardHeader className="pb-2">
        <div className="bg-primary/10 p-2 rounded-md w-fit mb-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{readingTime} de lecture</span>
          <Button variant="ghost" size="sm" className="text-primary">Lire</Button>
        </div>
      </CardContent>
    </Card>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border rounded-md overflow-hidden">
      <button 
        className="w-full p-4 text-left font-medium flex items-center justify-between" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Video Card Component
const VideoCard = ({ title, duration, thumbnail }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 rounded-full p-3">
            <Video className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-medium">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default Support;
