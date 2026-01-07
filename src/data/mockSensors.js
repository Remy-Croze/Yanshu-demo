export const currentSensors = {
  // Continuous skin monitoring core
  hydration: {
    id: "hydration",
    label: "Skin Hydration",
    value: 34,
    unit: "%",
    status: "warning", // low, good, warning
    message: "Low level detected. Remember to drink water.",
    icon: "Droplets"
  },
  uvIndex: {
    id: "uv",
    label: "UV Exposure",
    value: 6,
    unit: "UV",
    status: "danger",
    message: "High index. Sunscreen recommended.",
    icon: "Sun"
  },
  temperature: {
    id: "temp",
    label: "Skin Temperature",
    value: 32.5,
    unit: "°C",
    status: "good",
    message: "Normal temperature.",
    icon: "Thermometer"
  },
  sebum: {
    id: "sebum",
    label: "Sebum Level",
    value: "Moderate",
    unit: "",
    status: "good",
    message: "Stable lipid balance.",
    icon: "Activity"
  },
  battery: {
    id: "battery",
    label: "Wristband Battery",
    value: 82, // Long-lasting battery
    unit: "%",
    status: "good",
    icon: "Battery"
  }
};