import Image from "next/image";

const RevengeOnInove = () => {
    return (
        <div>
            <div className="lg:px-20 px-6 md:px-12 lg:h-screen h-full lg:overflow-y-auto mt-10 bg-[#272727] lg:bg-transparent md:text-xl text-base">
                <h1 className="md:text-4xl text-3xl font-bold text-green-500 mb-6">Revenge on Inove</h1>
                <p className="my-6">Bienvenue dans Revenge On Inove, un jeu d'aventure développé en <a className="text-bold text-green-500">Python</a> avec Pygame. Dans ce jeu, vous incarnez un étudiant astucieux qui a décidé de hacker son école. Cependant, cette action a rendu tous les étudiants, professeurs, mentors et membres de l'administration furieux contre vous. Pour regagner le contrôle, vous devez vous aventurer dans chaque étage du bâtiment et affronter vos adversaires.</p>
                <h2 className="text-green-500 font-bold">Controles</h2>
                <ul className="list-disc ml-10 mb-8">
                    <li>Utilisez les touches directionnelles pour vous déplacer dans le bâtiment et interargir avec les menus</li>
                    <li>Appuyez sur la touche d'espace pour courir.</li>
                    <li>Utiliser la touche e pour interagir.</li>
                    <li>Appuyez sur les chiffres 1-9 pour sélectionner un item ou utiliser l'ascenseur.</li>
                </ul>
                <h2 className="text-green-500 font-bold">Déroulement du jeu</h2>
                <ul className="list-disc ml-10 mb-8">
                    <li>Exploration des étages</li>
                    <li>Affrontements épiques</li>
                    <li>Monter d'un étage</li>
                    <li>Répétez le processus</li>
                </ul>
                <div className="pb-16">
                    <p className="text-green-500 w-full flex justify-center my-6">[Dialogue]</p>
                    <a href="/revenge-on-Inove/dialogue.gif" target="blank">
                        <Image
                            src="/revenge-on-Inove/dialogue.gif"
                            alt="dialogue gif"
                            className="mb-8 bg-white p-2"
                            width={1920}
                            height={1080}
                            draggable="false"
                            priority={true}
                            unoptimized={true}
                        />
                    </a>
                    <p className="text-green-500 w-full flex justify-center my-6">[Combat]</p>
                    <a href="/revenge-on-Inove/fight.gif" target="blank">
                        <Image
                            src="/revenge-on-Inove/fight.gif"
                            alt="fight gif"
                            className="mb-8 bg-white p-2"
                            width={1920}
                            height={1080}
                            draggable="false"
                            priority={true}
                            unoptimized={true}
                        />
                    </a>
                    <p className="text-green-500 w-full flex justify-center my-6">[Ascenseur]</p>
                    <a href="/revenge-on-Inove/elevator.gif" target="blank">
                        <Image
                            src="/revenge-on-Inove/elevator.gif"
                            alt="elevator gif"
                            className=" bg-white p-2"
                            width={1920}
                            height={1080}
                            draggable="false"
                            priority={true} 
                            unoptimized={true}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RevengeOnInove;