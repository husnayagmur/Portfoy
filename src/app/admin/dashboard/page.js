"use client"
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaProjectDiagram, FaEnvelope, FaCogs, FaCog } from 'react-icons/fa'; 
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
    <div className="lg:p-5 md:p-1.5 py-5 px-2 bg-black min-h-screen text-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 lg:gap-5 gap-3 lg:mb-7 mb-5">
        <motion.div
          className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg shadow-lg flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={countUp}
        >
          <div className="flex flex-row items-center space-x-2 ">
          <div className="flex items-center justify-center lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 bg-white rounded-full">
              <FaProjectDiagram className="text-red-500 lg:text-3xl md:text-2xl text-2xl" /> 
            </div> 
            <div className="lg:text-2xl md:text-xl text-xl text-white">128</div>
            <div className="lg:text-2xl md:text-xl text-xl text-white">Proje</div>
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-teal-500 p-2 rounded-lg shadow-lg flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={countUp}
        >
          <div className="flex flex-row items-center  space-x-2">
          <div className="flex items-center justify-center lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 bg-white rounded-full">
              <FaEnvelope className="text-blue-500 lg:text-3xl md:text-2xl text-2xl" /> 
            </div>
            <div className="lg:text-2xl md:text-xl text-xl text-white">50</div>
            <div className="lg:text-2xl md:text-xl text-xl text-white">Mesaj</div>
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-red-500 to-orange-500 p-2 rounded-lg shadow-lg flex items-center justify-center"
          initial="hidden"
          animate="visible"
          variants={countUp}
        >
          <div className="flex flex-row items-center space-x-2">
          <div className="flex items-center justify-center lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 bg-white rounded-full">
              <FaCog className="text-red-500 lg:text-3xl md:text-2xl text-2xl" />
            </div> 
            <div className="lg:text-2xl md:text-xl text-xl text-white">12</div>
            <div className="lg:text-2xl md:text-xl text-xl text-white">Beceri</div>
          </div>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-6">
        <div className="bg-gray-100 lg:p-6 p-3 rounded-lg shadow-lg flex flex-col items-center bg-white">
          <h3 className="md:text-2xl text-xl font-semibold lg:mb-4 text-black">Toplam Projeler</h3>
          <div className="lg:w-64 md:w-60 md:h-60 w-52 h-52 lg:h-64">
            <Pie data={data} options={options} />
          </div>
        </div>
        <div className="bg-gray-100 lg:p-6 p-3 rounded-lg shadow-lg flex flex-col items-center bg-white">
          <h3 className="md:text-2xl text-xl font-semibold lg:mb-4 text-black">Mesajlar ve Aktiviteler</h3>
          <div className="lg:w-64 md:w-60 md:h-60 w-52 h-52 lg:h-64">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-3 lg:px-6 px-4 rounded-lg shadow-lg lg:mt-7 mt-6 bg-white flex flex-col lg:items-start items-center">
        <h3 className="md:text-2xl  text-xl font-semibold mb-2 text-black">Son Aktiviteler</h3>
        <ul className="space-y-4 text-black">
          <li className="flex items-center md:space-x-3 space-x-2">
          <span className="bg-red-500 text-white w-7 h-7 flex justify-center items-center rounded-full">1</span>
            <span>Yeni proje başlatıldı (1 Şubat 2025)</span>
          </li>
          <li className="flex items-center lg:space-x-3 space-x-2">
            <span className="bg-blue-500 text-white  w-7 h-7 flex justify-center items-center rounded-full">2</span>
            <span>Yeni mesaj gönderildi (10 Şubat 2025)</span>
          </li>
          <li className="flex items-center lg:space-x-3 space-x-2">
            <span className="bg-orange-500 text-white w-7 h-7 flex justify-center items-center rounded-full">3</span>
            <span>Beceri güncellemeleri yapıldı (20 Şubat 2025)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
