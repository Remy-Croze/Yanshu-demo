import React from 'react';
import SensorCard from '../components/dashboard/SensorCard';
import TrendChart from '../components/dashboard/TrendChart';
import RecommendationCard from '../components/dashboard/RecommendationCard';
import { currentSensors } from '../data/mockSensors';
import { weeklyHistory } from '../data/mockHistory';

const DashboardPage = () => {
  return (
    <div style={{ paddingBottom: '40px', animation: 'fadeIn 0.5s ease' }}>
      
      {/* En-tête de la page */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Bonjour, Remy 👋</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Voici l'état de votre peau aujourd'hui. L'hydratation est un peu basse ce matin.
        </p>
      </div>

      {/* Grille des Capteurs (Hydratation, UV, Temp, Sébum) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        {/* On transforme l'objet sensors en tableau pour l'afficher */}
        {Object.values(currentSensors).map((sensor) => (
          <SensorCard key={sensor.id} data={sensor} />
        ))}
      </div>

      {/* Section Graphiques & Conseils */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '20px' 
      }}>
        {/* Graphique d'évolution */}
        <TrendChart 
          title="Évolution de l'Hydratation (7 jours)" 
          data={weeklyHistory} 
          dataKey="hydration" 
          color="var(--color-secondary)" // Vert YánShù
        />

        {/* Colonne de conseils dynamiques */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Actions Recommandées</h3>
          
          <RecommendationCard 
            title="Hydratation Prioritaire" 
            text="Votre niveau est à 34% et décroit depuis 7 jours ou plus. Appliquez votre sérum hydratant habituel et buvez 500ml d'eau dans l'heure. Voir les produits recommandés ->" 
          />
          
          <RecommendationCard 
            title="Protection UV Requise" 
            text="L'indice UV extérieur monte à 6. Une protection SPF 30+ est nécessaire si vous sortez déjeuner." 
          />

          <div className="card" style={{ marginTop: 'auto', background: 'linear-gradient(135deg, #FF8A80 0%, #FFEBEE 100%)', color: 'white' }}>
            <h4 style={{ color: '#C62828', marginBottom: '5px' }}>Rappel Rendez-vous</h4>
            <p style={{ color: '#D32F2F', fontSize: '0.9rem' }}>Dermatologue (Dr. Peaulisse)<br/>Demain à 14h30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;