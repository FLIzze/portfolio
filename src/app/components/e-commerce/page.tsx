const Ecommerce = () => {
    return (
        <div>
                <div className="text-xl w-full mt-10 px-20 overflow-y-auto h-screen">
                    <h1 className="font-bold text-4xl text-green-400">E-commerce</h1>
                    <p className="my-5">Site d'e-commerce realise en <a className="text-green-400">Symfony</a> avec une base de donnee <a className="text-green-400">MySQL</a>.</p>
                    <h2 className="font-bold text-green-400 text-2xl">Fonctionnalités</h2>
                    <ul className="ml-12 list-disc text-justify">
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
                        <p className="text-green-400 w-full flex justify-center mb-4">[Home]</p>
                        <img src="/e-commerce/home.png" alt="home" className="mb-6" draggable="false"/>
                        <p className="text-green-400 w-full flex justify-center mb-4">[Article]</p>
                        <img src="/e-commerce/article.png" alt="articles" className="mb-6" draggable="false"/>
                        <p className="text-green-400 w-full flex justify-center mb-4">[Review]</p>
                        <img src="/e-commerce/reviews.png" alt="review" className="mb-6" draggable="false"/>
                        <p className="text-green-400 w-full flex justify-center mb-4">[Marketplace]</p>
                        <img src="/e-commerce/marketplace.png" alt="marketplace" className="mb-6" draggable="false"/>
                        <p className="text-green-400 w-full flex justify-center mb-4">[shopping-cart]</p>
                        <img src="/e-commerce/shopping-cart-sidebar.png" alt="shopping-cart-side" className="mb-3" draggable="false"/>
                        <img src="/e-commerce/shopping-cart.png" alt="shopping-cart" className="mb-6" draggable="false"/>
                        <p className="text-green-400 w-full flex justify-center mb-4">[checkout-details]</p>
                        <img src="/e-commerce/checkout-details.png" alt="checkout-details" className="mb-6" draggable="false"/>
                        <p className="text-green-400 w-full flex justify-center mb-4">[stripe]</p>
                        <img src="/e-commerce/stripe.png" alt="stripe" className="mb-6" draggable="false"/>
                        <p className="text-green-400 w-full flex justify-center mb-4">[dashboard]</p>
                        <img src="/e-commerce/dashboard.png" alt="dashboard" className="mb-16" draggable="false"/>
                    </div>
                </div>
        </div>
    )
}

export default Ecommerce;