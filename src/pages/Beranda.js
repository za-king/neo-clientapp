import React,{useEffect,useContext} from "react";
import HeroSection from "../components/HeroSection";
import Layanan from "../components/Layanan";
import Apa from "../components/Apa";
import Media from "../components/Media";
import Attention from "../components/Attention";
import AuthContext from "../context/auth/authContext";

function Beranda() {
  const authcontext = useContext(AuthContext);
  const { LoadUser } = authcontext;


  useEffect(() =>{
   LoadUser()
  },[])
  return (
   <div>
     <HeroSection />
     <Layanan />
     <Apa />
     <Media />
     <Attention />

   </div>
  );
}

export default Beranda;
