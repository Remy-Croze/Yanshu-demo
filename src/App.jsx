import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardPage from './pages/DashboardPage';
import SmartScanPage from './pages/SmartScanPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    // On utilise className="app-container" au lieu de style={{...}}
    <div className="app-container">
      
      <Sidebar />

      <div className="main-content">
        <Header />
        
        <main style={{ padding: '20px', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/scan" element={<SmartScanPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;