"use client";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
export default function RootLayout({ children }) {
  const pathname = usePathname();
  // Eğer admin URL'sindeysek, bu layout'u kullanma
  if (pathname.startsWith('/admin')) {
    return children;
  }
  return (
    <html lang="en">
      <body className="lg:flex flex flex-row h-screen  overflow-hidden lg:py-10 bg-black" style={{
          backgroundImage: "url('/images/bg-Image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", 
        }}>
        <Navbar className='lg:mb-0' />
        <motion.div
          className="flex-1 lg:ml-20 lg:mt-0 mt-20"
          initial={{ x: "100%" }} 
          animate={{ x: 0 }} 
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }} 
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
}
