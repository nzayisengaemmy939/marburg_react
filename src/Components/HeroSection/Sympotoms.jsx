import React from 'react';
import symp from '../../assets/sympotoms.png';
import { useState } from 'react';
import Health from '../getHealth/Health';


function Sympotoms({imgEl}) {
const [show,showComponent]=useState(false)
  const getHealth = () => {
    showComponent(!show);
  };
  return (
    
    <div className={`flex flex-wrap w-full ${imgEl===false?"pt-5":"pt-10 "}`}>
      <div className={`flex md:flex-1 w-full justify-center items-center p-10 md:p-20`}>
       {imgEl===true&&( <img src={symp} alt="" className='w-full h-full' />)}
      </div>
      <div className={`${imgEl===false?"md:w-[80%]":"md:w-[60%]"} w-full p-6`}>
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
      {show&&<Health ></Health>}
    </div>
  );
}

export default Sympotoms;
