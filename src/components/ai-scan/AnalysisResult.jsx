import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const AnalysisResult = ({ data, onReset }) => {
  const isHealthy = data.confidence > 90;

  return (
    <div className="card" style={{ animation: 'fadeIn 0.5s ease' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        {isHealthy ? (
          <CheckCircle size={32} color="var(--color-success)" />
        ) : (
          <AlertTriangle size={32} color="var(--color-warning)" />
        )}
        <div>
          <h2 style={{ fontSize: '1.4rem' }}>{data.diagnosis}</h2>
          <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Confiance IA: <strong>{data.confidence}%</strong>
          </span>
        </div>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#F5F5F5', borderRadius: '12px', marginBottom: '20px' }}>
        <p style={{ lineHeight: '1.5' }}>{data.details}</p>
      </div>

      <h4 style={{ marginBottom: '10px' }}>Recommandations IA :</h4>
      <ul style={{ paddingLeft: '20px', marginBottom: '25px', color: 'var(--color-text-muted)' }}>
        {data.recommendations.map((rec, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>{rec}</li>
        ))}
      </ul>

      <button className="btn-primary" onClick={onReset} style={{ width: '100%' }}>
        Nouvelle Analyse
      </button>
    </div>
  );
};

export default AnalysisResult;