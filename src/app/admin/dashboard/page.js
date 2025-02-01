"use client"
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaProjectDiagram, FaEnvelope, FaCogs, FaCog } from 'react-icons/fa';  // İkonlar
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Dashboard() {
  const data = {
    labels: ['Proje', 'Mesaj', 'Beceri', 'Öneriler', 'Aktiviteler'],
    datasets: [
      {
        data: [200, 150, 100, 75, 50],
        backgroundColor: ['#FF5733', '#FF8D1A', '#FFC300', '#0074D9', '#FFEB3B'],
        hoverBackgroundColor: ['#FF5733', '#FF8D1A', '#FFC300', '#0074D9', '#FFEB3B'],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        backgroundColor: '#333',
        titleColor: '#fff',
        bodyColor: '#fff',
      },
      legend: {
        position: 'top',
        labels: {
          color: '#333', 
        },
      },
    },
  };
  const countUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", stiffness: 50 } },
  };

  return (
    <div className="p-5 bg-black min-h-screen text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-7">
        <motion.div
          className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg shadow-lg flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={countUp}
        >
          <div className="flex flex-row items-center space-x-2">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <FaProjectDiagram className="text-red-500 text-3xl" /> 
            </div> 
            <div className="text-2xl text-white">128</div>
            <div className="text-2xl text-white">Proje</div>
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg shadow-lg flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={countUp}
        >
          <div className="flex flex-row items-center  space-x-2">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <FaEnvelope className="text-blue-500 text-3xl" /> 
            </div>
            <div className="text-2xl  text-white">50</div>
            <div className="text-2xl text-white">Mesaj</div>
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg shadow-lg flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={countUp}
        >
          <div className="flex flex-row items-center space-x-2">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
              <FaCog className="text-red-500 text-3xl" />
            </div> 
            <div className="text-2xl text-white">12</div>
            <div className="text-2xl text-white">Beceri</div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center bg-white">
          <h3 className="text-2xl font-semibold mb-4 text-black">Toplam Projeler</h3>
          <div className="w-64 h-64">
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center bg-white">
          <h3 className="text-2xl font-semibold mb-4 text-black">Mesajlar ve Aktiviteler</h3>
          <div className="w-64 h-64">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-3 px-6 rounded-lg shadow-lg mt-7 bg-white">
        <h3 className="text-2xl font-semibold mb-2 text-black">Son Aktiviteler</h3>
        <ul className="space-y-4 text-black">
          <li className="flex items-center space-x-3">
          <span className="bg-red-500 text-white w-7 h-7 flex justify-center items-center rounded-full">1</span>
            <span>Yeni proje başlatıldı (1 Şubat 2025)</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-blue-500 text-white  w-7 h-7 flex justify-center items-center rounded-full">2</span>
            <span>Yeni mesaj gönderildi (10 Şubat 2025)</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="bg-orange-500 text-white w-7 h-7 flex justify-center items-center rounded-full">3</span>
            <span>Beceri güncellemeleri yapıldı (20 Şubat 2025)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
