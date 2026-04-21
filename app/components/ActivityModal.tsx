"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  LucideIcon,
  MapPin,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    fullDescription: string;
    features: string[];
    participants: string;
    duration: string;
    location: string;
    color: string;
    image: string;
    images: string[];
  } | null;
}

export default function ActivityModal({
  isOpen,
  onClose,
  activity,
}: ActivityModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!activity) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === activity.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? activity.images.length - 1 : prev - 1,
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Header avec couleur de l'activité */}
              <div className={`${activity.color} p-8 relative`}>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  aria-label="Fermer"
                >
                  <X className="text-white" size={24} />
                </button>

                <div className="flex items-center gap-6">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm"
                  >
                    <activity.icon size={64} className="text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h2 className="text-4xl font-black text-white mb-2">
                      {activity.title}
                    </h2>
                    <p className="text-white/90 text-xl font-semibold">
                      {activity.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenu scrollable */}
              <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-8">
                {/* Infos rapides */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Users className="text-orange-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">
                        Participants
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {activity.participants}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Clock className="text-cyan-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">
                        Durée
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {activity.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <MapPin className="text-purple-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">
                        Lieu
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {activity.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description complète */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {activity.fullDescription}
                  </p>
                </div>

                {/* Caractéristiques */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    Points forts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activity.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle
                          className="text-green-500 flex-shrink-0 mt-1"
                          size={20}
                        />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {activity.images && activity.images.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-gray-900 mb-4">
                      {activity.images.length > 1 ? "Galerie Photos" : "Photo"}
                    </h3>

                    {/* Image principale */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-4 group">
                      <Image
                        src={activity.images[currentImageIndex]}
                        alt={`${activity.title} - Photo ${currentImageIndex + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="rounded-2xl"
                      />

                      {/* Boutons de navigation si plusieurs images */}
                      {activity.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Image précédente"
                          >
                            <ChevronLeft size={24} />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                            aria-label="Image suivante"
                          >
                            <ChevronRight size={24} />
                          </button>

                          {/* Indicateur de position */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {activity.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  index === currentImageIndex
                                    ? "bg-white w-8"
                                    : "bg-white/50 hover:bg-white/75"
                                }`}
                                aria-label={`Aller à la photo ${index + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Miniatures si plusieurs images */}
                    {activity.images.length > 1 && (
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {activity.images.map((img, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`relative flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                              index === currentImageIndex
                                ? "border-orange-500 scale-105"
                                : "border-gray-200 hover:border-orange-300"
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`${activity.title} - Miniature ${index + 1}`}
                              fill
                              style={{ objectFit: "cover" }}
                              sizes="96px"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="flex-1 py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl text-center hover:shadow-xl transition-all"
                  >
                    Réserver cette activité
                  </a>
                  <a
                    href="#forfaits"
                    onClick={onClose}
                    className="flex-1 py-4 px-6 bg-white border-2 border-gray-300 text-gray-900 font-bold rounded-xl text-center hover:border-orange-500 transition-all"
                  >
                    Voir les forfaits
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
