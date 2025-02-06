"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const skills = [
  { name: "Python", value: 35,id:"1" },
  { name: "JavaScript", value: 50,id:"2" },
  { name: "React", value: 55,id:"3" },
  { name: "Next.js", value: 60,id:"4" },
  { name: "Java", value: 50,id:"5" },
  { name: "ASP.NET", value: 20 ,id:"6"},
  { name: "C#", value: 30,id:"7" },
  { name: "SQL", value: 60,id:"8" },
  { name: "TailwindCSS", value: 60,id:"9" },
  { name: "C++", value: 20,id:"10" },
];
const certificates = [
  {
    title: "Java Geliştirme Sertifikası",
    description: "Java dilinde yazılım geliştirme, nesne yönelimli programlama, algoritmalar ve veri yapıları üzerine eğitim alındı.",
    image: "/images/java101.jpg",
    id:"1"
  },
  {
    title: "Java Programlama Sertifikası",
    description: "Java dilinde temel programlama becerileri, sınıflar, metotlar ve veri yapıları hakkında derinlemesine bilgi edinildi.",
    image: "/images/java201.jpg",
    id:"2"
  },
  {
    title: "Java İleri Seviye Sertifikası",
    description: "Java dilinde ileri seviye konular, performans optimizasyonu ve Java Framework'leri üzerine eğitim alındı.",
    image: "/images/java301.jpeg",
    id:"3"
  },
  {
    title: "Python Programlama Sertifikası",
    description: "Python dilinde temel programlama konuları ve basit algoritmalar üzerine eğitim alındı.",
    image: "/images/python.jpg",
    id:"4"
  },
  {
    title: "Veri Bilimi ve Yapay Zekâya Giriş Sertifikası",
    description: "Veri analizi, makine öğrenimi, veri görselleştirme ve temel yapay zekâ algoritmaları hakkında temel bilgiler edinildi.",
    image: "/images/veriBilimi.jpg",
    id:"5"
  }
];
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };
  return (
    <div className=" bg-gray-900 max-w-7xl w-full h-full mx-auto  grid grid-row-2 gap-5">
      <div className="text-light-light-gray text-center bg-black">
        <h1 className="text-2xl font-lora font-semibold lg:py-0 md:py-2 sm:py-2">BECERİLERİM</h1>
        <div className="grid lg:grid-cols-5 grid-cols-3 gap-4 lg:py-2 md:py-4 ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
              <motion.div
                className="relative"
                style={{
                  width: "10vw",
                  height: "7vw",
                }}
              >
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full  "
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    stroke="white"
                    strokeWidth="2"
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
                      <stop offset="0%" stopColor="yellow" />
                      <stop offset="50%" stopColor="yellow" />
                      <stop offset="100%" stopColor="black" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 lg:text-[18px] text-[9px] md:text-[15px] font-medium font-lora">
                  {skill.value}%
                </span>
              </motion.div>
              <p className="font-lora font-semibold lg:text-[18px] md:text-[14px] text-[10px] text-light-light-gray">{skill.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="bg-black px-4">
          <div className="text-light-light-gray text-2xl font-lora font-semibold text-center py-4">
            SERTİFİKALARIM
          </div>
          <div className="lg:max-w-4xl md:max-w-2xl max-w-xs mx-auto pb-4">
            <Slider {...settings}>
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 bg-gradient-to-r from-black via-yellow to-black rounded-lg lg:h-56 md:h-60 h-52"
                >
                  <div className="flex justify-center w-full">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={200}
                      height={150}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <h3 className="lg:text-lg md:text-md text-sm font-semibold text-black mt-2">{cert.title}</h3>
                  <p className="text-sm text-darkdark-gray px-20 mt-2 lg:block md:block hidden">{cert.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
