"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Yeni ekleme

export const items = [
  {
    imageSrc: "/images/pizza-web.jpg",
    alt: "Pizza Image",
    description: "Kullanıcıların kolayca menüye göz atıp sipariş verebileceği, modern ve kullanıcı dostu bir tasarıma sahip bir platformdur.",
    category: "Web Tasarımı",
    slug: "pizza-web",
  },
  {
    imageSrc: "/images/currency-app.jpg",
    alt: "Currency App Image",
    description: "Kullanıcıların döviz kurları hakkında hızlı ve doğru bilgilere ulaşmasını sağlayan pratik bir mobil uygulamadır.",
    category: "Mobil Uygulama",
    slug: "currency-app",
  },
  {
    imageSrc: "/images/movie-app.jpg",
    alt: "Movie App Image",
    description: "Kullanıcıların filmleri açıklamalarıyla birlikte keşfederek izlemek istedikleri filmleri kolayca bulabilecekleri bir uygulamadır.",
    category: "Mobil Uygulama",
    slug: "movie-app",
  },
  {
    imageSrc: "/images/train-ticket-app.jpg",
    alt: "Train Ticket App Image",
    description: "Kullanıcıların kolayca tren biletlerini arayarak satın alabilecekleri, pratik ve kullanıcı dostu bir mobil uygulamadır.",
    category: "Mobil Uygulama",
    slug: "train-ticket-app",
  },
  {
    imageSrc: "/images/movie-app2.jpg",
    alt: "Movie App Image",
    description: "Kullanıcıların filmleri açıklamalarıyla birlikte keşfederek izlemek istedikleri filmleri kolayca bulabilecekleri bir uygulamadır.",
    category: "Mobil Uygulama",
    slug: "movie-app2",
  },
  {
    imageSrc: "/images/kisisel-web.jpg",
    alt: "Kişisel Web Image",
    description: "Bilgilerim, projelerim ve iletişim bilgilerim gibi çeşitli içerikleri şık bir tasarım ile  ziyaretçilere kendimi tanıtmamı sağlayan bir platformdur.",
    category: "Web Tasarımı",
    slug: "kisisel-web",
  },
];

const Page = () => {
  const router = useRouter(); // useRouter hook'unu kullan
  const categories = ["Tüm Projeler", ...new Set(items.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("Tüm Projeler");

  const filteredItems = items.filter(
    (item) => selectedCategory === "Tüm Projeler" || item.category === selectedCategory
  );

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full lg:mt-0 md:mt-5">
        <div className="mb-4 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`lg:px-6 md:px-6 px-3 py-2 border rounded-lg transition lg:text-[18px] md:text-[18px] text-xs ${
                selectedCategory === category ? "bg-gray-800 text-white" : "bg-white hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-3 lg:gap-6 md:gap-4 gap-4 lg:px-10">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.slug}
                className="relative overflow-hidden flex items-center justify-center h-44 rounded-lg shadow-lg cursor-pointer bg-gray-100 group lg:mr-0 mr-10 "
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.2 }}
                onClick={() => router.push(`/user/projects/${item.slug}`)} // Yönlendirme burada
              >
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-all duration-300 group-hover:opacity-40"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-sm font-thin text-gray">{item.description}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Page;
