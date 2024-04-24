import Image from "next/image";

const Doftopia = () => {
    return (
        <div>
            <div className="lg:px-20 px-6 md:px-12 lg:h-screen h-full lg:overflow-y-auto mt-10 bg-[#272727] lg:bg-transparent md:text-xl text-base">
                <h1 className="md:text-4xl text-3xl flex font-bold text-green-500 w-fit hover:border-b-0">Doftopia</h1>
                <p className="my-6 text-xl">Wiki dofus. Realisé en <a className="text-green-500">nextjs</a> <a className="text-green-500">typescript</a> avec une base de données <a className="text-green-500">MySQL</a> ainsi qu'un <a className="text-green-500">API</a>.</p>
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
                        <p className="text-green-500 w-full flex justify-center my-6">[Items]</p>
                        <a href="/doftopia/items.png" target="blank">
                            <Image src="/doftopia/items.png" draggable="false" alt="doftopia home" className="mb-6" width={1920} height={1080} priority={true}/>
                        </a>
                        <p className="text-green-500 w-full flex justify-center my-6">[Item]</p>
                        <a href="/doftopia/item.png" target="blank">
                            <Image src="/doftopia/item.png" draggable="false" alt="doftopia topic" className="mb-6" width={1920} height={1080} priority={true}/>
                        </a>
                        <p className="text-green-500 w-full flex justify-center my-6">[Ressource]</p>
                        <a href="/doftopia/item_desc.png" target="blank">
                            <Image src="/doftopia/item_desc.png" draggable="false" alt="doftopia mp" className="mb-6" width={1920} height={1080} priority={true}/>
                        </a>
                        <p className="text-green-500 w-full flex justify-center my-6">[Mobs]</p>
                        <a href="/doftopia/mobs.png" target="blank">
                            <Image src="/doftopia/mobs.png" draggable="false" alt="doftopia mp" className="mb-6" width={1920} height={1080} priority={true}/>
                        </a>
                        <p className="text-green-500 w-full flex justify-center my-6">[Mob]</p>
                        <a href="/doftopia/mob.png" target="blank">
                            <Image src="/doftopia/mob.png" draggable="false" alt="doftopia mp" className="pb-16" width={1920} height={1080} priority={true}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doftopia;