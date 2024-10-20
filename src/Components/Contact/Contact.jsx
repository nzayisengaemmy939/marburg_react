import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import.meta.env.VITE_BACKEND_URL ;
import BgImage from '../../assets/22.jpg'


function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    topic: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [isLoading,setLoading]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData,'data to be transnfered to server')
    setLoading(true)
    try {
      const frontend = import.meta.env.VITE_BACKEND_URL
      const response = await axios.post(`${frontend}/messages/register`, formData);
      console.log('Form submitted successfully:', response.data);
      toast.success('Message sent successfully!'); // Success toast
      // Optionally, reset form data
      setFormData({
        fullName: '',
        email: '',
        topic: '',
        phoneNumber: '',
        message: ''
      });
      setLoading(false)
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again later.'); // Error toast
    }
  };

  return (
    <div className='w-full py-24'>
      <ToastContainer /> {/* Toast container for notifications */}
      <div className="bg-[#223A66] flex flex-col items-center justify-center text-white py-20" style={{
          width: "100%",
         backgroundColor:"#223A66]",
         backgroundImage: `linear-gradient(rgba(34, 58, 102, 0.9), rgba(34, 58, 102, 0.9)), url(${BgImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // zIndex:"-1"
        }}>
        <div className="text-lg">Contact us</div>
        <h1 className="text-3xl font-[400]">Get In Touch</h1>
      </div>
      <div className="px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 py-10">
          <div className="text-center">
            <Phone className="mx-auto text-red-500 mb-2" />
            <h3 className="font-semibold text-sm">Call us</h3>
            <p className='text-sm text-[#223A66]'>0790838315</p>
          </div>
          <div className="text-center">
            <Mail className="mx-auto text-red-500 mb-2" />
            <h3 className="font-semibold text-sm">Email us</h3>
            <p className='text-sm text-[#223A66]'>support2001@murburgcare.com</p>
          </div>
          <div className="text-center">
            <MapPin className="mx-auto text-red-500 mb-2" />
            <h3 className="font-semibold text-sm">Location</h3>
            <p className='text-sm text-[#223A66]'>Kigali, Nyarugenge</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-center text-[#223A66] mb-6">Send us a Message</h2>

        <form onSubmit={handleSubmit} className="space-y-4 px-32 text-sm text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
            <input
              type="text"
              name="topic"
              placeholder="Your query topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              requiredF
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded h-32"
            required
          ></textarea>
          <div className="w-full flex justify-center">
          <button
  type="submit"
  className="bg-[#223A66] text-white py-2 px-4 rounded-2xl text-sm transition duration-300"
  disabled={isLoading} // Correctly set the disabled attribute
>
  {isLoading ? 'Sending...' : 'Send Message'} {/* Change button text based on loading state */}
</button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
