import React from "react";
import MainImage from "../image/main/page";

const Forum = () => {
    const images = ['home', 'topic', 'mp'];
    const alts = ["Home", "Topic", "Mp"]

    return (
        <div>
            <div>
                <div className="lg:px-20 px-6 md:px-12 lg:h-screen h-full lg:overflow-y-auto mt-10 bg-[#272727] lg:bg-transparent md:text-xl text-base">
                    <a href="https://forum.alexandrebel.me" target="blank">
                        <h1 className="md:text-4xl text-3xl flex font-bold text-green-500 border p-2 border-green-500 w-fit rounded-lg hover:border-white hover:bg-[#3d3d3d] transition-all hover:text-white">Forum</h1>
                    </a>
                    <p className="my-6">Forum entièrement fonctionnel. Realisé en <a className="text-green-500">golang</a> avec une base de données <a className="text-green-500">MySQL</a>.</p>
                    <div>
                        <h2 className="font-bold text-green-500">Fonctionnalités</h2>
                        <ul className="mb-8 list-disc ml-10">
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
                            {images.map((image, index) => (
                                <div key={index}>
                                    <MainImage src={`/forum/${image}.png`} alt={alts[index]} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum;