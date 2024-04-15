"use client";

import { useState } from "react";
import About from "./components/about/page";
import Projects from "./components/projects/page";

export default function Home() {
  const fields: string[] = ["A propos", "Projets", "Skills", "Contact"];
  const projects: string[] = ["E-commerce", "Forum", "Doftopia", "Revenge on Inove", "BlackJack Data", "Impostor Bot", "Not named yet", "Portfolio"]
  const [usedField, setUsedField] = useState<number>(0);
  const [usedProject, setUseProject] = useState<number>(0);

  const fieldFocus = (id: string) => {
    setUsedField(parseInt(id));
  };

  const projectFocus = (id: string) => {
    setUseProject(parseInt(id));
  }

  return (
    <div className="h-full flex font-mono text-white bg-black">
      <nav className="lg:w-80 w-52 h-screen bg-white transition-all duration-500">
        <div className="flex items-center justify-center h-full flex-col text-xl bg-black">
          {fields.map((field: string, index: number) => (
            <div className="w-full z-40" key={index}>
                {usedField != index ? (
                  <div>
                      <p className="pr-4 text-white flex justify-end text-2xl h-14 items-center bg-black hover:bg-white hover:text-black w-full cursor-pointer border-b border-white border-r-2 hover:w-[115%] transition-all duration-200 rounded-r-lg" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                ) : (
                  <div>
                    <p className="flex justify-end pr-4 text-2xl h-14 items-center bg-white text-black border-b border-black border-r-2 rounded-r-lg transition-all w-[115%]" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                      {index == 1 && (
                        <div className="transition-all">
                          {projects.map((project: string, index: number) => (
                            <div key={index} className="">
                              {usedProject != index ?  (
                                <div>
                                  <p className="w-10/12 h-10 items-center border-white border-b border-r-2 hover:w-11/12 flex justify-end pr-4 cursor-pointer hover:bg-white rounded-r-lg hover:text-black transition-all" id={index.toString()} onClick={() => projectFocus(index.toString())}>{project}</p>
                                </div>
                              ): (
                                <div>
                                  <p className="h-10 items-center bg-white text-black w-11/12 flex justify-end pr-4 rounded-r-lg transition-all">{project}</p>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                )}
            </div>
          ))}
        </div>
      </nav>
      <div className="w-4/5 h-screen">
        {fields[usedField] == "Projets" && (
          <div className="w-full flex justify-center h-full items-center">
            <Projects projects={projects} usedProject={usedProject}/>
          </div>
        )}
        <About fields={fields} usedField={usedField}/>
        </div>
    </div>
  );
}