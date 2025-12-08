import React, {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {useAuth} from './hooks/useAuth';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import Sidebar from './components/Sidebar';

export default function App() {
  const {token} = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!token) return <Login />;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}