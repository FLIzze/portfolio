import Image from "next/image";

const Doftopia = () => {
    return (
        <div>
            <div className="px-24 h-screen overflow-y-auto mt-10">
                <h1 className="text-4xl flex font-bold text-green-400 w-fit hover:border-b-0">Doftopia</h1>
                <p className="my-6 text-xl">Wiki dofus. Realisé en <a className="text-green-400">nextjs</a> <a className="text-green-400">typescript</a> avec une base de données <a className="text-green-400">MySQL</a> ainsi qu'un <a className="text-green-400">API</a>.</p>
                <div className="text-2xl">
                    <h2 className="font-bold text-green-400">Fonctionnalités</h2>
                    <ul className="mb-8 text-xl list-disc ml-10">
                        <li>Rechercher de n'importe quel item du jeu par n'importe quel filtre existant dans le jeu</li>
                        <li>Details de cet item (resistances, degats, metier necessaire pour crafter l'item, ressources ...)</li>
                        <li>Rechercher de n'importe quel mob du jeu par nom</li>
                        <li>Details de ce mob (resistances, degats, drops...)</li>
                        <li>Outil portails</li>
                    </ul>
                    <div className="text-xl">
                        <p className="text-green-400 w-full flex justify-center my-6">[Items]</p>
                        <Image src="/doftopia/items.png" draggable="false" alt="doftopia home" className="mb-6" width={1920} height={1080}/>
                        <p className="text-green-400 w-full flex justify-center my-6">[Item]</p>
                        <Image src="/doftopia/item.png" draggable="false" alt="doftopia topic" className="mb-6" width={1920} height={1080}/>
                        <p className="text-green-400 w-full flex justify-center my-6">[Ressource]</p>
                        <Image src="/doftopia/item_desc.png" draggable="false" alt="doftopia mp" className="mb-6" width={1920} height={1080}/>
                        <p className="text-green-400 w-full flex justify-center my-6">[Mobs]</p>
                        <Image src="/doftopia/mobs.png" draggable="false" alt="doftopia mp" className="mb-6" width={1920} height={1080}/>
                        <p className="text-green-400 w-full flex justify-center my-6">[Mob]</p>
                        <Image src="/doftopia/mob.png" draggable="false" alt="doftopia mp" className="mb-16" width={1920} height={1080}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doftopia;