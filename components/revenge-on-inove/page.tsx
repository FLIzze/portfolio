import MainImage from "../image/main/page";

const RevengeOnInove = () => {
    const images = ['dialogue', 'fight', 'elevator'];
    const alts = ['Dialogue', 'Fight', 'Elevator'];

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
                <div>
                    {images.map((image, index) => (
                        <div key={index}>
                            <MainImage src={`/revenge-on-Inove/${image}.gif`} alt={alts[index]} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RevengeOnInove;