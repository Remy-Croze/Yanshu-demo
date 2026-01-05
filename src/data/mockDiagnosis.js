export const diagnosisScenarios = {
  normal: {
    diagnosis: "Peau Saine",
    confidence: 98,
    details: "Aucune anomalie détectée. Continuez votre routine actuelle.",
    recommendations: ["Maintenez l'hydratation", "Nettoyage doux le soir"]
  },
  dry: {
    diagnosis: "Xérose (Sécheresse)",
    confidence: 89,
    details: "Des signes de desquamation légère sont visibles.",
    recommendations: ["Appliquez une crème riche en céramides", "Évitez l'eau trop chaude"]
  },
  irritation: {
    diagnosis: "Dermatite de contact possible",
    confidence: 84, // L'IA donne une probabilité, pas une certitude absolue
    details: "Rougeurs localisées détectées sur la zone photographiée.",
    recommendations: ["Cessez l'utilisation de nouveaux produits", "Consultez un spécialiste si persistance"]
  }
};