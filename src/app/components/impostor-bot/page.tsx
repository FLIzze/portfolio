import Image from 'next/image';

const ImpostorBot = () => {
    return (
        <div>
            <div className="px-20 h-screen overflow-y-auto mt-10 text-xl">
                <h1 className="text-4xl text-green-400 font-bold">Impostor Bot</h1>
                <p className="my-5 text-justify">Bot discord realisé en <a className="text-green-400">Javascript</a> et utilisant <a className="text-green-400">l'API de league of legends</a>. Son principe est celui de l'ancien jeu de solary <a href="https://amonglegends.fr/" target="blank" className="text-green-400">Among Legends</a> cependant ce jeu n'est plus maintenu. Aimant le jeu j'ai décidé de le recoder mais en tant que bot discord.</p>
                <p className="text-green-400 text-2xl font-bold">Fonctionnement</p>
                <ul className="list-disc ml-10">
                    <li>Etre 5 joueurs dans un salon vocal</li>
                    <li>Un joueur s'étant register lancera la commande '/start'</li>
                    <li>La partie commence tout le monde recevra son role en message privé et devra respecter les indications du bot</li>
                    <li>A la fin de la partie tout le monde votera</li>
                </ul>
                <div className="mt-8 flex justify-center">
                    <div>
                        <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[/Register]</p>
                        <Image
                            src="/impostor-bot/register.png"
                            alt="register"
                            className="h-fit mb-4 w-full"
                            priority={true}
                        />
                        <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[/Profile]</p>
                        <Image
                            src="/impostor-bot/profile.png"
                            alt="profile"
                            className="h-fit mb-4 w-full"
                            priority={true}
                        />
                        <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Ordres]</p>
                        <Image
                            src="/impostor-bot/droide.png"
                            alt="droide"
                            className="h-fit mb-4 w-full"
                            priority={true}
                        />
                        <Image
                            src="/impostor-bot/super-hero-role.
                            png" alt="s
                            uper-hero" className="h-fit mb-
                            4 w-full"
                            priority={true} />
                        <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Votes]</p>
                        <Image
                            src="/impostor-bot/game-end.png"
                            alt="game end"
                            className="h-fit mb-16 w-full"
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpostorBot;