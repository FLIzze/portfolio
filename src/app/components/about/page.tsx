interface About {
    fields: string[];
    usedField: number;
}

const About: React.FC<About> = ({fields, usedField}) => {
    return (
        <div className="text-2xl w-full mt-28">
            {fields[usedField] == fields[0] && (
                <div className="mx-24 mt-28 bg-black h-fit p-4 rounded-sm border border-black">
                  <p className="mb-12 text-6xl font-bold">BEL Alexandre</p>
                  <p>I'm a 21-year-old web development enthusiast with a focus on full-stack development. Beyond crafting dynamic web experiences, I'm also versed in Python and Golang, tackling non-web projects with equal enthusiasm. I'm passionate about innovation, constantly pushing boundaries and embracing new challenges to refine my skills. Let's build something amazing together.</p>
                </div>
              )}
        </div>
    )
};

export default About;