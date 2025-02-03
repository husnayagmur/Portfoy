'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../../../styles/global.css';
import Link from 'next/link';
import { TbArrowRightDashed } from "react-icons/tb";

const projects = [
  {
    title: 'Film Uygulaması ',
    description: 'Film izleme, keşfetme ve detaylarına ulaşma imkanı sunan bir uygulamadır. Kullanıcılar popüler filmleri inceleyebilir, açıklamalarını okuyabilir.',
    image: '/images/movieImage.jpg',
    link: '/user/projects',
  },
  {
    title: 'Trendyol E-Ticaret Platformu Klonu ',
    description: 'Bu proje, bir e-ticaret platformunun (Trendyol) filtreleme sayfası klonudur. Kullanıcıların ürünleri filtreleyip sıralayabildiği dinamik bir arayüz tasarlandı.',
    image: '/images/trendyolImage.jpg',
    link: '/user/projects',
  },
  {
    title: 'Hava Durumu Takip Uygulaması',
    description: 'Bu uygulama, kullanıcılara günlük hava durumu verilerini anlık olarak sunarak, yerel hava koşullarını kolayca öğrenmelerine olanak tanır.',
    image: '/images/weatherImage.jpg',
    link: '/user/projects',
  },
  {
    title: 'Döviz Kuru Takibi',
    description: 'Güncel döviz kuru bilgilerini anlık olarak takip edin ve dövizler arası dönüşüm işlemlerini kolayca yapın.',
    image: '/images/currencyImage.jpg',
    link: '/user/projects',
  }
];

const Page = () => {
  return (
    <motion.div
      className="flex h-full w-full max-w-7xl mx-auto "
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 flex flex-col h-full text-light-light-gray items-end space-y-4 font-lora">
        <div className="flex justify-between w-full flex-row">
          <div className="w-full">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold lg:py-8 py-3 md:py-6 text-center">
              Merhaba, ben Hüsna Yağmur.
            </h1>
            <p className="lg:text-[20px] md:text-[20px] text-[14px] font-medium text-left md:px-6 px-1 lg:px-4">
              Yazılım geliştirme alanında kendimi geliştirmeye hevesli, yenilikçi çözümler üretmeye odaklanan bir yazılımcıyım. Necmettin Erbakan Üniversitesi'nde bilgisayar mühendisliği eğitimi alıyor, bilgi ve becerilerimi sürekli olarak genişletmeye özen gösteriyorum. Web geliştirme alanına ilgi duyuyor, modern teknolojileri takip ederek kullanıcı dostu ve sürdürülebilir projeler geliştirmeyi hedefliyorum.
            </p>
          
            <p className="lg:text-[20px] md:text-[20px] text-[12px] font-medium text-left md:px-6 px-1 lg:px-4">
              Sürekli öğrenme prensibiyle her gün yeni bilgiler edinerek projelerimde daha etkili çözümler üretiyorum. Hedefim, yalnızca bir yazılımcı olarak değil, aynı zamanda teknolojiyle topluma değer katan bir birey olarak kendimi geliştirmek. Gelecekte daha büyük projelerde yer alarak, bilgi ve deneyimlerimi faydalı ürünlere dönüştürmeyi amaçlıyorum.
            </p>
            <Link href={"/user/about"}>
              <button className='rounded-xl lg:px-12 md:px-12 px-4 lg:py-3 md:py-3 py-1 border lg:mb-0 lg:mt-5 lg:ml-5 md:ml-7 ml-1 md:mt-8 mt-4 md:mb-4 bg-black hover:bg-gray hover:text-darkdark-gray border-gray font-bold lg:text-xl md:text-xl text-xs '>
                Daha Fazlası
              </button>
            </Link>
          </div>
          <div>
            <Image
              src="/images/ben.png"
              alt="My image"
              width={450}
              height={450}
              className='lg:rounded-md px-4 bg-black hidden lg:block'
            />
          </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2  lg:gap-3 md:gap-4 gap-2 w-full lg:2/4 md:h-2/5 h-2/5 px-2 md:px-7'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-span-1  relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 15px 4px rgba(255, 200, 180, 0.5)',
              }}
              transition={{
                type: 'easeInOut',
                duration: 0.3,
              }}
              style={{
                boxShadow: '0 0 15px 4px rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                className="relative h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <motion.div
                  className="absolute inset-0 flex flex-col lg:pb-4 md:pb-8 pb-8 bg-black opacity-0 text-medium-gray items-center justify-center"
                  whileHover={{ opacity: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h1 className="font-semibold py-1">{project.title}</h1>
                  <p className='font-thin text-xs text-center lg:block hidden'>{project.description}</p>
                </motion.div>
                <div className="absolute bottom-0 w-full bg-darkdark-gray h-8 border-white text-white flex items-center justify-end px-1 text-xs">
                  <Link href={project.link}>Detaylar</Link>
                  <TbArrowRightDashed size={18} className="mt-1 pl-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
