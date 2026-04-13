"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "#accueil" },
    { name: "Activités", href: "#activites" },
    { name: "Forfaits", href: "#forfaits" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#accueil"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
              <Image
                src="/img/logo.png"
                alt="F2G Logo"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML =
                      '<div class="text-3xl font-black"><span class="text-orange-500">F</span><span class="text-green-500">2</span><span class="text-cyan-500">G</span></div>';
                  }
                }}
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-xs font-bold text-gray-900 tracking-wide">
                FUNNY GELLYBALL GAME
              </div>
              <div className="text-xs text-gray-500 font-medium">
                Partageons le jeu
              </div>
            </div>
          </motion.a>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all font-semibold text-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 group-hover:w-3/4 transition-all duration-300"></span>
              </motion.a>
            ))}

            {/* Bouton CTA */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm rounded-lg hover:shadow-lg hover:scale-105 transition-all"
            >
              Devis gratuit
            </motion.a>
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all font-semibold"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg text-center mt-4"
              >
                Devis gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
