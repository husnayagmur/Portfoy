"use client"
import Link from 'next/link';
import React from 'react';
import '../styles/global.css';
import { motion } from "framer-motion";
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className=" lg:static lg:h-full lg:w-1/6 lg:border-r lg:border-t lg:border-b md:border-b-2 border-b-2 lg:border-gray-300 text-light-light-gray lg:flex lg:flex-col lg:justify-center lg:items-center lg:space-y-8 lg:font-lora lg:border-green lg:bg-darkdark-gray lg:bg-opacity-50 
    md:fixed md:top-0 md:w-full md:h-20 md:flex md:flex-row md:justify-around md:items-center md:bg-black
    fixed top-0 w-full h-16 flex flex-row justify-around items-center bg-black">

      <motion.div
        className="py-5 flex justify-center items-center lg:space-x-2 md:space-x-2 relativ hover:bg-opacity-35"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <FaHome size={22} className='md:block lg:block hidden' />
        <Link href="/user/home" className="lg:text-2xl md:text-2xl text-md font-medium">
          Anasayfa
        </Link>
      </motion.div>

      <motion.div
        className="py-5 flex justify-center items-center lg:space-x-2 md:space-x-2  relative "
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <FaProjectDiagram size={22} className='md:block lg:block hidden' />
        <Link href="/user/projects" className="lg:text-2xl md:text-2xl text-md font-medium">
          Projelerim
        </Link>
      </motion.div>

      <motion.div
        className="py-5 flex justify-center items-center lg:space-x-2 md:space-x-2  relative "
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <FaUser size={20} className='md:block lg:block hidden' />
        <Link href="/user/about" className="lg:text-2xl md:text-2xl text-md font-medium">
          Hakkımda
        </Link>
      </motion.div>

      <motion.div
        className="py-5 flex items-center lg:space-x-2 md:space-x-2  justify-center relative "
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        <FaEnvelope size={20} className='md:block lg:block hidden' />
        <Link href="/user/contact" className="lg:text-2xl md:text-2xl text-md font-medium">
          İletişim
        </Link>
      </motion.div>
    </div>
  );
};



export default Navbar;

