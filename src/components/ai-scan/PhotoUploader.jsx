import React, { useRef } from 'react';
import { Camera, Upload } from 'lucide-react';

const PhotoUploader = ({ onFileSelect, isAnalyzing }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
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
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
        accept="image/*" 
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
        {isAnalyzing ? "AI Analysis in progress..." : "Take or upload a photo"}
      </h3>
      
      {!isAnalyzing && (
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '300px', textAlign: 'center' }}>
          YánShù AI will analyze your skin texture, redness, and hydration.
        </p>
      )}
    </div>
  );
};

export default PhotoUploader;