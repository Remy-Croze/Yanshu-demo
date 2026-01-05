export const currentSensors = {
  // Le cœur du monitoring cutané continu
  hydration: {
    id: "hydratation",
    label: "Hydratation Cutanée",
    value: 34,
    unit: "%",
    status: "warning", // low, good, warning
    message: "Niveau bas détecté. Pensez à boire de l'eau.",
    icon: "Droplets"
  },
  uvIndex: {
    id: "uv",
    label: "Exposition UV",
    value: 6,
    unit: "UV",
    status: "danger",
    message: "Indice élevé. Crème solaire recommandée.",
    icon: "Sun"
  },
  temperature: {
    id: "temp",
    label: "Température Peau",
    value: 32.5,
    unit: "°C",
    status: "good",
    message: "Température normale.",
    icon: "Thermometer"
  },
  sebum: {
    id: "sebum",
    label: "Niveau de Sébum",
    value: "Modéré",
    unit: "",
    status: "good",
    message: "Équilibre lipidique stable.",
    icon: "Activity"
  },
  battery: {
    id: "battery",
    label: "Batterie Bracelet",
    value: 82, // Long-lasting battery
    unit: "%",
    status: "good",
    icon: "Battery"
  }
};