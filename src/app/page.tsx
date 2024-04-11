"use client";

import { useState } from "react";
import About from "./components/about/page";

export default function Home() {
  const fields: string[] = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  const [usedField, setUsedField] = useState<number>(0);

  const fieldFocus = (id: string) => {
    const div = document.getElementById(id);
    div!.style.background = '';
    setUsedField(parseInt(id));
  };


  return (
    <div className="h-full flex font-mono text-white bg-gradient-to-b to-green-300 from-[#88D498]">
      <nav className="w-1/5 h-screen bg-white border-r border-black">
        <div className="flex items-center justify-center h-full flex-col text-xl text-[#3E505B] z-10">
          {fields.map((field: string, index: number) => (
            <div className="w-full z-20">
                {usedField !== index ? (
                  <div>
                    <p className="text-white flex justify-end pr-6 text-2xl h-14 items-center bg-[#88D498] hover:bg-[#64a574] w-11/12 hover:w-full transition-all cursor-pointer border-b border-black border-r-2" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-white flex justify-end pr-6 text-2xl h-14 items-center bg-[#64a574] w-11/12 transition-all border-b border-black border-r-2" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                )}
            </div>
          ))}
        </div>
      </nav>
      <About fields={fields} usedField={usedField} />
    </div>
  );
}