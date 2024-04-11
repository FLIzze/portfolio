"use client";

import { useState } from "react";

export default function Home() {
  const fields: string[] = ["PROJETS", "CONTACT", "22CM", "RATIO", "APAGNAN", "PESSI"];
  const [usedField, setUsedField] = useState<number>(0);

  const fieldFocus = (id: string) => {
    try {
      const div = document.getElementById(usedField!.toString());
      div!.style.background = 'rgb(136, 212, 152)';
    } catch (error) {
    }
    const div = document.getElementById(id);
    div!.style.background = 'rgb(100, 165, 116)';
    setUsedField(parseInt(id));
  };


  return (
    <div className="h-screen bg-white flex items-center">
      <nav className="w-1/5 h-screen relative">
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
      <div className="flex w-full justify-center text-2xl text-[#64a574] font-bold">
        {fields[usedField!]}
      </div>
    </div>
  );
}