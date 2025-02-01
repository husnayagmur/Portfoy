"use client"
import { motion } from "framer-motion";
import Image from "next/image";
export const skills = [
  { name: "Python", value: 35 },
  { name: "JavaScript", value: 50 },
  { name: "React", value: 55 },
  { name: "Next.js", value: 60 },
  { name: "Java", value: 50 },
  { name: "ASP.NET", value: 20 },
  { name: "C#", value: 30 },
  { name: "SQL", value: 60 },
  { name: "TailwindCSS", value: 60 },
  { name: "C++", value: 20 },
];
const certificates = [
  {
    title: "Java Geliştirme Sertifikası",
    description: "Java dilinde yazılım geliştirme, nesne yönelimli programlama, algoritmalar ve veri yapıları üzerine kapsamlı eğitim alındı.",
    image: "/images/java101.jpg",
  },
  {
    title: "Java Programlama Sertifikası",
    description: "Java dilinde temel programlama becerileri, sınıflar, metotlar ve veri yapıları hakkında derinlemesine bilgi edinildi.",
    image: "/images/java201.jpg",
  },
  {
    title: "Java İleri Seviye Sertifikası",
    description: "Java dilinde ileri seviye konular, veri yönetimi, performans optimizasyonu ve Java Framework'leri üzerine eğitim alındı.",
    image: "/images/java301.jpeg",
  },
  {
    title: "Python Programlama Sertifikası",
    description: "Python dilinde temel programlama konuları ve basit algoritmalar üzerine eğitim alındı.",
    image: "/images/python.jpg",
  },  
  {
    title: "Veri Bilimi ve Yapay Zekâya Giriş Sertifikası",
    description: "Veri analizi, makine öğrenimi, veri görselleştirme ve temel yapay zekâ algoritmaları hakkında temel bilgiler edinildi.",
    image: "/images/veriBilimi.jpg",
  }
];
export default function Home() {
  return (
    <div className=" bg-gray-900 max-w-7xl w-full h-full mx-auto grid grid-row-2 gap-5">
      <div className="text-light-light-gray text-center bg-black">
        <h1 className="text-2xl font-lora font-thin">BECERİLERİM</h1>
        <div className="grid lg:grid-cols-5 grid-cols-5 gap-4 py-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
              {/* Dairesel Gösterge */}
              <motion.div
                className="relative"
                style={{ width: 120, height: 100 }}
              >
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    stroke="gray"
                    strokeWidth="1"
                    fill="none"
                  />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="15"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="94.24777960769379"
                    strokeDashoffset={94.24777960769379 - (94.24777960769379 * skill.value) / 100}
                    initial={{ strokeDashoffset: 94.24777960769379 }}
                    animate={{ strokeDashoffset: 94.24777960769379 - (94.24777960769379 * skill.value) / 100 }} 
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>
                <svg>
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="brown" />
                      <stop offset="50%" stopColor="gray" />
                      <stop offset="100%" stopColor="red" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-medium font-lora">
                  {skill.value}%
                </span>
              </motion.div>
              <p className="font-lora font-semibold text-sm text-light-light-gray">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="bg-black px-4 ">

          <div className="text-light-light-gray text-2xl font-lora font-thin text-center py-3 ">
            SERTİFİKALARIM
          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 lg:pr-2 pb-5 h-full ">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow rounded-lg shadow-lg transform hover:scale-110 hover:duration-300 lg:px-1 py-1 opacity-70 hover:opacity-100 transition-opacity "
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={200}
                  height={200}
                  className="opacity-80 p-2"
                />
                <div>
                <h3 className="text-sm lg:py-1 font-semibold text-gray ">{cert.title}</h3>
                <p className="text-xs text-center text-black ">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
