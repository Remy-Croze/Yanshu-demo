import React, { useRef } from 'react';
import { Camera, Upload } from 'lucide-react';

const PhotoUploader = ({ onFileSelect, isAnalyzing }) => {
  // Crée une référence invisible vers l'input de fichier
  const fileInputRef = useRef(null);

  const handleClick = () => {
    // Quand on clique sur la boîte, on simule un clic sur l'input caché
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file); // On renvoie le vrai fichier au parent
    }
  };

  return (
    <div 
      onClick={!isAnalyzing ? handleClick : undefined}
      style={{
        border: '2px dashed #E0E0E0',
        borderRadius: '20px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isAnalyzing ? 'wait' : 'pointer',
        backgroundColor: '#FAFAFA',
        transition: 'all 0.3s ease'
      }}
      className="uploader-hover"
    >
      {/* L'input caché qui fait le vrai travail */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        accept="image/*" // Accepte uniquement les images
      />

      <div style={{ 
        backgroundColor: 'var(--color-primary-light)', 
        padding: '20px', 
        borderRadius: '50%', 
        marginBottom: '20px',
        color: 'var(--color-primary)'
      }}>
        {isAnalyzing ? <div className="spinner">...</div> : <Camera size={40} />}
      </div>
      
      <h3 style={{ color: 'var(--color-text-main)', marginBottom: '10px' }}>
        {isAnalyzing ? "Analyse IA en cours..." : "Prendre ou importer une photo"}
      </h3>
      
      {!isAnalyzing && (
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '300px', textAlign: 'center' }}>
          L'IA YánShù analysera la texture, les rougeurs et l'hydratation de votre peau.
        </p>
      )}
    </div>
  );
};

export default PhotoUploader;