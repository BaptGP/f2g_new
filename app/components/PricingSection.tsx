"use client";

import { motion } from "framer-motion";
import { Check, Plus } from "lucide-react";

interface PricingPlan {
  type: "Particulier" | "Entreprise" | "Collectivité";
  title: string;
  subtitle: string;
  color: string;
  includedActivities: string[];
  optionalActivities: string[];
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    type: "Particulier",
    title: "Forfait Anniversaire",
    subtitle: "Pour vos événements privés",
    color: "from-orange-500 to-red-700",
    includedActivities: ["Gellyball", "Jeu de Cornhole", "Paintball Kid's"],
    optionalActivities: ["Archery Tag", "Lancée de Hache"],
    features: [
      "Jusqu'à 20 personnes",
      "Durée : 2h",
      "Animateur inclus",
      "Matériel fourni",
    ],
  },
  {
    type: "Entreprise",
    title: "Forfait Team Building",
    subtitle: "Renforcez la cohésion d'équipe",
    color: "from-blue-500 to-blue-700",
    includedActivities: ["Archery Tag", "Gellyball", "Lancée de Hache"],
    optionalActivities: ["Jeu de Cornhole", "Paintball Kid's"],
    features: [
      "Jusqu'à 50 personnes",
      "Durée : 3h",
      "2 animateurs inclus",
      "Débriefing team building",
    ],
  },
  {
    type: "Collectivité",
    title: "Forfait Centre de Loisirs",
    subtitle: "Animation pour tous les âges",
    color: "from-yellow-400 to-yellow-600",
    includedActivities: ["Paintball Kid's", "Jeu de Cornhole", "Gellyball"],
    optionalActivities: ["Archery Tag", "Lancée de Hache"],
    features: [
      "Groupes adaptés par âge",
      "Durée flexible",
      "Animateurs diplômés",
      "Sécurité renforcée",
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="forfaits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Forfaits
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            3 activités au choix incluses dans chaque forfait
          </p>
          <p className="text-lg text-gray-500">
            + activités supplémentaires disponibles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${plan.color} p-8 text-white`}>
                <h3 className="text-3xl font-black mb-2">{plan.title}</h3>
                <p className="text-white/90 text-lg">{plan.subtitle}</p>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Check className="text-green-500 mr-2" size={24} />3
                    Activités Incluses
                  </h4>
                  <ul className="space-y-3">
                    {plan.includedActivities.map((activity) => (
                      <li key={activity} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {activity}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Plus className="text-purple-500 mr-2" size={24} />
                    Options Supplémentaires
                  </h4>
                  <ul className="space-y-3">
                    {plan.optionalActivities.map((activity) => (
                      <li key={activity} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Check
                        className="text-cyan-500 mr-2 flex-shrink-0"
                        size={16}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`block w-full py-4 text-center bg-gradient-to-r ${plan.color} text-white font-bold rounded-xl hover:shadow-xl transition-all transform hover:scale-105`}
                >
                  Demander un devis
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-cyan-500">
              Formule personnalisée ?
            </span>{" "}
            Nous adaptons nos forfaits à vos besoins !
          </p>
          <p className="text-gray-600">
            Contactez-nous pour un devis sur mesure avec les activités de votre
            choix.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
