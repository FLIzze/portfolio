import ImageComponent from "../image/main/page";

const Doftopia = () => {
    const images = ['items', 'item', 'item_desc', 'mobs', 'mob'];
    const alts = ["items", "item", "item_desc", "mobs", "mob"];

    return (
        <div>
            <div className="lg:px-20 px-6 md:px-12 lg:h-screen h-full lg:overflow-y-auto mt-10 bg-[#272727] lg:bg-transparent md:text-xl text-base">
                <h1 className="md:text-4xl text-3xl flex font-bold text-green-500 w-fit hover:border-b-0">Doftopia</h1>
                <p className="my-6 md:text-xl text-base">Wiki dofus. Realisé en <a className="text-green-500">nextjs</a> <a className="text-green-500">typescript</a> avec une base de données <a className="text-green-500">MySQL</a> ainsi qu'un <a className="text-green-500">API</a>.</p>
                <div>
                    <h2 className="font-bold text-green-500">Fonctionnalités</h2>
                    <ul className="mb-8 list-disc ml-10">
                        <li>Rechercher de n'importe quel item du jeu par n'importe quel filtre existant dans le jeu</li>
                        <li>Details de cet item (resistances, degats, metier necessaire pour crafter l'item, ressources ...)</li>
                        <li>Rechercher de n'importe quel mob du jeu par nom</li>
                        <li>Details de ce mob (resistances, degats, drops...)</li>
                        <li>Outil portails</li>
                    </ul>
                    <div>
                        {images.map((image, index) => (
                            <div key={index}>
                                <ImageComponent src={`/doftopia/${image}.png`} alt={alts[index]}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doftopia;