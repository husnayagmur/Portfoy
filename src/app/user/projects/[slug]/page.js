"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { items } from "../../projects/page";

export default function ProjectDetail({ params }) {
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; 

      if (resolvedParams) {
        const foundProject = items.find((p) => p.slug === resolvedParams.slug); 
        setProject(foundProject); 
      }
    };

    fetchParams(); 
  }, [params]); 

  if (!project) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-gray-500">
        <p className="text-2xl">Proje bulunamadı</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 border border-gray-500 text-gray-500 hover:bg-gray-800 hover:text-white transition rounded-lg"
        >
          Anasayfaya Dön
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white px-6 py-6">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>

      <motion.div
        className="relative w-full max-w-3xl h-64 md:h-96 overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
  src={project.imageSrc} 
  alt={project.title || "Proje görseli"} 
  layout="fill"
  objectFit="cover"
  className="grayscale hover:grayscale-0 transition-all duration-500"
/>

      </motion.div>

      <motion.p
        className="text-lg text-gray-400 mt-6 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {project.description}
      </motion.p>

      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-2 border border-gray-500 text-gray-500 hover:bg-white hover:text-black transition rounded-lg"
      >
        Geri Dön
      </button>
    </div>
  );
}
