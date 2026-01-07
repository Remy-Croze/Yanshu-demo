import React, { useState } from 'react';
import PhotoUploader from '../components/ai-scan/PhotoUploader';
import AnalysisResult from '../components/ai-scan/AnalysisResult';
import { Client } from "@gradio/client";

const SmartScanPage = () => {
  const [step, setStep] = useState('upload');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Function to transform raw AI result into YánShù advice
  const formatAIResult = (aiData) => {
    // aiData looks like: { label: "Eczema", confidences: [...] }
    const topResult = aiData.label; 
    const confidenceScore = Math.round(aiData.confidences[0].confidence * 100);

    // Dictionary of basic advice based on AI result
    // Keys (Normal, Eczema) MUST match exactly what your Python model returns
    const recommendationsMap = {
      default: ["Consult a dermatologist for confirmation", "Hydrate regularly"],
      "Normal": ["Continue your current routine", "Don't forget sun protection"],
      "Eczema": ["Avoid irritating soaps", "Use an emollient cream"],
      "Acne": ["Cleanse your skin morning and night", "Avoid touching lesions"],
      "Melanoma": ["CONSULT A DOCTOR IMMEDIATELY", "Monitor mole evolution"],
    };

    return {
      diagnosis: topResult, 
      confidence: confidenceScore,
      details: `AI detected visual characteristics corresponding to ${topResult}.`,
      recommendations: recommendationsMap[topResult] || recommendationsMap['default']
    };
  };

  const handleRealScan = async (file) => {
    setStep('analyzing');
    setError(null);

    try {
      // 1. Connection
      const client = await Client.connect("RemyCroze/yanshu-api"); 

      // 2. Send image
      const result = await client.predict("/predict", [ file ]);

      // 3. Process
      console.log("Raw AI Result:", result.data);
      
      const formattedResult = formatAIResult(result.data[0]);
      
      setResult(formattedResult);
      setStep('result');

    } catch (err) {
      console.error("AI Error:", err);
      setError("Error: " + (err.message || "Technical issue"));
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
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>AI Skin Diagnosis</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          Our AI analyzes texture and micro-signs to prevent issues.
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
            onFileSelect={handleRealScan} 
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
        <p>🔒 <strong>Ethical & Transparent AI:</strong> Analysis performed via our secure YánShù API (Hosted on Hugging Face).</p>
      </div>
    </div>
  );
};

export default SmartScanPage;