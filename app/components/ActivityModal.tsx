'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

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
  } | null;
}

export default function ActivityModal({ isOpen, onClose, activity }: ActivityModalProps) {
  if (!activity) return null;

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
                      <div className="text-xs text-gray-500 font-medium">Participants</div>
                      <div className="text-sm font-bold text-gray-900">{activity.participants}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Clock className="text-cyan-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Durée</div>
                      <div className="text-sm font-bold text-gray-900">{activity.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <MapPin className="text-purple-500" size={24} />
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Lieu</div>
                      <div className="text-sm font-bold text-gray-900">{activity.location}</div>
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
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image placeholder - à remplacer par de vraies images */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">
                    Galerie
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`${activity.color} aspect-video rounded-xl flex items-center justify-center`}
                      >
                        <activity.icon size={48} className="text-white/50" />
                      </div>
                    ))}
                  </div>
                </div>

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
