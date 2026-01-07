import React from 'react';
import { Shield, Leaf, Database, Smartphone } from 'lucide-react';

// --- HELPERS ---

const Section = ({ icon: Icon, title, children }) => (
  <div className="card" style={{ marginBottom: '20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
      <Icon size={22} color="var(--color-secondary)" />
      <h3 style={{ fontSize: '1.1rem' }}>{title}</h3>
    </div>
    {children}
  </div>
);

const ToggleRow = ({ label, description, defaultChecked = false }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
    <div>
      <div style={{ fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{description}</div>
    </div>
    <div style={{ 
      width: '40px', height: '22px', 
      backgroundColor: defaultChecked ? 'var(--color-success)' : '#ddd', 
      borderRadius: '20px', position: 'relative', cursor: 'pointer' 
    }}>
      <div style={{ 
        width: '18px', height: '18px', backgroundColor: 'white', borderRadius: '50%', 
        position: 'absolute', top: '2px', left: defaultChecked ? '20px' : '2px', transition: 'left 0.2s' 
      }} />
    </div>
  </div>
);

// --- END HELPERS ---

const SettingsPage = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>
      <h1 style={{ marginBottom: '30px' }}>Settings & Privacy</h1>

      {/* Governance / Data Section */}
      <Section icon={Shield} title="Data Privacy (Governance)">
        <ToggleRow 
          label="Anonymized Sharing (R&D)" 
          description="Help scientific dermatological research without revealing my identity."
          defaultChecked={true}
        />
        <ToggleRow 
          label="Local Storage Only" 
          description="Keep my biometric photos on my phone, not in the cloud."
          defaultChecked={false}
        />
        <button style={{ marginTop: '10px', color: 'var(--color-danger)', background: 'none', border: '1px solid var(--color-danger)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>
          Download all my data (GDPR)
        </button>
      </Section>

      {/* Environment Section */}
      <Section icon={Leaf} title="Eco Mode & Hardware (Environment)">
        <ToggleRow 
          label="Energy Saving Mode" 
          description="Reduces sensor measurement frequency to extend battery life."
          defaultChecked={true}
        />
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          <Smartphone size={16} />
          <span>Connected Bracelet: YánShù Model 1 (80% recycled materials)</span>
        </div>
      </Section>

      <Section icon={Database} title="Account Management">
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '15px' }}>
          App Version: 0.1.0 (Demo Build)
        </p>
        <button className="btn-primary" style={{ backgroundColor: 'var(--color-text-main)' }}>
          Log Out
        </button>
      </Section>
    </div>
  );
};

export default SettingsPage;