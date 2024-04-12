"use client";

import { useState } from "react";
import About from "./components/about/page";

export default function Home() {
  const fields: string[] = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT", "MATSUEL"];
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
                    <p className="pr-4 text-white flex justify-end text-2xl h-14 items-center bg-black hover:bg-white hover:text-black w-full cursor-pointer border-b border-white border-r-2 hover:w-[115%] transition-all duration-200 rounded-lg" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                ) : (
                  <div>
                    <p className="flex justify-end pr-6 text-2xl h-14 items-center bg-white text-black border-b border-black border-r-2 rounded-lg" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                )}
            </div>
          ))}
        </div>
      </nav>
      <div className="w-full h-full">
      <About fields={fields} usedField={usedField} />
        {fields[usedField] == fields[4] && (
          <div className="flex justify-center h-full w-full items-center">
            <img src="https://pictures.tribuna.com/image/cfba80fb-24e6-4e1c-a911-57a8a0242358?width=1920&quality=70" className="object-contain h-96 w-06"/>
          </div>
        )}
      </div>
    </div>
  );
}