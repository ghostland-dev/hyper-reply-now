
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Zap, Clock, Puzzle, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center">
              <MessageSquare size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold">FastSupport</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Tarifs
            </a>
            <a href="#integrations" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Intégrations
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">
              Témoignages
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">Se connecter</Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-indigo-600 hover:bg-indigo-700" size="sm">Essai gratuit</Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Support client instantané pour les PME modernes
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Centralisez chat, email, SMS et WhatsApp dans une interface simple, avec une IA qui résume vos conversations et suggère des réponses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8">
                Démarrer gratuitement
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Voir la démo
            </Button>
          </div>
          <div className="mt-16 max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-xl border overflow-hidden">
            <img 
              src="https://i.imgur.com/8oxCgYs.png" 
              alt="FastSupport Dashboard" 
              className="rounded-md w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Une plateforme unifiée</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Concentrez-vous sur vos clients, pas sur la gestion de multiples outils
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Tous vos canaux</h3>
              <p className="text-gray-600">
                Gérez tous vos canaux de communication dans une seule interface : email, chat en direct, SMS, WhatsApp et appels téléphoniques.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">IA assistante</h3>
              <p className="text-gray-600">
                Notre IA résume les conversations longues et suggère des réponses intelligentes basées sur l'historique de vos échanges.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">SLA transparent</h3>
              <p className="text-gray-600">
                Suivez facilement vos temps de réponse avec notre système de SLA visuel et intuitif. Répondez en moins de 30 minutes.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Intégrations natives</h2>
            <div id="integrations" className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {["Notion", "Slack", "Trello", "Gmail", "Salesforce", "Stripe", "Shopify", "HubSpot"].map((integration) => (
                <div key={integration} className="bg-white p-4 rounded-lg border flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <Puzzle className="h-4 w-4 text-indigo-500" />
                    <span className="font-medium">{integration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Tarifs simples</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choisissez le forfait qui répond aux besoins de votre équipe
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Gratuit</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">0€</span>
                <span className="text-gray-500 ml-2">/ mois</span>
              </div>
              <p className="text-gray-600 mb-6">Parfait pour les petites équipes qui démarrent</p>
              
              <ul className="space-y-3 mb-8">
                {["1 utilisateur", "100 conversations / mois", "Email + chat", "Intégrations basiques"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full">Commencer gratuitement</Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg border shadow-sm relative">
              <div className="absolute -top-3 left-0 right-0 mx-auto w-max px-4 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                Populaire
              </div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">Pro</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">39€</span>
                <span className="text-gray-500 ml-2">/ utilisateur / mois</span>
              </div>
              <p className="text-gray-600 mb-6">Pour les équipes qui veulent gagner en efficacité</p>
              
              <ul className="space-y-3 mb-8">
                {["Utilisateurs illimités", "Conversations illimitées", "Tous les canaux", "Toutes les intégrations", "Rapports avancés", "SLA < 30 minutes", "IA assistante"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Essai gratuit de 14 jours</Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Entreprise</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">Sur mesure</span>
              </div>
              <p className="text-gray-600 mb-6">Pour les grandes équipes avec des besoins spécifiques</p>
              
              <ul className="space-y-3 mb-8">
                {["Tout ce qui est inclus dans Pro", "Onboarding personnalisé", "Assistance dédiée", "SLA renforcé", "Personnalisation avancée", "API complète", "Sauvegarde des données"].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">Nous contacter</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Ce qu'en disent nos clients</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des entreprises qui ont transformé leur relation client
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "FastSupport nous a permis de réduire notre temps de réponse de 2 heures à moins de 15 minutes. Nos clients sont ravis !",
                author: "Marie Dupont",
                title: "Directrice Service Client, TechStart",
                avatar: "https://i.pravatar.cc/100?img=29"
              },
              {
                quote: "L'interface unifiée et les suggestions de l'IA nous font gagner un temps précieux. Exactement ce dont notre petite équipe avait besoin.",
                author: "Thomas Laurent",
                title: "Fondateur, GreenGarden",
                avatar: "https://i.pravatar.cc/100?img=15"
              },
              {
                quote: "Nous avons enfin pu arrêter de jongler entre 5 outils différents. Tout est centralisé, simple et efficace.",
                author: "Sophie Moreau",
                title: "Responsable Support, BeautyBox",
                avatar: "https://i.pravatar.cc/100?img=8"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border shadow-sm">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre service client ?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Rejoignez les centaines d'entreprises qui ont simplifié leur support client avec FastSupport.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8">
                Démarrer gratuitement
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-indigo-700 text-lg px-8">
              Voir une démo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <h1 className="text-xl font-bold text-white">FastSupport</h1>
              </div>
              <p className="text-sm">
                Support client unifié et instantané pour les PME modernes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intégrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Feuille de route</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinaires</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center">
            &copy; 2025 FastSupport. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
