import Image from "next/image";

const Ecommerce = () => {
    return (
        <div>
            <div className="lg:px-20 px-6 md:px-12 lg:h-screen h-full lg:overflow-y-auto mt-10 bg-black lg:bg-transparent md:text-xl text-base">
                <a href="https://flowers.alexandrebel.me" target="blank">
                    <h1 className="md:text-4xl text-3xl flex font-bold text-green-500 border-b border-green-500 w-fit hover:border-b-0">Flowers</h1>
                </a>
                <p className="my-6">Site d'e-commerce realise en <a className="text-green-500">Symfony</a> avec une base de donnee <a className="text-green-500">MySQL</a>.</p>
                <h2 className="font-bold text-green-500">Fonctionnalités</h2>
                <ul className="ml-10 list-disc lg:text-justify mb-8">
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
                    <p className="text-green-500 w-full flex justify-center my-6">[Home]</p>
                    <a href="/e-commerce/home.png" target="blank">
                        <Image src="/e-commerce/home.png" alt="home" width={1920} height={1080} draggable="false"/>
                    </a>
                    <p className="text-green-500 w-full flex justify-center  my-6">[Article]</p>
                    <a href="/e-commerce/article.png" target="blank">
                        <Image src="/e-commerce/article.png" alt="" width={1920} height={1080} draggable="false"/>
                    </a>
                    <p className="text-green-500 w-full flex justify-center  my-6">[Review]</p>
                    <a href="/e-commerce/reviews.png" target="blank">
                        <Image src="/e-commerce/reviews.png" alt="" width={1920} height={1080} draggable="false"/>
                    </a>
                    <p className="text-green-500 w-full flex justify-center  my-6">[Marketplace]</p>
                    <a href="/e-commerce/marketplace.png" target="blank">
                        <Image src="/e-commerce/marketplace.png" alt="" width={1920} height={1080} draggable="false"/>
                    </a>
                    <p className="text-green-500 w-full flex justify-center  my-6">[shopping-cart]</p>
                    <a href="/e-commerce/shopping-cart-sidebar.png" target="blank">
                        <Image src="/e-commerce/shopping-cart-sidebar.png" alt="" className="my-3"width={1920} height={1080} draggable="false"/>
                    </a>
                    <a href="/e-commerce/shopping-cart.png" target="blank">
                        <Image src="/e-commerce/shopping-cart.png" alt="" width={1920} height={1080} draggable="false"/>
                    </a>
                    <p className="text-green-500 w-full flex justify-center  my-6">[checkout-details]</p>
                    <a href="/e-commerce/checkout-details.png" target="blank">
                        <Image src="/e-commerce/checkout-details.png" alt="" width={1920} height={1080} draggable="false"/>
                    </a>
                    <p className="text-green-500 w-full flex justify-center  my-6">[stripe]</p>
                    <a href="/e-commerce/stripe.png" target="blank">
                        <Image src="/e-commerce/stripe.png" alt="" width={1920} height={1080} draggable="false"/>
                    </a>
                    <p className="text-green-500 w-full flex justify-center  my-6">[dashboard]</p>
                    <a href="/e-commerce/dashboard.png" target="blank">
                        <Image src="/e-commerce/dashboard.png" alt="dashboard" className="pb-16"width={1920} height={1080} draggable="false"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce;