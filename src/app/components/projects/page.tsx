import Link from "next/link"

interface Projects {
    projects: string[];
    usedProject: number;
}

const Projects: React.FC<Projects> = ({projects, usedProject}) => {
    return (
        <div>
            <p className="text-4xl">{projects[usedProject]}</p>
        </div>
    )
}

export default Projects