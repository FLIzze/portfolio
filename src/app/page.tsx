"use client";

import { useState } from "react";
import About from "./components/about/page";
import Forum from "./components/forum/page";
import RevengeOnInove from "./components/revenge-on-inove/page";
import Ecommerce from "./components/e-commerce/page";
import Doftopia from "./components/doftopia/page";

export default function Home() {
  const fields: string[] = ["A propos", "Flowers", "Revenge on Inove", "Forum", "Doftopia"];
  const [usedField, setUsedField] = useState<number>(0);

  const fieldFocus = (id: string) => {
    setUsedField(parseInt(id));
  };

  return (
    <div className="flex font-mono text-white bg-black lg:flex-row flex-col pt-10 lg:pt-0">
      <nav className="w-full transition-all duration-500 lg:w-80">
        <div className="flex items-center justify-center h-fit lg:h-screen flex-col text-xl bg-black mb-2 lg:mb-0">
          {fields.map((field: string, index: number) => (
            <div className="lg:w-full w-2/3" key={index}>
                {usedField != index ? (
                  <div>
                      <p className="pr-4 text-white flex lg:justify-end justify-center lg:text-xl text-lg h-14 items-center bg-black hover:bg-white hover:font-bold hover:text-black w-full cursor-pointer border-white border-b-2 lg:hover:w-[115%] transition-all duration-200 border-r border-l lg:border-l-0 rounded-r-lg rounded-b-lg rounded-l-lg lg:rounded-l-none" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div>
                ) : (
                  <div>
                    <p className="flex lg:justify-end justify-center pr-4 lg:text-xl text-lg h-14 items-center bg-white text-black border-b border-black border-r-2 lg:rounded-l-none rounded-lg transition-all lg:w-[115%] font-bold" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div> 
                )}
            </div>
          ))}
        </div>
      </nav>
      <div className="lg:w-4/5 h-screen lg:overflow-hidden">
        {fields[usedField] == "A propos" && (
          <About/>
        )}
        {fields[usedField] == "Forum" && (
          <Forum/>
        )}
        {fields[usedField] == "Revenge on Inove" && (
          <RevengeOnInove/>
        )}
        {fields[usedField] == "Flowers" && (
          <Ecommerce/>
        )}
        {fields[usedField] == "Doftopia" && (
          <Doftopia/>
        )}
      </div>
    </div>
  );
}