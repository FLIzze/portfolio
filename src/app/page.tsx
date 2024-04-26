"use client";

import { useState } from "react";
import About from "./components/about/page";
import Forum from "./components/forum/page";
import RevengeOnInove from "./components/revenge-on-inove/page";
<<<<<<< HEAD
import ImpostorBot from "./components/impostor-bot/page";
=======
>>>>>>> e-commerce
import Ecommerce from "./components/e-commerce/page";
import Doftopia from "./components/doftopia/page";

export default function Home() {
<<<<<<< HEAD
  const fields: string[] = ["A propos", "E-commerce", "Doftopia", "Revenge on Inove", "Forum", "BlackJack Data"];
=======
  const fields: string[] = ["A propos", "Flowers", "Revenge on Inove", "Forum", "Doftopia"];
>>>>>>> e-commerce
  const [usedField, setUsedField] = useState<number>(0);

  const fieldFocus = (id: string) => {
    setUsedField(parseInt(id));
  };

  return (
    <div className="flex font-mono text-white bg-[#272727] lg:flex-row flex-col pt-10 lg:pt-0">
      <nav className="w-full transition-all duration-500 lg:w-80">
        <div className="flex items-center justify-center h-fit lg:h-screen flex-col text-xl mb-2 lg:mb-0">
          {fields.map((field: string, index: number) => (
            <div className="lg:w-full w-2/3" key={index}>
                {usedField != index ? (
                  <div>
                    {index == 0 ? (
                      <div>
                        <p className="lg:pr-4 text-white flex lg:justify-end justify-center lg:text-xl text-lg h-14 items-center bg-[#3d3d3d] hover:bg-white hover:font-bold hover:text-[#3a3737] w-full cursor-pointer border-white border-b lg:hover:w-[115%] transition-all duration-200 border-r border-l border-t lg:border-l-0 rounded-r-lg rounded-b-lg rounded-l-lg lg:rounded-l-none" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="lg:pr-4 text-white flex lg:justify-end justify-center lg:text-xl text-lg h-14 items-center bg-[#3d3d3d] hover:bg-white hover:font-bold hover:text-[#3a3737] w-full cursor-pointer border-white border-b lg:hover:w-[115%] transition-all duration-200 border-r border-l lg:border-l-0 rounded-r-lg rounded-b-lg rounded-l-lg lg:rounded-l-none" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <p className="flex lg:justify-end justify-center pr-4 lg:text-xl text-lg h-14 items-center bg-white text-[#4d4a4a] border-b border-[#4d4a4a] border-r-2 lg:rounded-l-none rounded-lg transition-all lg:w-[115%] font-bold" id={index.toString()} onClick={() => fieldFocus(index.toString())}>{field}</p>
                  </div> 
                )}
            </div>
          ))}
        </div>
      </nav>
<<<<<<< HEAD
      <div className="w-4/5 h-screen overflow-hidden">
        {fields[usedField] == "Forum" && (
          <Forum/>
        )}

        {fields[usedField] == "Revenge on Inove" && (
          <RevengeOnInove/>
        )}

        {fields[usedField] == "A propos" && (
          <About/>
        )}

        {fields[usedField] == "E-commerce" && (
          <Ecommerce/>
        )}
=======
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
>>>>>>> e-commerce
      </div>
    </div>
  );
}