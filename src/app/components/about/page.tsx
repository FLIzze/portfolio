import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div>
            <div className="text-xl w-full mt-10 px-20">
                <div className="h-fit rounded-sm border border-black">
                <p className="mb-6 text-4xl font-bold text-green-500">BEL Alexandre</p>
                <p className="text-justify">Je suis un passionné du développement web, spécialisé en full-stack. Mon expertise englobe des technologies telles que Node.js, React, Next.js et TypeScript, ainsi que Python et Golang. Je suis passionné par l'innovation et je m'investis pleinement dans chaque projet, qu'il soit web ou non. Mon objectif est d'explorer continuellement de nouvelles opportunités pour enrichir mes compétences et contribuer à des solutions technologiques innovantes.</p>
                <p className="mt-10 font-bold text-green-500">Construisons quelque chose ensemble.</p>
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/abel0/" target="blank">
                        <Image src="/linkedin.png" alt="linkedin" className="mt-8 object-contain" width={60} height={60}/>
                    </a>
                    <a href="https://github.com/flizze" target="blank">
                        <Image src="/github.png" alt="github" className="mt-8 object-contain" width={60} height={60}/>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
};

export default About;