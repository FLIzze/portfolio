import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div>
                <div className="text-xl w-full mt-10">
                    <div className="mx-24 bg-black h-fit p-4 rounded-sm border border-black">
                    <p className="mb-6 text-4xl font-bold text-green-400">BEL Alexandre</p>
                    <p className="text-justify">Je suis un passionné du développement web de 21 ans avec une spécialisation dans le développement full-stack. Au-delà de la création d'expériences web dynamiques, je maîtrise également Python et Golang, abordant des projets non web avec le même enthousiasme. Je suis passionné par l'innovation, repoussant constamment les limites et relevant de nouveaux défis pour perfectionner mes compétences.</p>
                    <p className="mt-10 font-bold text-green-400">Construisons quelque chose ensemble.</p>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/abel0/" target="blank">
                            <Image src="/linkedin.png" alt="linkedin" className="mt-8 object-contain" width={70} height={70}/>
                        </a>
                        <a href="https://github.com/flizze" target="blank">
                            <Image src="/github.png" alt="github" className="mt-8 object-contain" width={70} height={70}/>
                        </a>
                    </div>
                    </div>
                </div>
        </div>
    )
};

export default About;