import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Logo from '../../assets/logo 1.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
    <div className="hidden md:flex flex-wrap justify-between px-20 items-center bg-[#223A66] py-2 text-white text-[12px]">
      <div className="flex">support@marbugcare.com</div>
      <div className="flex">
        <div className="flex justify-center items-center gap-2">
          {" "}
          <FaLocationDot className=" " /> <div>Kigali/Nyarugenge</div>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center gap-2">
          {" "}
          <FaPhoneAlt /> <div> Call by now: +250788888888</div>
        </div>{" "}
      </div>
    </div>
    <div className="px-20 py-1 flex justify-between items-center bg-white">
      <div className="flex justify-center items-center gap-3">
        <img src={Logo} alt="" className='w-14 h-14 object-cover' />
        <h1 className=' font-bold text-[30px]'>MarburgCare</h1>
      </div>
      <div className="flex justify-center items-center " id='headerEl'>
      <ul className='flex justify-center items-center gap-2'>
      <li className='px-3 py-2 font-bold text-[15px] text-[#223A66] cursor-pointer'>
        <Link to="/">Home</Link> {/* Replace <a> with <Link> */}
      </li>
      <li className='px-3 py-2 font-bold text-[15px] text-[#223A66] cursor-pointer'>
        <Link to="about">About</Link> {/* Replace <a> with <Link> */}
      </li>
      <li className='px-3 py-2 font-bold text-[15px] text-[#223A66] cursor-pointer'>
        <Link to="prevent">Prevent</Link> {/* Replace <a> with <Link> */}
      </li>
      <li className='px-3 py-2 font-bold text-[15px] text-[#223A66] cursor-pointer'>
        <Link to="contact">Contact us</Link> {/* Replace <a> with <Link> */}
      </li>
      {/* Uncomment this block if you want to use a button for Login */}
      {/* 
      <li className='px-3 py-2 font-bold text-[15px] text-[#223A66] cursor-pointer'> 
        <button className='text-[#ffffff] px-6 py-2 bg-[#E42353] rounded-3xl'>Login</button>
      </li> 
      */}
    </ul>
      </div>
    </div>
  </div>
  )
}

export default Header
