"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChartPie, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaUsers, FaBell, FaSearch, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden text-white text-2xl p-2 fixed top-0 left-0 z-50 bg-gray-900 shadow-md w-full bg-black border-b cursor-pointer flex items-center justify-start">
        <FaBars size={28} onClick={() => setIsMenuOpen(true)} />
      </div>
      <div className={`bg-gray-900 text-white shadow-xl border-yellow bg-black fixed top-0 left-0 h-full z-50 w-64 
                       flex flex-col items-start p-4 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
                       lg:translate-x-0 transition-all duration-300 lg:w-1/6 lg:h-full lg:fixed lg:border-r-2`}>

        <button onClick={() => setIsMenuOpen(false)} className="lg:hidden text-medium-gray text-xl pb-2 self-end">
          <FaTimes />
        </button>
        <div className="flex items-center space-x-3 p-2 bg-darkdark-gray rounded-lg shadow-md w-full">
          <Image src="/images/husnaY.png" alt="My image" width={60} height={60} className='rounded-full border' />
          <div>
            <h2 className="text-md font-semibold text-white">Hüsna Yağmur</h2>
            <p className="text-[9px] text-gray-400">Yönetici | Son giriş: 1 saat önce</p>
          </div>
        </div>
        <div className="lg:w-full mt-2 p-2 bg-darkdark-gray rounded-lg flex ">
          <FaSearch className="text-light-gray pr-2 text-2xl" />
          <input type="text" placeholder="Arama..." className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none " />
        </div>
        <nav className="flex flex-col gap-3 mt-3 w-full ">
          <Link href="/admin/dashboard" className="flex items-center lg:p-5 p-3 gap-3 rounded-lg hover:bg-gray-800 transition">
            <FaChartPie className="text-red-400 md:text-2xl text-xl" />
            <span className="text-[16px]">Genel İstatistikler</span>
          </Link>
          <Link href="/admin/project-management" className="flex items-center lg:p-5 p-3 gap-3 rounded-lg hover:bg-gray-800 transition">
            <FaProjectDiagram className="text-red-400 md:text-2xl text-xl" />
            <span className="text-[16px]">Proje Yönetimi</span>
          </Link>
          <Link href="/admin/about-management" className="flex items-center lg:p-5 p-3 gap-3 rounded-lg hover:bg-gray-800 transition">
            <FaInfoCircle className="text-red-400 md:text-2xl text-xl" />
            <span className="text-[16px]">Hakkımda Yönetimi</span>
          </Link>
          <Link href="/admin/contact-management" className="flex items-center lg:p-5 p-3 gap-3 rounded-lg hover:bg-gray-800 transition">
            <FaEnvelope className="text-red-400 md:text-2xl text-xl" />
            <span className="text-[16px]">İletişim Yönetimi</span>
          </Link>
          <Link href="/admin/user-management" className="flex items-center lg:p-5 p-3 gap-3 rounded-lg hover:bg-gray-800 transition">
            <FaUsers className="text-red-400 md:text-2xl text-xl" />
            <span className="text-[16px]">Kullanıcı Yönetimi</span>
          </Link>
          <Link href="/admin/notifications" className="flex items-center lg:p-5 p-3 gap-3 rounded-lg hover:bg-gray-800 transition">
            <FaBell className="text-red-400 md:text-2xl text-xl" />
            <span className="text-[16px]">Bildirimler</span>
          </Link>
          <Link href="/" className="flex items-center lg:p-5 p-3 gap-3 rounded-lg hover:bg-gray-800 transition">
            <FaSignOutAlt className="text-red-400 md:text-2xl text-xl" />
            <span className="text-[16px]">Çıkış Yap</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default AdminNavbar;
