import Link from "next/link"

interface Projects {
    fields: string[];
    usedField: number;
}

interface Project {
    title: string;
    desc: string;
    img: string;
}

const Projects: React.FC<Projects> = ({fields, usedField}) => {
    const projects: Project[] = [
        {
            title: "forum",
            desc: "Forum en golang",
            img: "",
        },
        {
            title: "Doftopia",
            desc: "Dofus",
            img: "",
        },
        {
            title: "BlackJack Data",
            desc: "Analyse de données sur le jeu du BlackJack",
            img: "",
        },
        {
            title: "E-commerce",
            desc: "Site de vente de fleurs",
            img: "",
        },
        {
            title: "Impostor Bot",
            desc: "Bot de l'imposteur en discord.",
            img: "",
        },
        {
            title: "Jeu 2d isometrique",
            desc: "Typescript en canvas.",
            img: "",
        },
        {
            title: "Revenge on Inove",
            desc: "Pareil mais python",
            img: "",
        },
        {
            title: "Portfolio",
            desc: "Ca quoi",
            img: "",
        },
        {
            title: "Backup",
            desc: "Systeme de backup en python",
            img: "",
        },
        {
            title: "ChatBox",
            desc: "Systeme de chatbox en python",
            img: "",
        }
    ]

    return (
        <div>
            {fields[usedField] == fields[1] && (
                <div className="flex justify-center h-[800px] w-full px-28 overflow-y-auto">
                  <div className="grid grid-cols-3 gap-10 pt-2 h-fit">
                    {projects.map((project: Project, index: number) => (
                      <Link href="https://github.com/flizze" target="-blank" className="h-full"  key={index}>
                        <div className="border border-white py-3 px-5 text-2xl hover:-translate-y-2 transition duration-300 cursor-pointer hover:bg-white hover:text-black hover:border-black rounded-lg h-full">
                          <p className="font-fold mb-3">{project.title}</p>
                          <p className="text-lg">{project.desc}</p>
                          <p className="text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odio esse exercitationem voluptatem consequatur saepe alias ab fugiat necessitatibus, nemo laborum accusamus debitis placeat aperiam dolores eos qui expedita corporis!</p>
                          <img src={project.img}/>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
        </div>
    )
}

export default Projects