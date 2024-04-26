import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <div className="lg:px-20 px-6 md:px-12 lg:h-screen h-full lg:overflow-y-auto mt-10 lg:bg-transparent md:text-xl text-base bg-[#272727]">
                <div className="h-fit rounded-sm">
                <p className="mb-6 md:text-4xl text-3xl font-bold text-green-500">BEL Alexandre</p>
                <p className="lg:text-justify">Je suis un passionné du développement web de 21 ans avec une spécialisation dans le développement full-stack. Au-delà de la création d'expériences web dynamiques, je maîtrise également Python et Golang, abordant des projets non web avec le même enthousiasme. Je suis passionné par l'innovation, repoussant constamment les limites et relevant de nouveaux défis pour perfectionner mes compétences.</p>
                <p className="mt-10 font-bold text-green-500">Construisons quelque chose ensemble.</p>
                <div className="flex gap-6">
                    <a href="https://github.com/flizze" target="blank">
                        <Image src="/github.png" alt="github" className="mt-8 object-contain" width={60} height={60} priority={true}/>
                    </a>
                    <a href="https://discord.com/users/344636924050538506" target="blank">
                        <Image src="/discord.png" alt="discord" className="mt-8 object-contain" width={60} height={60} priority={true}/>
                    </a>
                    <a href="https://www.linkedin.com/in/abel0/" target="blank">
                        <Image src="/linkedin.png" alt="linkedin" className="mt-8 object-contain" width={60} height={60} priority={true}/>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
};

export default About;