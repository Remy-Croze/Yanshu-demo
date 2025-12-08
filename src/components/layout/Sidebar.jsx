import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ScanLine, Settings, Activity } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Activity size={28} />
        <span>YánShù</span>
      </div>

      <nav className="sidebar-nav">
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <LayoutDashboard size={24} />
          <span>Suivi</span>
        </NavLink>

        <NavLink 
          to="/scan" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <ScanLine size={24} />
          <span>Scan IA</span>
        </NavLink>

        <NavLink 
          to="/settings" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <Settings size={24} />
          <span>Réglages</span>
        </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <strong>Mode Éco activé</strong>
        <br/>Capteurs basse consommation
      </div>
    </aside>
  );
};

export default Sidebar;