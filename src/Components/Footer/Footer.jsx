import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo 1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#223A66] text-white py-12 px-20 text-sm ">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Marburg Support Logo" className="mr-2 rounded w-10 " /> {/* Added alt attribute */}
            <h2 className="text-xl font-bold">Marburg Support</h2>
          </div>
          <p className="text-gray-300 text-sm">
            We are committed to providing you with accurate and up-to-date information to 
            help you avoid the Marburg virus and ensure your well-being.
          </p>
        </div>
        
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="text-gray-300 text-sm">
            <li key="home" className="mb-2"><Link to={""} className="hover:text-white">Home</Link></li> {/* Added key prop */}
            <li key="about" className="mb-2"><Link to={""} className="hover:text-white">About</Link></li> {/* Added key prop */}
            <li key="prevent" className="mb-2"><Link to={""} className="hover:text-white">Prevent</Link></li> {/* Added key prop */}
            <li key="contact" className="mb-2"><Link to={""} className="hover:text-white">Contact</Link></li> {/* Added key prop */}
          </ul>
        </div>
        
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
          <p className="text-gray-300 text-sm mb-2">
            <Link to="mailto:nzayisenga@gmail.com" className="hover:text-white">nzayisenga@gmail.com</Link>
          </p>
          <p className="text-gray-300 text-sm mb-4">
            <Link to="tel:0790838315" className="hover:text-white">0790838315</Link>
          </p>
          <div className="flex space-x-4">
            <Link to={""} className="text-gray-300 hover:text-white">
              <FaFacebookF className="w-5 h-5 text-[#D42353] hover:text-[#f4238b]" />
            </Link>
            <Link to={""} className="text-gray-300 hover:text-white">
              <FaTwitter className="w-5 h-5 text-[#D42353] hover:text-[#F42353]" />
            </Link>
            <Link to={""} className="text-gray-300 hover:text-white">
              <FaLinkedinIn className="w-5 h-5 text-[#D42353] hover:text-[#F42353]" />
            </Link>
            <Link to={""} className="text-gray-300 hover:text-white">
              <FaInstagram className="w-5 h-5 text-[#D42353] hover:text-[#F42353]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;