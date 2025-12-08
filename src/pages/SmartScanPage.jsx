import React, { useState } from 'react';
import PhotoUploader from '../components/ai-scan/PhotoUploader';
import AnalysisResult from '../components/ai-scan/AnalysisResult';
import { diagnosisScenarios } from '../data/mockDiagnosis';

const SmartScanPage = () => {
  // États de la machine à état : 'upload' | 'analyzing' | 'result'
  const [step, setStep] = useState('upload');
  const [result, setResult] = useState(null);

  const handleSimulateScan = () => {
    setStep('analyzing');
    
    // Simulation du temps de calcul de l'IA (3 secondes)
    setTimeout(() => {
      // Pour la démo, on charge le scénario "Peau Sèche" (correspondant aux capteurs)
      setResult(diagnosisScenarios.dry); 
      setStep('result');
    }, 3000);
  };

  const handleReset = () => {
    setResult(null);
    setStep('upload');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Diagnostic IA Cutané</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Notre IA analyse la texture et les micro-signes pour prévenir les problèmes avant qu'ils n'apparaissent.
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        {step !== 'result' && (
          <PhotoUploader 
            onSimulateUpload={handleSimulateScan} 
            isAnalyzing={step === 'analyzing'} 
          />
        )}

        {step === 'result' && result && (
          <AnalysisResult 
            data={result} 
            onReset={handleReset} 
          />
        )}
      </div>

      {/* Note ESG sur l'IA transparente */}
      <div style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #eee', fontSize: '0.8rem', color: '#999', textAlign: 'center' }}>
        <p>🔒 <strong>IA Éthique & Transparente :</strong> Vos photos sont traitées localement ou sur des serveurs chiffrés. Aucune donnée n'est vendue à des tiers.</p>
      </div>
    </div>
  );
};

export default SmartScanPage;