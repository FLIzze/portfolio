interface Skills {
    fields: string[];
    usedField: number;
}

const Skills: React.FC<Skills> = ({fields, usedField}) => {
    const skills: string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2560px-Docker_%28container_engine%29_logo.svg.png', 'https://cdn.worldvectorlogo.com/logos/next-js.svg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', 'https://banner2.cleanpng.com/20180614/bgj/kisspng-mysql-database-logo-node-js-computer-software-5b22000ca56d66.6622869915289548926776.jpg'];
    return (
        <div>
            {fields[usedField] == fields[2] && (
                <div className="flex justify-center h-[800px] w-full px-28 text-2xl">
                    <div className="grid grid-cols-4 w-full h-fit gap-10">
                        {skills.map((skill: string, index: number) => (
                            <div key={index}>
                                {/* <p className="border border-white p-2 w-fit rounded-lg">{skill}</p> */}
                                <img src={skill} draggable="false" className="w-32 h-32 object-contain bg-white p-1 rounded-lg"/>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Skills;