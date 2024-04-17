const RevengeOnInove: React.FC<Fields> = ({fields, usedField}) => {
    return (
        <div>
            {fields[usedField] == "Revenge on Inove" && (
                <div className="text-xl px-20 h-screen overflow-y-auto mt-10">
                    <div className="flex">
                        <h1 className="text-4xl font-bold text-green-400 mr-4">Revenge on Inove</h1>
                        <a href="https://github.com/geoffrey-diederichs/Revenge_On_Inove" target="blank">
                            <img src="github-logo.png" alt="github" className="w-11 h-11"/>
                        </a>
                    </div>
                    <p className="my-5 text-justify">Bienvenue dans Revenge On Inove, un jeu d'aventure développé en <a className="text-bold text-green-400">Python</a> avec Pygame. Dans ce jeu, vous incarnez un étudiant astucieux qui a décidé de hacker son école. Cependant, cette action a rendu tous les étudiants, professeurs, mentors et membres de l'administration furieux contre vous. Pour regagner le contrôle, vous devez vous aventurer dans chaque étage du bâtiment et affronter vos adversaires.</p>
                    <h2 className="text-2xl text-green-400 font-bold">Controles</h2>
                    <ul className="list-disc ml-10 mb-5">
                        <li>Utilisez les touches directionnelles pour vous déplacer dans le bâtiment et interargir avec les menus</li>
                        <li>Appuyez sur la touche d'espace pour courir.</li>
                        <li>Utiliser la touche e pour interagir.</li>
                        <li>Appuyez sur les chiffres 1-9 pour sélectionner un item ou utiliser l'ascenseur.</li>
                    </ul>
                    <h2 className="text-2xl text-green-400 font-bold">Déroulement du jeu</h2>
                    <ul className="list-disc ml-10 mb-8">
                        <li>Exploration des étages</li>
                        <li>Affrontements épiques</li>
                        <li>Monter d'un étage</li>
                        <li>Répétez le processus</li>
                    </ul>
                    <div>
                        <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Dialogue]</p>
                        <img src="/revenge-on-Inove/dialogue.gif" alt="dialogue gif" className="mb-8 bg-white p-2" draggable="false"/>
                        <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Combat]</p>
                        <img src="/revenge-on-Inove/fight.gif" alt="fight gif" className="mb-8 bg-white p-2" draggable="false"/>
                        <p className="flex justify-center text-green-400 mb-4 text-xl font-bold">[Ascenseur]</p>
                        <img src="/revenge-on-Inove/elevator.gif" alt="elevator gif" className=" bg-white p-2 mb-16" draggable="false"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RevengeOnInove;