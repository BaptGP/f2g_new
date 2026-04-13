"use client";

import { motion } from "framer-motion";
import { Camera, Mail, Phone, Share2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/img/logo.png"
                alt="F2G Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Funny Gellyball Game - Partageons le jeu
            </p>
            <p className="text-gray-400 text-sm">
              Des activités de loisirs pour tous, partout et à tout moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#accueil"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#activites"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Activités
                </a>
              </li>
              <li>
                <a
                  href="#offres"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Nos Offres
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-cyan-400" />
                <span className="text-gray-400">contact@f2g-game.fr</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-500" />
                <span className="text-gray-400">06 XX XX XX XX</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors"
              >
                <Share2 size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <Camera size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} F2G - Funny Gellyball Game. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
