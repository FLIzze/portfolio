const About: React.FC<Fields> = ({fields, usedField}) => {
    
    return (
        <div>
            {fields[usedField] == fields[0] && (
                <div className="text-xl w-full mt-10 px-20">
                    <div className="bg-black h-fit rounded-sm border border-black">
                    <p className="mb-5 text-4xl font-bold text-green-400">BEL Alexandre</p>
                    <p className="text-justify">Je suis un passionné du développement web de 21 ans avec une spécialisation dans le développement full-stack. Au-delà de la création d'expériences web dynamiques, je maîtrise également Python et Golang, abordant des projets non web avec le même enthousiasme. Je suis passionné par l'innovation, repoussant constamment les limites et relevant de nouveaux défis pour perfectionner mes compétences.</p>
                    <p className="mt-10 font-bold text-green-400">Développons quelque chose ensemble.</p>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/abel0/" target="blank">
                            <img src="linkedin.png" alt="linkedin" className="h-16 w-16 mt-8 object-contain"/>
                        </a>
                        <a href="https://github.com/flizze" target="blank">
                            <img src="github.png" alt="github" className="h-16 w-16 mt-8 object-contain"/>
                        </a>
                    </div>
                    </div>
                </div>
              )}
        </div>
    )
};

export default About;