"use client";

import { useState } from "react";
import About from "./components/about/page";
import Forum from "./components/forum/page";
import RevengeOnInove from "./components/revenge-on-inove/page";
import ImpostorBot from "./components/impostor-bot/page";
import Ecommerce from "./components/e-commerce/page";

export default function Home() {
  const fields: string[] = ["A propos", "E-commerce", "Doftopia", "Revenge on Inove", "Forum", "BlackJack Data", "Impostor Bot", "Cv"];
  const [usedField, setUsedField] = useState<number>(0);

  const fieldFocus = (id: string) => {
    setUsedField(parseInt(id));
  };

  return (
    <div className="h-full flex font-mono text-white bg-black">
      <nav className="lg:w-80 w-52 h-screen bg-white transition-all duration-500">
        <div className="flex items-center justify-center h-full flex-col text-xl bg-black">
          {fields.map((field: string, index: number) => (
            <div className="w-full z-40" key={index}>
                {usedField != index ? (
                  <div>
                      <p className="pr-4 text-white flex justify-end lg:text-2xl text-lg h-14 items-center bg-black hover:bg-white hover:font-bold hover:text-black w-full cursor-pointer border-b border-white border-r-2 hover:w-[115%] transition-all duration-200 rounded-r-lg" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                ) : (
                  <div>
                    <p className="flex justify-end pr-4 lg:text-2xl text-lg h-14 items-center bg-white text-black border-b border-black border-r-2 rounded-r-lg transition-all w-[115%] font-bold" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div> 
                )}
            </div>
          ))}
        </div>
      </nav>
      <div className="w-4/5 h-screen overflow-hidden">
        <Ecommerce fields={fields} usedFields={usedField}/>
        <About fields={fields} usedFields={usedField}/>
        <Forum fields={fields} usedFields={usedField}/>
        <RevengeOnInove fields={fields} usedFields={usedField}/>
        <ImpostorBot fields={fields} usedFields={usedField}/>
      </div>
    </div>
  );
}