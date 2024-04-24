import React from "react";
import Image from "next/image";

const Forum = () => {
    return (
        <div>
            <div className="px-20 lg:h-screen h-full lg:overflow-y-auto mt-10 bg-black lg:bg-transparent">
                <a href="https://forum.alexandrebel.me" target="blank">
                    <h1 className="text-4xl flex font-bold text-green-500 border-b border-green-500 w-fit hover:border-b-0">Forum</h1>
                </a>
                <p className="my-6 text-xl">Forum entièrement fonctionnel. Realisé en <a className="text-green-500">golang</a> avec une base de données <a className="text-green-500">MySQL</a>.</p>
                <div className="text-2xl">
                    <h2 className="font-bold text-green-500">Fonctionnalités</h2>
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
                    <div className="text-xl">
                        <p className="text-green-500 w-full flex justify-center my-6">[Home]</p>
                        <a href="/forum/home.png" target="blank">
                            <Image src="/forum/home.png" draggable="false" alt="forum home" className="mb-6" width={1920} height={1080}/>
                        </a>
                        <p className="text-green-500 w-full flex justify-center my-6">[Sujets]</p>
                        <a href="/forum/topic.png" target="blank">
                            <Image src="/forum/topic.png" draggable="false" alt="forum topic" className="mb-6" width={1920} height={1080}/>
                        </a>
                        <p className="text-green-500 w-full flex justify-center my-6">[Messages privés]</p>
                        <a href="/forum/mp.png" target="blank">
                            <Image src="/forum/mp.png" draggable="false" alt="forum mp" className="pb-16" width={1920} height={1080}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum;