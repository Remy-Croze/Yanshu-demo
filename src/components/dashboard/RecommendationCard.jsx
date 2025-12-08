import React from 'react';
import { Lightbulb } from 'lucide-react';

const RecommendationCard = ({ title, text }) => {
  return (
    <div style={{ 
      backgroundColor: 'var(--color-secondary-light)', 
      padding: '16px', 
      borderRadius: 'var(--radius-card)',
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-start'
    }}>
      <div style={{ 
        backgroundColor: 'var(--color-surface)', 
        padding: '8px', 
        borderRadius: '50%',
        color: 'var(--color-secondary)',
        flexShrink: 0
      }}>
        <Lightbulb size={20} />
      </div>
      <div>
        <h4 style={{ color: 'var(--color-secondary)', marginBottom: '4px', fontSize: '0.95rem' }}>
          {title}
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default RecommendationCard;