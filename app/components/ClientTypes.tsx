'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Building2, MapPin } from 'lucide-react';

const clientTypes = [
  {
    icon: Users,
    title: 'Particulier',
    subtitle: 'Anniversaire, cousinade...',
    color: 'bg-f2g-red',
    description: 'Des moments inoubliables pour vos événements privés',
  },
  {
    icon: Briefcase,
    title: 'Entreprise',
    subtitle: 'Convention, Team building',
    color: 'bg-f2g-blue',
    description: 'Renforcez la cohésion de vos équipes',
  },
  {
    icon: Building2,
    title: 'Collectivité',
    subtitle: 'Centre de loisir',
    color: 'bg-f2g-yellow',
    description: 'Animations pour tous les âges',
  },
  {
    icon: MapPin,
    title: 'Sur notre site',
    subtitle: 'Ou à domicile',
    color: 'bg-f2g-cyan',
    description: 'Nous nous adaptons à vos besoins',
  },
];

export default function ClientTypes() {
  return (
    <section id="offres" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Offres
          </h2>
          <p className="text-xl text-gray-600">
            Des solutions adaptées à tous vos besoins
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            >
              <div className={`${type.color} p-6 text-white transition-all group-hover:shadow-2xl`}>
                <type.icon size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                <p className="text-white/90 font-medium">{type.subtitle}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-f2g-red via-f2g-yellow to-f2g-blue p-1 rounded-2xl">
            <div className="bg-white px-8 py-6 rounded-2xl">
              <p className="text-2xl font-bold text-gray-900">
                Nous nous déplaçons ou vous accueillons sur notre site !
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
