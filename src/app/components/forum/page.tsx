const Forum: React.FC<Fields> = ({fields, usedFields}) => {
    return (
        <div>
            {fields[usedFields] == "Forum" && (
                <div className="px-20 h-screen overflow-y-auto mt-10">
                    <div className="flex">
                        <h1 className="text-4xl flex font-bold text-green-400 mr-4">Forum</h1>
                        <a href="https://github.com/FLIzze/forum" target="blank">
                            <img src="github-logo.png" alt="github" className="w-11 h-11"/>
                        </a>
                    </div>
                    <p className="my-5 text-xl">Forum entièrement fonctionnel, realisé en <a className="text-green-400">golang</a> avec une base de données <a className="text-green-400">MySQL</a>.</p>
                    <div className="text-2xl">
                        <h2 className="font-bold text-green-400">Fonctionnalités</h2>
                        <ul className="mb-8 text-xl list-disc ml-10">
                            <li>Création d'un compte utilisateur</li>
                            <li>Création d'un nouveau sujet de discussion, ainsi que la possibilité d'ajouter des commentaires à ce sujet</li>
                            <li>Ajout de commentaires sur les sujets créés par d'autres utilisateurs</li>
                            <li>Attribution de likes ou de dislikes aux sujets et aux commentaires</li>
                            <li>Recherche et filtrage des sujets, ainsi que le filtrage des commentaires</li>
                            <li>Possibilité de modifier son nom d'utilisateur et son adresse e-mail, ainsi que de supprimer son compte</li>
                            <li>Consultation du profil d'un autre utilisateur et envoi de messages privés</li>
                            <li>Modification et suppression des sujets ou des commentaires appartenant à l'utilisateur</li>
                        </ul>
                        <div>
                            <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Accueil]</p>
                            <img src="/forum/home.png" draggable="false" alt="forum home" className="mb-6"/>
                            <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Sujets]</p>
                            <img src="/forum/topic.png" draggable="false" alt="forum topic" className="mb-6"/>
                            <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Message privé]</p>
                            <img src="/forum/mp.png" draggable="false" alt="forum mp" className="mb-16"/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Forum;