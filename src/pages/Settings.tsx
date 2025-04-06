
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
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        <Header />

        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <h1 className="text-2xl font-bold">Paramètres</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profil</TabsTrigger>
              <TabsTrigger value="company">Entreprise</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="integrations">Intégrations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profil utilisateur</CardTitle>
                  <CardDescription>
                    Gérez vos informations personnelles et vos préférences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nom complet</Label>
                      <Input id="fullName" defaultValue="Thomas Dupont" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="thomas@fastsupport.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Rôle</Label>
                      <Input id="role" defaultValue="Support Manager" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Fuseau horaire</Label>
                      <Input id="timezone" defaultValue="Europe/Paris" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biographie</Label>
                    <Textarea 
                      id="bio" 
                      rows={4} 
                      placeholder="Écrivez quelques mots à propos de vous..."
                      defaultValue="Responsable de l'équipe de support client chez FastSupport. Expert en résolution de problèmes et relations clients."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Enregistrer les modifications</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sécurité du compte</CardTitle>
                  <CardDescription>
                    Gérez votre mot de passe et la sécurité de votre compte.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Mot de passe actuel</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nouveau mot de passe</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Mettre à jour le mot de passe</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="company" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informations de l'entreprise</CardTitle>
                  <CardDescription>
                    Gérez les informations de votre entreprise.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Nom de l'entreprise</Label>
                      <Input id="company-name" defaultValue="FastSupport SAS" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Site web</Label>
                      <Input id="website" type="url" defaultValue="https://fastsupport.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input id="address" defaultValue="123 Avenue de la République" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" defaultValue="Paris" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postal-code">Code postal</Label>
                      <Input id="postal-code" defaultValue="75011" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Pays</Label>
                      <Input id="country" defaultValue="France" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company-description">Description de l'entreprise</Label>
                    <Textarea 
                      id="company-description" 
                      rows={4} 
                      defaultValue="FastSupport est une solution de support client pour PME qui centralise tous les canaux de communication pour offrir un support rapide et efficace."
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Enregistrer</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Préférences de notifications</CardTitle>
                  <CardDescription>
                    Configurez quand et comment vous recevez des notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notifications par email</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-new-conversation">Nouvelles conversations</Label>
                        <Switch id="email-new-conversation" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-replies">Réponses aux conversations</Label>
                        <Switch id="email-replies" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-mentions">Mentions</Label>
                        <Switch id="email-mentions" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notifications dans l'application</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-new-conversation">Nouvelles conversations</Label>
                        <Switch id="app-new-conversation" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-replies">Réponses aux conversations</Label>
                        <Switch id="app-replies" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-mentions">Mentions</Label>
                        <Switch id="app-mentions" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-status-changes">Changements de statut</Label>
                        <Switch id="app-status-changes" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Enregistrer les préférences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="integrations" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Intégrations</CardTitle>
                  <CardDescription>
                    Gérez les intégrations avec d'autres services et outils.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <IntegrationItem 
                      title="Slack" 
                      description="Recevez des notifications et répondez directement depuis Slack."
                      connected={true}
                    />
                    
                    <IntegrationItem 
                      title="Notion" 
                      description="Synchronisez vos bases de connaissances Notion avec votre support client."
                      connected={true}
                    />
                    
                    <IntegrationItem 
                      title="Trello" 
                      description="Créez des cartes Trello à partir des conversations de support."
                      connected={false}
                    />
                    
                    <IntegrationItem 
                      title="Google Workspace" 
                      description="Connectez-vous avec votre compte Google et synchronisez vos contacts."
                      connected={true}
                    />
                    
                    <IntegrationItem 
                      title="Zapier" 
                      description="Connectez FastSupport à plus de 3000 applications."
                      connected={false}
                    />
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

// Integration Item Component
const IntegrationItem = ({ title, description, connected }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b last:border-0">
      <div>
        <h4 className="text-base font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button variant={connected ? "outline" : "default"}>
        {connected ? "Configuré" : "Connecter"}
      </Button>
    </div>
  );
};

export default Settings;
