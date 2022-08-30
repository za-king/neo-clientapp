import React from 'react'
import g1 from '../icons/instagram.png'
import g2 from '../icons/whatsapp.png'

function Footer() {
  return (
    <nav className="bg-gray-800 justify-center h-[30vh] flex flex-col items-center ">
      <div className="flex pb-5 ">
        <div className="bg-white hover:bg-[#FF4400] w-[35px] h-[35px] rounded-full flex justify-center items-center mx-2 cursor-pointer">
          <img src={g1} alt='s' width={20} height={20}/>
        </div>

        <div className="bg-white hover:bg-[#FF4400] w-[35px] h-[35px] rounded-full flex justify-center items-center mx-2 cursor-pointer">
          <img src={g2} alt='s' width={20} height={20} />
        </div>
      </div>

      <div className="text-xl text-white font-sans font-normal">
      Tentang | kenapa mental sehat ? | Pentingnya kesehatan mental | F.A.Q
      </div>

      <div className="text-xl text-white font-sans font-normal">
      <h1>Hak Cipta © 2021 Hak cipta dilindungi undang-undang - Neo People</h1>
      </div>
        
      
      
    </nav>
  )
}

export default Footer