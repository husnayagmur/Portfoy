"use client"; // Bu bileşenin bir Client Component olduğunu belirtiyor.
import AdminNavbar from "@/components/AdminNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en"> 
      <body>
        <div className="flex h-screen overflow-hidden bg-black"
        >
          <AdminNavbar/>
          <AnimatePresence mode="wait">
          <motion.div
          className="flex-1 lg:ml-64  lg:mt-0 mt-10 md:mt-14"
          initial={{ x: "100%" }} 
          animate={{ x: 0 }} 
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }} 
        >
          {children}
        </motion.div>
          </AnimatePresence>
        </div>
      </body>
    </html>
  );
}
