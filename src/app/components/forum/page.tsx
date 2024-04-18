import React from "react";

const Forum = ( {fields, usedFields} ) => {
    return (
        <div>
            {fields[usedFields] == "Forum" && (
                <div className="px-20 h-screen overflow-y-auto mt-10">
                    <h1 className="text-4xl flex font-bold text-green-400">Forum</h1>
                    <p className="my-6 text-xl">Forum moche mais fonctionnel. Realisé en <a className="text-green-400">golang</a> avec une base de données <a className="text-green-400">MySQL</a>.</p>
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
                        <img src="/forum/home.png" draggable="false" alt="forum home" className="mb-6"/>
                        <img src="/forum/topic.png" draggable="false" alt="forum topic" className="mb-6"/>
                        <img src="/forum/mp.png" draggable="false" alt="forum mp" className="mb-16"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Forum;