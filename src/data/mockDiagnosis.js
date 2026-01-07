export const diagnosisScenarios = {
  normal: {
    diagnosis: "Healthy Skin",
    confidence: 98,
    details: "No anomalies detected. Continue your current routine.",
    recommendations: ["Maintain hydration", "Gentle cleansing in the evening"]
  },
  dry: {
    diagnosis: "Xerosis (Dryness)",
    confidence: 89,
    details: "Signs of slight flaking are visible.",
    recommendations: ["Apply a ceramide-rich cream", "Avoid hot water"]
  },
  irritation: {
    diagnosis: "Possible Contact Dermatitis",
    confidence: 84, // AI gives a probability, not absolute certainty
    details: "Localized redness detected on the photographed area.",
    recommendations: ["Stop using new products", "Consult a specialist if it persists"]
  }
};