import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

function Apa() {
  return (
    <div>
      <div className="  bg-[#050C44] w-full h-screen  ">
        <div className="">
          <div className=" p-24  w-full items-center ">
            <div className="text-2xl  text-white font-thin  ">
              Apa kata mereka?
            </div>

            <div className="text-4xl text-white font-thin w-3/4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full h-full ">
            <div className="bg-[#E4E4E4] w-[80%]   ">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <div className="flex flex-row justify-center items-center rounde h-full">
                    <div className=" h-full  overflow-hidden rounded">
                      <img
                        src="/images/img1.jpg"
                        className="w-full h-full"
                        alt="dsa"
                      />
                    </div>
                    <div className="w-[70%] px-8 flex justify-center flex-col items-center">
                      <div className="flex w-full justify-start">
                        <ImQuotesLeft size={60} />
                      </div>
                      <div className="text-left w-[90%]">
                        Alhamdulillah setelah aku kenal Neo People ada perubahan
                        hidup pelan-pelan seperti sekarang agak tegar kalau
                        menghadapi masalah, terus lingkungan juga merasakan
                        emosional aku lebih stabil. Terima kasih yaa Neo People
                        sudah membentuk komunitas yang bermanfaat, semoga kita
                        bisa selalu #tumbuhbersama
                      </div>
                      <div className="flex w-full justify-end">
                        <ImQuotesRight size={60} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-row justify-center items-center rounde h-full">
                    <div className=" h-full  overflow-hidden rounded">
                      <img
                        src="/images/img1.jpg"
                        className="w-full h-full"
                        alt="dsa"
                      />
                    </div>
                    <div className="w-[70%] px-8 flex justify-center flex-col items-center">
                      <div className="flex w-full justify-start">
                        <ImQuotesLeft size={60} />
                      </div>
                      <div className="text-left w-[90%]">
                        Alhamdulillah setelah aku kenal Neo People ada perubahan
                        hidup pelan-pelan seperti sekarang agak tegar kalau
                        menghadapi masalah, terus lingkungan juga merasakan
                        emosional aku lebih stabil. Terima kasih yaa Neo People
                        sudah membentuk komunitas yang bermanfaat, semoga kita
                        bisa selalu #tumbuhbersama
                      </div>
                      <div className="flex w-full justify-end">
                        <ImQuotesRight size={60} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apa;
