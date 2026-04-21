"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Package, Zap } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Vous réservez",
    description:
      "Contactez-nous pour choisir vos activités, la date et le lieu. On s'adapte à vos contraintes et à la taille de votre groupe.",
    color: "from-orange-500 to-red-600",
    bgLight: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    number: "02",
    icon: Package,
    title: "On charge les caisses",
    description:
      "Pistolets gellyball, arcs, flèches, masques, protections, cibles... Tout le matériel est soigneusement rangé dans nos caisses de transport.",
    color: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    number: "03",
    icon: MapPin,
    title: "On vient chez vous",
    description:
      "Notre animateur se déplace avec tout le matériel. Jardin, salle des fêtes, terrain communal... On s'installe partout !",
    color: "from-cyan-500 to-teal-600",
    bgLight: "bg-cyan-50",
    border: "border-cyan-200",
  },
  {
    number: "04",
    icon: Zap,
    title: "C'est parti !",
    description:
      "On installe le terrain, on explique les règles et c'est parti pour 2h de fun et d'action garanties. On repart avec tout à la fin !",
    color: "from-green-500 to-emerald-600",
    bgLight: "bg-green-50",
    border: "border-green-200",
  },
];

const equipmentImages = [
  {
    src: "/img/equipment/IMG_0645.jpg",
    alt: "Lanceur paintball et munitions",
  },
  { src: "/img/gelly/IMG_0671.jpg", alt: "Pistolets gellyball et masques" },
  {
    src: "/img/archery/IMG_0744.jpg",
    alt: "Arcs et flèches archery tag",
  },
  { src: "/img/equipment/IMG_0690.jpg", alt: "Haches de lancer et cibles" },
];

export default function HowItWorksHome() {
  return (
    <section id="a-domicile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 font-bold rounded-full text-sm uppercase tracking-wide mb-4">
            Service à domicile
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            On vient chez vous !
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pas besoin de vous déplacer. On charge tout le matériel dans nos
            caisses et on débarque chez vous pour une animation inoubliable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative ${step.bgLight} border-2 ${step.border} rounded-3xl p-6 overflow-hidden`}
            >
              {/* Numéro en arrière-plan */}
              <span className="absolute -top-2 -right-1 text-8xl font-black text-gray-100 select-none leading-none">
                {step.number}
              </span>

              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} mb-4 shadow-lg`}
              >
                <step.icon size={28} className="text-white" />
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-2 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>

              {/* Flèche entre les étapes */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-gray-300 text-2xl font-black">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Galerie d'équipement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-black text-gray-900 text-center mb-8">
            Le matériel qu&apos;on emmène chez vous
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipmentImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold leading-tight">
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bannière CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-10 text-center shadow-2xl"
        >
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
            Aucun déplacement de votre côté
          </p>
          <p className="text-3xl md:text-4xl font-black text-white mb-6">
            Jardin, salle des fêtes, terrain vague...{" "}
            <span className="text-orange-400">On s&apos;adapte !</span>
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xl rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Demander un devis à domicile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
