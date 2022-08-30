import React, { useRef, useState } from "react";
import EventIMG from "../images/Completed-pana 1.svg";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import Swiper core and required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules

function Layanan() {
  const pagination = {
    clickable: true,
  };

  const layananMenu =
    " w-[131px] flex justify-center items-center flex-col cursor-pointer ";
  const layananMenuActive =
    "bg-gray-400 w-[130px] h-[30px] flex justify-center items-center flex-col cursor-pointer rounded-full shadow-2xl";

  const [click, setClick] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleClick = (index) => {
    setClick(index);
  };
  return (
    <>
      <div className=" w-full h-[10%] flex justify-center items-center">
        <div className="text-[32px] font-Montserrat font-medium">
          Layanan Kami
        </div>
      </div>
      <div className=" ">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={500}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div className=" h-24 w-[750px]  flex items-center justify-center  hover:underline decoration-[#FA1E0E] decoration-4 cursor-pointer align-items-center">
              Events
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-24 w-[750px]   flex items-center justify-center hover:underline decoration-[#FA1E0E] decoration-4 cursor-pointer ">
              Konseling
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="grid grid-cols-2  flex justify-items-center mt-24 ">
            <div>
              <img src={EventIMG} alt="" />
            </div>

            <div>
              <p className="mb-12">Event Seputar Mental</p>
              <p className="mb-12 text-2xl w-[80%]">
                Kami mengadakan Webinar, Workshop, dan membahas mengenai
                kesehatan mental dan juga produktivitas
              </p>
              <Link to="/layanan">
              <button className="bg-[#FF725E] rounded-lg  text-white p-3">
                Lihat Selengkapnya
              </button>
              </Link>
           
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2  flex justify-items-center mt-24 ">
            <div>
              <img src={EventIMG} alt="" />
            </div>

            <div>
              <p className="mb-12">Event Seputar Mental</p>
              <p className="mb-12 text-2xl w-[80%]">
                Kamu dapat Konsultasi dengan Mentor Neo People Psikolog yang
                sudah mempunyai Izin Praktek
              </p>
              <Link to="/layanan">
              <button className="bg-[#FF725E] rounded-lg  text-white p-3">
                Lihat Selengkapnya
              </button>
              </Link>
             
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Layanan;
