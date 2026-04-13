'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
  color: string;
  isIncluded?: boolean;
}

export default function ActivityCard({ 
  icon: Icon, 
  title, 
  description, 
  color,
  isIncluded = false 
}: ActivityCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group cursor-pointer"
    >
      <div className={`relative overflow-hidden rounded-3xl shadow-xl bg-gradient-to-br ${color} p-8 h-full`}>
        {isIncluded && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            ✓ Inclus
          </div>
        )}
        
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Icon size={64} className="text-white drop-shadow-lg" />
        </motion.div>

        <h3 className="text-3xl font-black text-white mb-4 drop-shadow-md">
          {title}
        </h3>
        
        <p className="text-white/90 text-lg leading-relaxed">
          {description}
        </p>

        <motion.div
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}
