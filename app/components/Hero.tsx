"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6"
            >
              <Sparkles className="text-orange-500" size={18} />
              <span className="text-sm font-semibold text-gray-700">
                Partageons le jeu
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              Des activités{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-cyan-500">
                inoubliables
              </span>{" "}
              pour tous !
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Archery Tag, Gellyball, Cornhole, Lancée de Hache... Vivez des
              moments uniques avec F2G !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.a
                href="#forfaits"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                Voir les forfaits
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border-2 border-gray-300 hover:border-orange-500 hover:bg-gray-50 transition-all"
              >
                Demander un devis
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-orange-500 mb-1">
                  5
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Activités
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-cyan-500 mb-1">3</div>
                <div className="text-sm text-gray-600 font-medium">
                  Forfaits
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-purple-500 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-medium">Fun</div>
              </div>
            </div>
          </motion.div>

          {/* Logo avec effets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Cercle décoratif arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-yellow-50 to-cyan-100 rounded-full blur-3xl opacity-40 scale-110"></div>

              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="relative w-full aspect-square z-10"
              >
                <Image
                  src="/img/logo.png"
                  alt="F2G - Funny Gellyball Game"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Badge Target flottant */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 hidden lg:block"
              >
                <Target className="text-orange-500" size={36} />
              </motion.div>

              {/* Badge Users flottant */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 hidden lg:block"
              >
                <Users className="text-cyan-500" size={36} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
