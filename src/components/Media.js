import React from 'react';
import Fitmind from "../icons/fitmind-logo.png";
import TanyaP from "../icons/Logo-TP-e1629008515711.png";
import SehatMental from "../icons/logo.d52539a.png";

function Media() {
    const sponsors = [
        Fitmind,
        TanyaP,
        SehatMental,
        
      ];
    
      const listSponsor = [];
      for (const [index, value] of sponsors.entries()) {
        console.log(value);
        listSponsor.push(
          <div className="flex bg-[#EBF0F3] w-[250px] h-[250px] justify-center items-center rounded-xl shadow-lg hover:shadow-xl">
            <div className="w-[120px] h-[120px]">
              <img src={value} alt=''></img>
            </div>
          </div>
        );
      }
  return  <div className=" flex bg-[#F4F8FE] h-full w-full justify-center flex-col">
  <div className="bg-[#FF9D69] w-full h-[100px] flex justify-center items-center">
    <div className="text-6xl font-sans font-thin">Media Partner</div>
  </div>

  <div className=" w-[full] h-[85%]  ">
    <div className=" grid grid-cols-4 gap-6 justify center justify-items-center p-20">
      {listSponsor}
    </div>
  </div>
</div>
}

export default Media;
