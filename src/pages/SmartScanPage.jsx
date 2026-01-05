import React, { useState } from 'react';
import PhotoUploader from '../components/ai-scan/PhotoUploader';
import AnalysisResult from '../components/ai-scan/AnalysisResult';
import { Client } from "@gradio/client"; // L'outil de connexion

const SmartScanPage = () => {
  const [step, setStep] = useState('upload');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Fonction pour transformer le résultat brut de l'IA en conseils YánShù
  const formatAIResult = (aiData) => {
    // aiData ressemble à : { label: "Eczema", confidences: [...] }
    const topResult = aiData.label; 
    const confidenceScore = Math.round(aiData.confidences[0].confidence * 100);

    // Dictionnaire de conseils basiques selon le résultat de l'IA
    // Vous pouvez enrichir cette liste selon les classes de votre modèle (ex: Acne, Melanoma, etc.)
    const recommendationsMap = {
      default: ["Consultez un dermatologue pour confirmation", "Hydratez régulièrement"],
      "Normal": ["Continuez votre routine actuelle", "N'oubliez pas la protection solaire"],
      "Eczema": ["Évitez les savons irritants", "Utilisez une crème émolliente"],
      "Acne": ["Nettoyez votre peau matin et soir", "Évitez de toucher les lésions"],
      "Melanoma": ["CONSULTEZ UN MÉDECIN IMMÉDIATEMENT", "Surveillez l'évolution des grains de beauté"],
      // Ajoutez ici les noms exacts que votre IA renvoie
    };

    return {
      diagnosis: topResult, // ex: "Eczema"
      confidence: confidenceScore,
      details: `L'IA a détecté des caractéristiques visuelles correspondant à ${topResult}.`,
      recommendations: recommendationsMap[topResult] || recommendationsMap['default']
    };
  };

  const handleRealScan = async (file) => {
    setStep('analyzing');
    setError(null);

    try {
      // 1. Connexion
      const client = await Client.connect("RemyCroze/yanshu-api"); 

      // 2. Envoi de l'image (CORRECTION FINALE)
      // Avec Blocks et api_name="predict", on utilise le nom "/predict"
      // ET on passe les arguments dans un tableau simple [file]
      const result = await client.predict("/predict", [ file ]);

      // 3. Traitement
      console.log("Résultat IA brut:", result.data);
      
      const formattedResult = formatAIResult(result.data[0]);
      setResult(formattedResult);
      setStep('result');

    } catch (err) {
      console.error("Erreur IA:", err);
      setError("Erreur : " + (err.message || "Problème technique"));
      setStep('upload');
    }
  };

  const handleReset = () => {
    setResult(null);
    setStep('upload');
    setError(null);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', animation: 'fadeIn 0.5s ease' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Diagnostic IA Cutané</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Notre IA analyse la texture et les micro-signes pour prévenir les problèmes.
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        {error && (
          <div style={{ color: 'red', textAlign: 'center', marginBottom: '20px', padding: '10px', background: '#fee' }}>
            {error}
          </div>
        )}

        {step !== 'result' && (
          <PhotoUploader 
            onFileSelect={handleRealScan} // On passe la nouvelle fonction
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

      <div style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #eee', fontSize: '0.8rem', color: '#999', textAlign: 'center' }}>
        <p>🔒 <strong>IA Éthique & Transparente :</strong> L'analyse est effectuée via notre API sécurisée YánShù (Hébergée sur Hugging Face).</p>
      </div>
    </div>
  );
};

export default SmartScanPage;