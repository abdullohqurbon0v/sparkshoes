"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Главная", href: "/" },
  { name: "Магазин", href: "/shop" },
  { name: "О нас", href: "/about" },
  { name: "Контакты", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white sticky top-0 z-50 shadow-xl border-b border-blue-300/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className=" px-3 py-1 rounded-lg"
          >
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200"
            >
              StoreBlue
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <motion.div
              variants={containerVariants}
              className="flex items-center space-x-4"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-sm font-semibold  hover:text-cyan-100 transition-all duration-300 border border-blue-400/20"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-blue-700/30 cursor-pointer hover:bg-blue-700/50 hover:text-white text-white border border-blue-300/30"
              >
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </motion.div>
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-blue-700/30 hover:bg-blue-700/50 text-white"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-gradient-to-b from-blue-600 to-cyan-600 text-white w-[260px] border-l border-blue-300/20"
                >
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col space-y-5 mt-6"
                  >
                    {navItems.map((item) => (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-3 rounded-lg text-base font-medium bg-blue-700/20 hover:bg-blue-700/40 hover:text-cyan-100 transition-all duration-300 border border-blue-400/20"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
