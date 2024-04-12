"use client";

import { useState } from "react";
import About from "./components/about/page";
import Link from "next/link";

export default function Home() {
  const fields: string[] = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT", "MATSUEL"];
  const projectTitle: string[] = ["e-commerce", "ratio", "encore", "non man"];
  const projectDesc: string[] = ["vente de fleurs", "vente d'organes", "vente d'enfants", "vraiment mais apagnan enfaite"];
  const projectImg: string[] = ["https://pictures.tribuna.com/image/cfba80fb-24e6-4e1c-a911-57a8a0242358?width=1920&quality=70", "https://pictures.tribuna.com/image/cfba80fb-24e6-4e1c-a911-57a8a0242358?width=1920&quality=70", "https://pictures.tribuna.com/image/cfba80fb-24e6-4e1c-a911-57a8a0242358?width=1920&quality=70", "https://pictures.tribuna.com/image/cfba80fb-24e6-4e1c-a911-57a8a0242358?width=1920&quality=70"];
  const [usedField, setUsedField] = useState<number>(0);

  const fieldFocus = (id: string) => {
    const div = document.getElementById(id);
    div!.style.background = '';
    setUsedField(parseInt(id));
  };


  return (
    <div className="h-full flex font-mono text-white bg-black">
      <nav className="w-1/5 h-screen bg-white">
        <div className="flex items-center justify-center h-full flex-col text-xl bg-black">
          {fields.map((field: string, index: number) => (
            <div className="w-full z-40">
                {usedField !== index ? (
                  <div>
                    <p className="pr-4 text-white flex justify-end text-2xl h-14 items-center bg-black hover:bg-white hover:text-black w-full cursor-pointer border-b border-white border-r-2 hover:w-[115%] transition-all duration-200 rounded-r-lg" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                ) : (
                  <div>
                    <p className="flex justify-end pr-6 text-2xl h-14 items-center bg-white text-black border-b border-black border-r-2 rounded-r-lg" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                )}
            </div>
          ))}
        </div>
      </nav>
      <div className="w-4/5 h-full">
        <About fields={fields} usedField={usedField}/>
        {fields[usedField] == fields[1] && (
            <div className="flex justify-center h-fit w-full px-28">
              <div className="grid grid-cols-3 gap-10">
                {projectTitle.map((title: string, index: number) => (
                  <Link href="https://github.com/flizze" target="-blank">
                    <div className="border border-white p-3 text-2xl hover:-translate-y-2 transition duration-300 cursor-pointer hover:bg-white hover:text-black hover:border-black rounded-lg">
                      <p className="font-fold mb-3">{title}</p>
                      <p>{projectDesc[index]}</p>
                      <img src={projectImg[index]}/>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {fields[usedField] == fields[4] && (
            <div className="flex justify-center h-full w-full items-center">
              <img src="https://pictures.tribuna.com/image/cfba80fb-24e6-4e1c-a911-57a8a0242358?width=1920&quality=70" className="object-contain h-96 w-06"/>
            </div>
          )}
        </div>
    </div>
  );
}