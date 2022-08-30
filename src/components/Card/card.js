import React from "react";
import { useNavigate } from "react-router-dom";
function Card({ cardData }) {
  const cardStyle =
    "bg-[#F4F4F4] w-[315px] drop-shadow-2xl h-[494px] rounded flex justify-around items-center flex-col pt-4 px-8";

    let navigate = useNavigate();

  return (
    <div className={cardStyle}>
      <div className="font-sans font-semibold text-2xl">{cardData[0]}</div>
      <div>
        <img alt="" src={cardData[1]}></img>
      </div>
      <div className="min-h-[169px]">
        <ul className="inline-flex justify-end items-start flex-col">
          <li>{cardData[2][0]}</li>
          <li>{cardData[2][1]}</li>
          <li>{cardData[2][2]}</li>
          <li>{cardData[2][3]}</li>
        </ul>
      </div>
     
      <button
        className="rounded border-2 border-[#FF5800] border-solid w-[239px] h-[34px] bg-[#FCFCFC]"
        onClick={()=>navigate(cardData[3])}
      >
        Daftar Sekarang
      </button>
    </div>
  );
}

export default Card;
