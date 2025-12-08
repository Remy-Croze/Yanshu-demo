import React from 'react';
import { Droplets, Sun, Thermometer, Activity, Battery, AlertCircle } from 'lucide-react';

// Mapping des noms d'icônes (string) vers les composants Lucide
const iconMap = {
  Droplets,
  Sun,
  Thermometer,
  Activity,
  Battery
};

const SensorCard = ({ data }) => {
  const IconComponent = iconMap[data.icon] || Activity;

  // Définition dynamique de la couleur selon le statut (good/warning/danger)
  const getStatusColor = (status) => {
    switch(status) {
      case 'good': return 'var(--color-success)';
      case 'warning': return 'var(--color-warning)';
      case 'danger': return 'var(--color-danger)';
      default: return 'var(--color-text-muted)';
    }
  };

  const statusColor = getStatusColor(data.status);

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
          {data.label}
        </span>
        <div style={{ 
          backgroundColor: `${statusColor}20`, // 20 = opacité faible
          padding: '8px', 
          borderRadius: '50%',
          color: statusColor 
        }}>
          <IconComponent size={20} />
        </div>
      </div>

      <div style={{ marginTop: '5px' }}>
        <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
          {data.value}
        </span>
        <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginLeft: '4px' }}>
          {data.unit}
        </span>
      </div>

      {data.message && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px', 
          fontSize: '0.75rem', 
          color: statusColor,
          marginTop: 'auto' 
        }}>
          <AlertCircle size={12} />
          {data.message}
        </div>
      )}
    </div>
  );
};

export default SensorCard;