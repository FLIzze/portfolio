const Ecommerce = () => {
    return (
        <div>
                <div className="text-xl w-full mt-10 px-20 overflow-y-auto h-screen">
                    <h1 className="font-bold text-4xl text-green-400">E-commerce</h1>
                    <p className="my-5">Site d'e-commerce realise en <a className="text-green-400">Symfony</a> avec une base de donnee <a className="text-green-400">MySQL</a>.</p>
                    <h2 className="font-bold text-green-400 text-2xl">Fonctionnalités</h2>
                    <ul className="ml-12 list-disc text-justify">
                        <li>Accueil : Explorez arrangements floraux, offres spéciales et collections saisonnières.</li>
                        <li>Marketplace : Découvrez fleurs et compositions florales par catégories pour chaque occasion.</li>
                        <li>Connexion/Création de compte : Gérez préférences, commandes ou bénéficiez d'avantages en créant un compte.</li>
                        <li>Contactez-nous : Équipe service client disponible pour vous aider à choisir le bouquet parfait.</li>
                        <li>Paramètres : Personnalisez expérience FLOWERS en ajustant préférences, infos personnelles et notifications.</li>
                        <li>Tableau de bord : Suivez activités sur FLOWERS, articles préférés, commandes en cours, etc.</li>
                        <li>Articles : Parcourez gamme d'articles floraux avec descriptions détaillées et images.</li>
                        <li>Mettre en Vente : Partagez vos créations florales avec la communauté FLOWERS.</li>
                        <li>Avis et Commentaires : Partagez expériences d'achat et lisez avis des autres clients.</li>
                        <li>Panier : Ajoutez vos fleurs préférées et suivez facilement vos sélections.</li>
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