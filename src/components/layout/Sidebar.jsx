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
          <span>Dashboard</span>
        </NavLink>

        <NavLink 
          to="/scan" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <ScanLine size={24} />
          <span>AI Scan</span>
        </NavLink>

        <NavLink 
          to="/settings" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <Settings size={24} />
          <span>Settings</span>
        </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <strong>Eco Mode Active</strong>
        <br/>Low power sensors
      </div>
    </aside>
  );
};

export default Sidebar;