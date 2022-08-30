import React from "react";
import Yushar from "../images/image 33.png";
import Rindang from "../images/image 34.png";
import Novita from "../images/image 35.png";
import Azmi from "../images/image 36.png";

function Team() {
  return (
    <div className=" bg-[#F4F8FE] h-[120vh] justify-center flex flex-row items-center">
      <div className="h-[20%] w-full flex justify-center items-start flex-col pl-8">
        <div className="text-[90px] font-Montserrat font-semibold w-[20%]">
          Our Team
        </div>
        <div className="text-[20px] font-Montserrat font-normal">
          Temukan layanan Satu Persen yang sesuai untuk kamu.
        </div>
      </div>
      <div className="h-[90%] max-h-[90%] w-full flex flex-row my-10 pt-10 overflow-scroll justify-between px-10">
        <div className="flex flex-col ">
          <div className="flex-none w-[259px] h-[279px] ">{/* The gap */}</div>

          <div className="flex-none w-[259px] h-[397px]">
            <img src={Rindang} alt=""></img>
            <div className="font-Montserrat font-semibold text-[14px]">
              Rindang Nuranisahra
            </div>
            <div className="font-Montserrat font-normal text-[14px]">
              Mentor
            </div>
          </div>

          <div className="flex-none w-[259px] h-[279px] ">{/* The gap */}</div>

          <div className="flex-none w-[259px] h-[397px]">
            <img src={Azmi} alt=""></img>
            <div className="font-Montserrat font-semibold text-[14px]">
              Azmi Alfarisi Ramadhan
            </div>
            <div className="font-Montserrat font-normal text-[14px]">
              Public Relation
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-none w-[259px] h-[397px]">
            <img src={Yushar} alt=""></img>
            <div className="font-Montserrat font-semibold text-[14px]">
              Yushar Aulia Nugraha
            </div>
            <div className="font-Montserrat font-normal text-[14px]">
              CEO, Founder, Mentor
            </div>
          </div>

          <div className="flex-none w-[259px] h-[279px] ">{/* The gap */}</div>

          <div className="flex-none w-[259px] h-[397px] ">
            <img src={Novita} alt=""></img>
            <div className="font-Montserrat font-semibold text-[14px]">
              Novita Azhari
            </div>
            <div className="font-Montserrat font-normal text-[14px]">
              Mentor
            </div>
          </div>

          <div className="flex-none w-[259px] h-[500px] ">{/* The gap */}</div>
        </div>
      </div>
    </div>
  );
}

export default Team;
