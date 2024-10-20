import React, { useContext, useState, useEffect } from "react";
import { Mail, User, Phone, Link2, MapPin } from "lucide-react";
import Logo from "../../assets/logo 1.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// Spinner loader component
const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
    ></path>
  </svg>
);

const HealthForm = () => {
  const navigate = useNavigate();
  const context = useContext(""); // Provide the actual context here

  // State for form values, errors, and loading state
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    district: "",
    sector: "",
    locationLink: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

 const [focus, setFocus] = useState(null);
  useEffect(() => {
    // Uncomment and use the context properly when ready
    // context.setIsHideSidebarAndHeader(true);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Validate inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }
    if (!formData.district) {
        newErrors.district = "district is required";
      }
      if (!formData.sector) {
        newErrors.sector = "sector is required";
      }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const frontend = import.meta.env.VITE_BACKEND_URL
      console.log(frontend)
      const response = await axios.post(`${frontend}/register`, formData);
      toast.success('Message sent successfully!');
      
      // Reset form data
      setFormData({
        email: '',
        fullName: '',
        phoneNumber: '',
        district: '',
        sector: '',
        locationLink: ''
      });
    } catch (error) {
      console.error('Error submitting form:nnnn', error);
      toast.error(error);
    } 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <ToastContainer />
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-lg mb-4">
            <img src={Logo} className="w-20" alt="Logo" />
          </div>
          <h2 className="text-2xl font-semibold text-[#223A66]">
            Get health to MarburgCare
          </h2>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#223A66]`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="relative">
              <User className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.fullName ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#223A66]`}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div className="relative">
              <Phone className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-[#223A66]`}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
            <div className="relative">
              <Link2 className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                name="locationLink"
                placeholder="Enter your location link"
                value={formData.locationLink}
                onChange={handleChange}
                onFocus={()=>setFocus("is your option")}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#223A66]`}
              />
              <p className="text-red-500 text-sm">{focus}</p>
            </div>
            <div className="relative">
              <MapPin className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                name="sector"
                placeholder="Enter your sector"
                value={formData.sector}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#223A66] ${errors.sector ? "border-red-500" : "border-gray-300"} `}
              />
               {errors.sector&& <p className="text-red-500 text-sm">{errors.sector}</p>}
            </div>
            <div className="relative">
              <MapPin className="absolute top-3 left-3 text-gray-400" size={20} />
              <input
                type="text"
                name="district"
                placeholder="Enter your district"
                value={formData.district}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#223A66] ${errors.district ? "border-red-500" : "border-gray-300"} `}
              />
               {errors.district && <p className="text-red-500 text-sm">{errors.district}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#223A66] text-white py-2 px-4 rounded-md hover:bg-[#3d63a8] focus:outline-none focus:ring-2 focus:ring-[#223A66] focus:ring-offset-2"
              disabled={isLoading}
            >
              {isLoading ? <p><Spinner className="text-white" /></p> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HealthForm;
