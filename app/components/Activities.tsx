"use client";

import { motion } from "framer-motion";
import {
  Axe,
  CircleDot,
  Crosshair,
  Dices,
  Droplet,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ActivityModal from "./ActivityModal";

const activities = [
  {
    icon: Target,
    title: "Archery Tag",
    subtitle: "Un mélange de paintball et de tir à l'arc",
    description: "Adrénaline et précision garanties",
    image: "/img/archery/PHOTO-2025-06-08-12-36-39-Topaz-Gigapixel-2X.jpg",
    images: [
      "/img/archery/PHOTO-2025-06-08-12-36-39-Topaz-Gigapixel-2X.jpg",
      "/img/archery/PHOTO-2025-06-08-12-33-23-Topaz-Gigapixel-2X.jpg",
      "/img/archery/IMG_0744.jpg",
    ],
    fullDescription:
      "L'Archery Tag est un sport d'équipe spectaculaire qui combine le tir à l'arc et le paintball. Équipés d'arcs et de flèches à embout mousse sécurisées, les joueurs s'affrontent dans des parties stratégiques où précision et tactique sont de mise. Protégés par des masques, les participants vivent une expérience unique mêlant adrénaline et fair-play.",
    features: [
      "Équipement complet fourni (arcs, flèches, masques)",
      "Activité 100% sécurisée avec flèches en mousse",
      "Développe la précision et l'esprit d'équipe",
      "Accessible dès 10 ans",
      "Animateur diplômé inclus",
      "Plusieurs modes de jeu disponibles",
    ],
    participants: "8 à 20 joueurs",
    duration: "1h30 à 2h",
    location: "Intérieur ou extérieur",
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    position: "top-left",
  },
  {
    icon: Crosshair,
    title: "Jeu de Cornhole",
    subtitle: "Ambiance garantie",
    description: "pour petits et grands",
    image: "/img/cornhol/pexels-chris-f-38966-8854163.jpg",
    images: [
      "/img/cornhol/pexels-chris-f-38966-8854163.jpg",
      "/img/cornhol/pexels-magda-ehlers-pexels-6364228.jpg",
    ],
    fullDescription:
      "Le Cornhole est un jeu d'adresse convivial originaire des États-Unis. Le principe est simple : lancer des sacs de maïs sur une planche inclinée percée d'un trou. Points marqués selon la zone d'atterrissage ! Parfait pour créer une ambiance festive lors de vos événements, ce jeu accessible à tous garantit rires et compétition amicale.",
    features: [
      "Règles simples et accessibles à tous",
      "Parfait pour les événements familiaux",
      "Développe la précision et la concentration",
      "Matériel professionnel fourni",
      "Possibilité de tournois",
      "Adapté à tous les âges",
    ],
    participants: "2 à 8 joueurs",
    duration: "1h à 1h30",
    location: "Intérieur ou extérieur",
    color: "bg-gradient-to-br from-red-500 to-orange-600",
    position: "top-center",
  },
  {
    icon: Droplet,
    title: "Gellyball",
    subtitle: "Une nouvelle version du paintball...",
    description: "sans tâches ni douleur",
    image: "/img/gelly/IMG_0671.jpg",
    images: ["/img/gelly/IMG_0671.jpg"],
    fullDescription:
      "Le Gellyball révolutionne le paintball ! Avec des billes de gel biodégradables qui n'éclatent pas et ne tachent pas, cette activité offre toute l'action du paintball sans les inconvénients. Les billes se désintègrent au contact, ne laissant aucune trace. Idéal pour les plus jeunes ou ceux qui veulent éviter les bleus !",
    features: [
      "Billes de gel biodégradables",
      "Aucune douleur, aucune tache",
      "Respectueux de l'environnement",
      "Lanceurs légers et maniables",
      "Accessible dès 6 ans",
      "Nettoyage facile après la partie",
    ],
    participants: "8 à 24 joueurs",
    duration: "1h30 à 2h",
    location: "Intérieur ou extérieur",
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    position: "top-right",
  },
  {
    icon: Axe,
    title: "Lancée de Hache",
    subtitle: "Testez votre précision",
    description: "en toute sécurité",
    image: "/img/equipment/IMG_0690.jpg",
    images: ["/img/equipment/IMG_0690.jpg", "/img/equipment/IMG_0645.jpg"],
    fullDescription:
      "Devenez un véritable viking le temps d'une session ! La lancée de hache est une activité tendance qui allie concentration, précision et défoulement. Dans un cadre totalement sécurisé avec des cibles professionnelles, apprenez les techniques de lancer et défiez vos amis. Une expérience unique et mémorable !",
    features: [
      "Haches professionnelles équilibrées",
      "Cibles sécurisées et homologuées",
      "Initiation par un coach diplômé",
      "Environnement 100% sécurisé",
      "Compétitions et challenges",
      "Accessible dès 14 ans",
    ],
    participants: "4 à 12 joueurs",
    duration: "1h à 1h30",
    location: "Intérieur ou extérieur couvert",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    position: "bottom-left",
  },
  {
    icon: Zap,
    title: "Paintball Kid's",
    subtitle: "Un lanceur adapté aux enfants",
    description: "basse pression à ressort - Peinture à gogo !!",
    image:
      "/img/paintball/Firefly_Gemini Flash_enlève les obstacles derrière, bois, barrière, tonneau etc san toucher au sujet  79744.png",
    images: [
      "/img/paintball/Firefly_Gemini Flash_enlève les obstacles derrière, bois, barrière, tonneau etc san toucher au sujet  79744.png",
      "/img/paintball/Firefly_Gemini Flash_enlève les obstacles en fond, barrière, bois, tonneau mais ne touche pas au sujet  966502.png",
      "/img/paintball/IMG_0767.jpg",
    ],
    fullDescription:
      "Le Paintball Kid's est spécialement conçu pour les plus jeunes ! Avec des lanceurs à basse pression et des billes adaptées, les enfants découvrent le plaisir du paintball en toute sécurité. Scénarios ludiques, équipement adapté et encadrement renforcé pour une première expérience inoubliable !",
    features: [
      "Lanceurs basse pression adaptés",
      "Billes plus petites et moins impactantes",
      "Masques de protection intégrale",
      "Scénarios ludiques et éducatifs",
      "Encadrement renforcé",
      "Accessible dès 8 ans",
    ],
    participants: "8 à 16 enfants",
    duration: "1h30",
    location: "Terrain extérieur sécurisé",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    position: "bottom-right",
  },
  {
    icon: Dices,
    title: "Mölkky",
    subtitle: "Le jeu de quilles finlandais",
    description: "stratégie, adresse et bonne humeur",
    image: "/img/molky/IMG_0632.jpg",
    images: ["/img/molky/IMG_0632.jpg", "/img/molky/IMG_0611.jpg"],
    fullDescription:
      "Le Mölkky est un jeu de quilles finlandais qui se joue en plein air. Le principe : renverser des quilles numérotées à l'aide d'un bâton de lancer pour atteindre exactement 50 points. Simple à comprendre, difficile à maîtriser ! Un jeu qui mêle adresse, stratégie et fair-play, idéal pour tous les âges.",
    features: [
      "Règles simples et accessibles à tous",
      "Idéal pour les groupes et les familles",
      "Développe la concentration et la stratégie",
      "Matériel en bois robuste fourni",
      "Possibilité de tournois",
      "Accessible dès 6 ans",
    ],
    participants: "2 à 12 joueurs",
    duration: "1h à 1h30",
    location: "Extérieur (pelouse ou gravier)",
    color: "bg-gradient-to-br from-lime-500 to-green-700",
    position: "bottom-left",
  },
  {
    icon: CircleDot,
    title: "Tir de Précision",
    subtitle: "Paintball statique sur cibles",
    description: "vise juste, vise mieux !",
    image: "/img/paintball/IMG_0767.jpg",
    images: ["/img/paintball/IMG_0767.jpg"],
    fullDescription:
      "Le Tir de Précision au paintball, c'est l'activité parfaite pour tester son adresse ! Armés de lanceurs à CO2, les participants visent des cibles à différentes distances. Challenges individuels ou en équipe, comptage des points, classement... Une version calme et technique du paintball, accessible à tous dès 8 ans.",
    features: [
      "Lanceurs à CO2 précis et légers",
      "Cibles professionnelles à différentes distances",
      "Challenges individuels et par équipe",
      "Matériel de protection fourni",
      "Accessible dès 8 ans",
      "Activité calme et technique",
    ],
    participants: "4 à 16 joueurs",
    duration: "1h à 1h30",
    location: "Intérieur ou extérieur",
    color: "bg-gradient-to-br from-slate-600 to-gray-900",
    position: "bottom-right",
  },
];

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<
    (typeof activities)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleActivityClick = (activity: (typeof activities)[0]) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedActivity(null), 300);
  };
  return (
    <section id="activites" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Nos Activités
          </h2>
          <p className="text-xl text-gray-600">
            Passez votre souris et cliquez sur les cartes pour les découvrir !
          </p>
        </motion.div>

        {/* Grille puzzle moderne */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne du haut - 4 pièces */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {activities.slice(0, 4).map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
                onClick={() => handleActivityClick(activity)}
              >
                <div className="rounded-3xl shadow-xl border-4 border-white relative overflow-hidden h-full min-h-[280px]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className={`absolute inset-0 ${activity.color} opacity-[0.82]`}
                  />

                  <div className="relative z-10 p-8">
                    <div className="mb-4 inline-block">
                      <activity.icon
                        size={56}
                        className="text-white drop-shadow-lg transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2 drop-shadow-md">
                      {activity.title}
                    </h3>

                    <p className="text-white/90 font-semibold mb-2 text-lg">
                      {activity.subtitle}
                    </p>

                    <p className="text-white/80 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/20 transition-all duration-500 z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ligne du bas - 3 pièces centrées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.slice(4).map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 4) * 0.15, type: "spring" }}
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                  zIndex: 10,
                  transition: { duration: 0.3 },
                }}
                className="group cursor-pointer"
                onClick={() => handleActivityClick(activity)}
              >
                <div className="rounded-3xl shadow-xl border-4 border-white relative overflow-hidden h-full min-h-[280px]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className={`absolute inset-0 ${activity.color} opacity-[0.82]`}
                  />

                  <div className="relative z-10 p-8">
                    <div className="mb-4 inline-block">
                      <activity.icon
                        size={56}
                        className="text-white drop-shadow-lg transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2 drop-shadow-md">
                      {activity.title}
                    </h3>

                    <p className="text-white/90 font-semibold mb-2 text-lg">
                      {activity.subtitle}
                    </p>

                    <p className="text-white/80 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/20 transition-all duration-500 z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-bold text-gray-900 mb-6">
            Composez votre triathlon : 3 épreuves à enchaîner par équipe !
          </p>
          <a
            href="#forfaits"
            className="inline-block px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-xl rounded-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Découvrir les forfaits triathlon
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <ActivityModal
        key={selectedActivity?.title}
        isOpen={isModalOpen}
        onClose={closeModal}
        activity={selectedActivity}
      />
    </section>
  );
}
