import React from "react";
import LayananCard from "../components/Card/card";
import EventIcon from "../icons/image 24.svg";
import KonselingIcon from "../icons/image 25.svg";
import KaryaIcon from "../icons/image 27.svg";
function Layanan() {
  const cardData = [
    [
      "Event",
      EventIcon,
      [
        "Kami mengadakan Webinar",
        "Workshop",
        "Sharing Session",
        "membahas mengenai kesehatan mental dan juga produktivitas",
      ],
      "/event"
      
    ],
    [
      "Konsultasi",
      KonselingIcon,
      [
        "Kamu dapat Konsultasi dengan Mentor Neo People",
        "Psikolog yang sudah mempunyai Izin Praktek",
      ],
      "/formkonsul"
      
    ],
    
  ];
  return (
    <div className=" bg-[#F4F8FE] h-full py-24 justify-center flex flex-col  items-center">
      <div className="h-[20%] w-full flex justify-end items-center flex-col">
        <div className="text-[32px] font-Montserrat font-medium">
          Layanan Kami
        </div>
        <div className="text-xl font-sans font-thin">
          Temukan layanan Satu Persen yang sesuai untuk kamu.
        </div>
      </div>
      <div className="h-[80%] w-full grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center pt-10">
        <LayananCard cardData={cardData[0]} />
        <LayananCard cardData={cardData[1]} />
        
      </div>
    </div>
  );
}

export default Layanan;
