import React from "react";
import cool from "../../images/Frame 13.png";
import { useNavigate } from "react-router-dom";


function FormKonsul() {
  const navigate = useNavigate();
  

  const handleClick = () => {
    navigate("/konsultasi");
  };
  return (
    <div className=" bg-[#F4F8FE] w-full h-screen justify-center flex items-center">
      <div className=" bg-[#EBF0F3] grid lg:grid-cols-2  md:grid-cols-1 md   w-[60%] h-[75%] shadow-md rounded">
        <div className=" text-center my-auto">
          <p className="text-xl my-10 font-bold ">LAYANAN KONSULTASI</p>
          <p className="text-xl my-10 font-bold "> Rp 30.000 </p>
          <button
            onClick={handleClick}
            className="inline-flex justify-center w-[80%] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Daftar Sekarang
          </button>
        </div>

        <div className="my-auto">
          <img src={cool} alt="konsulimage"  />
        </div>
      </div>
    </div>
  );
}

export default FormKonsul;
