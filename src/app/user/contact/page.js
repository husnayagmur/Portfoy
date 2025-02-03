"use client"
import React from 'react'
import { motion } from 'framer-motion';
const page = () => {
  return (
    <motion.div
      className="flex h-full w-full max-w-7xl mx-auto"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className=" bg-darkdark-gray bg-opacity-60 w-full h-full flex flex-col  md:flex-col md:space-x-0 md:space-y-4 space-x-0 lg:flex-row lg:space-x-10 lg:p-10 md:p-5 p-2">
        <div className="w-full max-w-4xl  md:w-full lg:p-6 md:p-4 p-1">
          <div className="w-full lg:h-full md:h-full overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094013!2d144.95373531531568!3d-37.81627944202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f5f692defd!2sFederation%20Square!5e0!3m2!1sen!2str!4v1695670123456!5m2!1sen!2str"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form className="w-full max-w-lg md:max-w-full md:space-y-10 space-y-5 lg:space-y-10 p-6 font-thin">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px 4px rgba(255, 200, 180, 0.5)',
            }}
            style={{
              boxShadow: '0 4px 10px rgba(255, 200, 180, 0.1)',
            }}
          >
            <input
              type="text"
              id="name"
              placeholder="Adınız..."
              className="w-full p-2 border border-black bg-darkdark-gray bg-opacity-50 text-white"
              required
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px 4px rgba(255, 200, 180, 0.5)',
            }}
            style={{
              boxShadow: '0 4px 10px rgba(255, 200, 180, 0.1)',
            }}
          >
            <input
              type="email"
              id="email"
              placeholder="E-posta adresiniz..."
              className="w-full p-2 border border-black bg-darkdark-gray bg-opacity-50 text-white"
              required
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px 4px rgba(255, 200, 180, 0.5)',
            }}
            style={{
              boxShadow: '0 4px 10px rgba(255, 200, 180, 0.1)',
            }}
          >
            <input
              type="text"
              id="Konu"
              placeholder="Konu..."
              className="w-full p-2 border border-black bg-darkdark-gray bg-opacity-50 text-white"
              required
            />
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px 4px rgba(255, 200, 180, 0.5)',
            }}
            style={{
              boxShadow: '0 4px 10px rgba(255, 200, 180, 0.1)',
            }}
          >
            <textarea
              id="message"
              rows="5"
              placeholder="Mesajınız..."
              className="w-full p-2  bg-darkdark-gray bg-opacity-50 text-white"
              required
            ></textarea>
          </motion.div>
          <button
            type="submit"
            className="w-full rounded-xl bg-darkdark-gray text-white font-thin py-2 border-black border-2 hover:bg-black hover:text-gray"
            style={{
              boxShadow: '0 4px 10px rgba(255, 200, 180, 0.1)',
            }}
          >
            GÖNDER
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default page
