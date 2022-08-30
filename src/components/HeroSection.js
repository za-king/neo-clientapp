import React from "react";
import HeaderImg from "../icons/Mental health-pana 1.svg";
function HeroSection() {
  return (
    <div
      className="bg-[#F4F8FE] h-screen flex flex-row
justify-center items-center md:container md:mx-auto"
    >
      <div className=" w-2/5 h-screen inline-flex flex-col ">
        <div className=" h-5/6 flex justify-center px-[20px] flex-col">
          <div className="font-TentangNanti font-bold text-8xl">
            Growing with <div className="text-[#FF5800]">community</div>
          </div>
          <div className="font-Montserrat font-thin text-3xl">
            #TumbuhBersama
          </div>
        </div>
        <div className=" h-1/6 px-[20px] flex justify-start flex-row items-start">
          <button className="bg-gray-200 w-[170px] h-[50px] rounded-full mr-[100px] border border-[#FF5800] text-[#FF5800] font-Montserrat font-thin">
            Daftar Event
          </button>
          <button className="bg-gray-200 w-[170px] h-[50px] rounded-full border border-[#FF5800] text-[#FF5800] font-Montserrat font-thin">
            Join With Us
          </button>
        </div>
      </div>
      <div className="w-3/5 h-full flex items-start justify-center">
        <img src={HeaderImg} width={700} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
