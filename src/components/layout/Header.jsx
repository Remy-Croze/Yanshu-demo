import React from 'react';
import { Bell, User } from 'lucide-react';

const Header = () => {
  const styles = {
    header: {
      height: 'var(--header-height)',
      backgroundColor: 'var(--color-surface)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 30px'
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 600
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    },
    avatar: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      backgroundColor: 'var(--color-primary-light)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-primary)'
    }
  };

  return (
    <header style={styles.header}>
      <h2 style={styles.title}>Mon Espace Santé</h2>
      
      <div style={styles.actions}>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color="var(--color-text-muted)" />
          {/* Point de notification */}
          <span style={{ 
            position: 'absolute', top: -2, right: -2, 
            width: '8px', height: '8px', 
            background: 'var(--color-danger)', borderRadius: '50%' 
          }}></span>
        </div>

        <div style={styles.profile}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Remy</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Utilisateur Premium</div>
          </div>
          <div style={styles.avatar}>
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;