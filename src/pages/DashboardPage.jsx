import React from 'react';
import SensorCard from '../components/dashboard/SensorCard';
import TrendChart from '../components/dashboard/TrendChart';
import RecommendationCard from '../components/dashboard/RecommendationCard';
import { currentSensors } from '../data/mockSensors';
import { weeklyHistory } from '../data/mockHistory';

const DashboardPage = () => {
  return (
    <div style={{ paddingBottom: '40px', animation: 'fadeIn 0.5s ease' }}>
      
      {/* Page Header */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Hello, Remy 👋</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Here is your skin status today. Hydration is a bit low this morning.
        </p>
      </div>

      {/* Sensor Grid (Hydration, UV, Temp, Sebum) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        {Object.values(currentSensors).map((sensor) => (
          <SensorCard key={sensor.id} data={sensor} />
        ))}
      </div>

      {/* Charts & Advice Section */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '20px' 
      }}>
        
        {/* Trend Chart */}
        <TrendChart 
          title="Hydration Trend (7 days)" 
          data={weeklyHistory} 
          dataKey="hydration" 
          color="var(--color-secondary)" // YánShù Green
        />

        {/* Dynamic Advice Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Recommended Actions</h3>
          
          <RecommendationCard 
            title="Priority Hydration" 
            text="Your level is at 34% and has been decreasing for 7 days. Apply your usual moisturizing serum and drink 500ml of water within the hour." 
          />
          
          <RecommendationCard 
            title="UV Protection Required" 
            text="Outdoor UV index is rising to 6. SPF 30+ protection is necessary if you go out for lunch." 
          />

          <div className="card" style={{ marginTop: 'auto', background: 'linear-gradient(135deg, #FF8A80 0%, #FFEBEE 100%)', color: 'white' }}>
            <h4 style={{ color: '#C62828', marginBottom: '5px' }}>Appointment Reminder</h4>
            <p style={{ color: '#D32F2F', fontSize: '0.9rem' }}>Dermatologist (Dr. Peaulisse)<br/>Tomorrow at 2:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;