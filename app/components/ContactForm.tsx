"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, MapPin, Phone, Send, Users } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    typeClient: "",
    activites: [] as string[],
    dateEvenement: "",
    nombrePersonnes: "",
    lieu: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleActivityChange = (activity: string) => {
    setFormData((prev) => ({
      ...prev,
      activites: prev.activites.includes(activity)
        ? prev.activites.filter((a) => a !== activity)
        : [...prev.activites, activity],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form data:", formData);
    setSubmitStatus("success");
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitStatus("idle");
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        typeClient: "",
        activites: [],
        dateEvenement: "",
        nombrePersonnes: "",
        lieu: "",
        message: "",
      });
    }, 3000);
  };

  const activities = [
    "Archery Tag",
    "Jeu de Cornhole",
    "Gellyball",
    "Lancée de Hache",
    "Paintball Kid's",
    "Mölkky",
    "Tir de Précision",
  ];
  const clientTypes = ["Particulier", "Entreprise", "Collectivité"];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Demandez votre Devis
          </h2>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire et nous vous recontacterons rapidement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Mail className="text-cyan-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">contact@f2g-game.fr</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Phone className="text-orange-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Téléphone</h3>
              <p className="text-gray-600">06 XX XX XX XX</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <MapPin className="text-yellow-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Localisation</h3>
              <p className="text-gray-600">
                Nous intervenons dans toute la région
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Type de client *
                </label>
                <select
                  name="typeClient"
                  required
                  value={formData.typeClient}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez...</option>
                  {clientTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Activités souhaitées *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activities.map((activity) => (
                    <label
                      key={activity}
                      className="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-cyan-500 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.activites.includes(activity)}
                        onChange={() => handleActivityChange(activity)}
                        className="w-5 h-5 text-cyan-500"
                      />
                      <span className="text-gray-700">{activity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    name="dateEvenement"
                    value={formData.dateEvenement}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    <Users className="inline mr-2" size={16} />
                    Nombre de personnes
                  </label>
                  <input
                    type="number"
                    name="nombrePersonnes"
                    value={formData.nombrePersonnes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Lieu souhaité (sur site ou adresse)
                </label>
                <input
                  type="text"
                  name="lieu"
                  value={formData.lieu}
                  onChange={handleChange}
                  placeholder="Ex: Sur votre site ou 123 rue Example, Ville"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message / Informations complémentaires
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-bold text-white text-lg flex items-center justify-center space-x-2 transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                      ? "bg-green-500"
                      : "bg-gradient-to-r from-orange-500 via-yellow-400 to-cyan-500 hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : submitStatus === "success" ? (
                  <span>✓ Message envoyé !</span>
                ) : (
                  <>
                    <span>Envoyer la demande</span>
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
