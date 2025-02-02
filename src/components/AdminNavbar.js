"use client"
import Link from 'next/link';
import { FaChartPie, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaUsers, FaBell, FaSearch, FaCog, FaHeadset, FaSignOutAlt, FaKey } from 'react-icons/fa';

const AdminNavbar = () => {
    return (
        <div className="max-w-7xl mx-auto h-full w-1/6 bg-gray-900 text-white flex flex-col shadow-xl items-center justify-center fixed border-r-2 border-yellow bg-black">
          <nav className="flex flex-col gap-5 text-left">
          <div className="w-full p-2 flex items-center bg-darkdark-gray rounded-lg">
              <FaSearch size={27} className="text-light-gray pr-2" />
              <input
                type="text"
                placeholder="Arama..."
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <Link href="/admin/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition">
              <FaChartPie size={22} className="text-red-400" />
              <span className="text-left">Genel İstatistikler</span>
            </Link>
            <Link href="/admin/project-management" className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition">
              <FaProjectDiagram size={22} className="text-red-400" />
              <span className="text-left">Proje Yönetimi</span>
            </Link>
            <Link href="/admin/about-management" className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition">
              <FaInfoCircle size={22} className="text-red-400" />
              <span className="text-left">Hakkımda Yönetimi</span>
            </Link>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition cursor-pointer">
              <FaEnvelope size={22} className="text-red-400" />
              <span className="text-left">İletişim Yönetimi</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition cursor-pointer">
              <FaUsers size={22} className="text-red-400" />
              <span className="text-left">Kullanıcı Yönetimi</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition cursor-pointer">
              <FaBell size={22} className="text-red-400" />
              <span className="text-left">Bildirimler</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition cursor-pointer">
              <FaCog size={22} className="text-red-400" />
              <span className="text-left">Ayarlar</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition cursor-pointer">
              <FaHeadset size={22} className="text-red-400" />
              <span className="text-left">Destek</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-darkdark-gray hover:text-white transition cursor-pointer">
              <FaSignOutAlt size={22} className="text-red-400" />
              <span className="text-left">Çıkış Yap</span>
            </div>
          </nav>
        </div>
    
      );
}

export default AdminNavbar
