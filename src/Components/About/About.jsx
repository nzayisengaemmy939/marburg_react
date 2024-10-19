import React from "react";
import Sympotoms from "../HeroSection/Sympotoms";
import BgImage from '../../assets/22.jpg'
import symp from '../../assets/sympotoms.png';
import { useState } from "react";
import Health from "../getHealth/Health";

const About = () => {
  const [show,showComponent]=useState(false)
  const getHealth=()=>{
    showComponent(!show)
  }
  return (
    <div className="w-full pt-24 pb-10 ">
      <div className="bg-[#223A66] flex flex-col items-center justify-center text-white py-20 "  style={{
          width: "100%",
         backgroundColor:"#223A66]",
         backgroundImage: `linear-gradient(rgba(34, 58, 102, 0.9), rgba(34, 58, 102, 0.9)), url(${BgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // zIndex:"-1"
        }}>
        <div className="text-xl ">About</div>
        <h1 className="text-3xl font-[400]">About Marburg Virus</h1>
      </div>
      <div className="bg-white p-6 md:px-20 px-5">
        <h2 className="text-xl font-bold text-[#223A66] mb-4">
          Origin of MarburgCare
        </h2>
        <div className="border border-blue-200 p-4 rounded-lg text-sm text-[F4F9FC]">
          <p className="mb-4 text-[#223A66]">
            The Marburg virus was first identified in 1967 during simultaneous
            outbreaks in Marburg and Frankfurt, Germany, as well as in Belgrade,
            Serbia. The outbreak was traced to laboratory workers who had been
            exposed to infected African green monkeys (Cercopithecus aethiops)
            imported from Uganda for research. The virus, which is part of the
            filovirus family like Ebola, causes Marburg virus disease (MVD), a
            severe and often fatal hemorrhagic fever.
          </p>
          <p className="mb-4 text-[#223A66]">
            Marburg likely originated from fruit bats, specifically the Egyptian
            rousette bat Rousettus aegyptiacus, which is considered the natural
            reservoir. Human infections occur when individuals come into contact
            with the bats or their bodily fluids, often during cave exploration
            or in rural areas.
          </p>
        </div>
      </div>
      <div className="px-20">
      <div className="flex flex-wrap w-full ">
      <div className={`flex md:flex-1 w-full justify-center items-center p-10 md:p-20`}>
        <img src={symp} alt="" className='w-[60vh] h-[55vh]' />
        <div className={`$"md:w-[80%]":"md:w-[60%]"} w-full p-6`}>
        <h1 className="font-bold text-3xl text-[#223A66] mb-5">Key symptoms</h1>
        <ul className='text-[#82949B] font-[500] text-[15px] flex flex-col gap-2'>
          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#E42353] before:rounded-full">
            Fever
          </li>
          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#E42353] before:rounded-full">
            Chills
          </li>
          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#E42353] before:rounded-full">
            Headeche
          </li>
          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#E42353] before:rounded-full">
            Nausea, vomiting, and diarrhea
          </li>
          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#E42353] before:rounded-full">
            Sore throat
          </li>
          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#E42353] before:rounded-full">
            Rash with both flat and raised bumps, often on the torso
          </li>
          <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[#E42353] before:rounded-full">
            Chest pain
          </li>
          <li className=" mt-3 mb-3">As the disease advances, symptoms can become more severe, including  liver failure, delirium, shock, bleeding (hemorrhaging), and multi-organ dysfunction</li>
          <li> <button className="py-2 bg-[#E42353] text-white px-4 rounded-3xl" onClick={getHealth}>Get Health Services</button></li>
        </ul>
      </div>
      </div>
     
      {show&&<Health ></Health>}
    </div>
      </div>
    </div>
  );
};

export default About;
