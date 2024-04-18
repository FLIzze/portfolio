import { Fields } from "@/app/interface";

const Ecommerce: React.FC<Fields> = ({fields, usedFields}) => {
    return (
        <div>
            {fields[usedFields] == "E-commerce" && (
                <div className="w-full mt-10 px-20 overflow-y-auto h-screen text-xl">
                    <h1 className="font-bold text-4xl text-green-400">E-commerce</h1>
                    <p className="my-8">Site d'e-commerce realise en <a className="text-green-400">Symfony</a> avec une base de donnee <a className="text-green-400">MySQL</a>.</p>
                    <h2 className="font-bold text-green-400">Fonctionnalités</h2>
                    <ul className="ml-10 list-disc text-justify mb-8">
                        <li>Accueil: La page d'accueil vous permet d'explorer les arrangements floraux, les offres spéciales et les collections saisonnières.</li>
                        <li>Marketplace: Explorez une variété de fleurs et de compositions florales dans notre marché virtuel, organisé en catégories pour correspondre à chaque occasion spéciale.</li>
                        <li>Connexion/Création de compte: Les utilisateurs peuvent se connecter à leur compte existant pour gérer leurs préférences et suivre leurs commandes, ou créer un nouveau compte pour bénéficier d'avantages supplémentaires, comme la sauvegarde des informations de paiement et des adresses de livraison.</li>
                        <li>Contactez-nous: Une équipe de service client est disponible pour répondre à vos questions et vous aider à choisir le bouquet parfait.</li>
                        <li>Paramètres: Personnalisez votre expérience FLOWERS en ajustant vos préférences dans les paramètres du compte, y compris les informations personnelles, les notifications et le suivi des commandes.</li>
                        <li>Tableau de bord: Accédez à un tableau de bord centralisé pour suivre toutes vos activités sur FLOWERS, y compris vos articles préférés, vos commandes en cours et plus encore.</li>
                        <li>Articles: Parcourez une vaste gamme d'articles floraux disponibles à l'achat, chacun accompagné de descriptions détaillées et d'images.</li>
                        <li>Mettre en Vente: Si vous êtes un créateur d'arrangements floraux, utilisez cette fonction pour partager vos créations avec la communauté FLOWERS, en créant des listes attrayantes avec des images, des descriptions et des prix.</li>
                        <li>Avis et Commentaires: Partagez vos expériences d'achat en laissant des avis et lisez les commentaires des autres clients pour prendre des décisions éclairées.</li>
                        <li>Panier: Ajoutez vos fleurs préférées à votre panier et suivez facilement vos sélections, avec la possibilité de créer plusieurs paniers pour différentes occasions.</li>
                    </ul>   
                    <div>
                        <img src="/e-commerce" alt="" />
                        <p className="text-green-400 w-full flex justify-center my-8">[Home]</p>
                        <img src="/e-commerce/home.png" alt="home" />
                        <p className="text-green-400 w-full flex justify-center  my-8">[Article]</p>
                        <img src="/e-commerce/article.png" alt="" />
                        <p className="text-green-400 w-full flex justify-center  my-8">[Review]</p>
                        <img src="/e-commerce/reviews.png" alt="" />
                        <p className="text-green-400 w-full flex justify-center  my-8">[Marketplace]</p>
                        <img src="/e-commerce/marketplace.png" alt="" />
                        <p className="text-green-400 w-full flex justify-center  my-8">[shopping-cart]</p>
                        <img src="/e-commerce/shopping-cart-sidebar.png" alt="" className="my-3"/>
                        <img src="/e-commerce/shopping-cart.png" alt="" />
                        <p className="text-green-400 w-full flex justify-center  my-8">[checkout-details]</p>
                        <img src="/e-commerce/checkout-details.png" alt="" />
                        <p className="text-green-400 w-full flex justify-center  my-8">[stripe]</p>
                        <img src="/e-commerce/stripe.png" alt="" />
                        <p className="text-green-400 w-full flex justify-center  my-8">[dashboard]</p>
                        <img src="/e-commerce/dashboard.png" alt="dashboard" className="mb-16"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Ecommerce;