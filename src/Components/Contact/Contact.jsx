import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    queryTopic: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='w-full py-24'>
       <div className="bg-[#223A66] flex flex-col items-center justify-center text-white py-20">
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
          <p className='text-sm text-[#223A66]'>Kigali,Nyarugenge</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-center text-[#223A66] mb-6">Send us Message</h2>

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
            name="queryTopic"
            placeholder="Your query topic"
            value={formData.queryTopic}
            onChange={handleChange}
            className="w-full p-2 border border-gray-400 rounded"
            required
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
          className="bg-[#223A66] text-white py-2 px-4 rounded-2xl text-sm  transition duration-300"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Contact
