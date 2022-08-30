import React, { useState } from "react";
import { petunjukData } from "./petunjukData";

const PetunjukPenggunaan = () => {
  
  const buttonStyle =
    "[#FF1800]  hover:bg-[#FF1800]     shadow-2xl hover:rounded-full w-[100px] h-[36px] border-solid border-2 border-[#FF1800] rounded-md ";
  const buttonStyleActive =
    "bg-[#FF1800]  outline-none rounded-full   shadow-2xl  w-[100px] h-[36px] border-solid border-2 border-[#FF1800]  ";

  const [click, setClick] = useState(0);

  const handleClick = (index) => {
    setClick(index);
  };
  console.log(petunjukData[click]);
  return (
    <div className="min-h-screen max-h-full py-24 ">
      <h2 className="text-center text-2xl">Pentujuk Penggunaan</h2>

      <div className="justify-center flex flex-row items-center p-5 space-x-4 mb-10">
        <button
          onClick={() => handleClick(0)}
          className={click === 0 ? buttonStyleActive : buttonStyle}
        >
          Event
        </button>
        <button
          onClick={() => handleClick(1)}
          className={click === 1 ? buttonStyleActive : buttonStyle}
        >
          Konseling
        </button>
      </div>

      {petunjukData[click].id}
    </div>
  );
};

export default PetunjukPenggunaan;
