// // import React from 'react';
// // import {useNavigate} from 'react-router-dom';
// // import {Menu, LayoutDashboard, Users, Activity, Calendar, LogOut} from 'lucide-react';
// // import {useAuth} from '../hooks/useAuth';

// // export default function Sidebar({open, toggleSidebar}) {
// //   const navigate = useNavigate();
// //   const {logout, admin} = useAuth();

// //   const menuItems = [
// //     {icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard'},
// //     {icon: Users, label: 'Doctors', path: '/doctors'},
// //     {icon: Activity, label: 'Patients', path: '/patients'},
// //     {icon: Calendar, label: 'Appointments', path: '/appointments'},
// //   ];

// //   return (
// //     <div className={`${open ? 'w-64' : 'w-20'} bg-gradient-to-b from-purple-700 to-purple-900 text-white transition-all duration-300 flex flex-col`}>
// //       <div className="p-4 border-b border-purple-600 flex items-center justify-between">
// //         <div className={`flex items-center gap-3 ${!open && 'hidden'}`}>
// //           <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center font-bold text-purple-900">C</div>
// //           <div><h1 className="font-bold text-sm">DocDoor</h1><p className="text-xs text-purple-300">Admin</p></div>
// //         </div>
// //         <button onClick={toggleSidebar} className="p-2 hover:bg-purple-600 rounded-lg">
// //           <Menu size={20} />
// //         </button>
// //       </div>

// //       <nav className="flex-1 p-4 space-y-2">
// //         {menuItems.map((item) => (
// //           <button key={item.path} onClick={() => navigate(item.path)} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-600 transition text-left">
// //             <item.icon size={20} />
// //             <span className={`text-sm font-medium ${!open && 'hidden'}`}>{item.label}</span>
// //           </button>
// //         ))}
// //       </nav>

// //       <div className="p-4 border-t border-purple-600">
// //         <button onClick={() => {logout(); navigate('/');}} className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-600 transition text-red-300">
// //           <LogOut size={20} />
// //           <span className={`text-sm font-medium ${!open && 'hidden'}`}>Logout</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Menu,
//   LayoutDashboard,
//   Users,
//   Activity,
//   Calendar,
//   CreditCard,
//   Building,
//   UserCog,
//   Pill,
//   FileText,
//   LogOut,
// } from "lucide-react";
// import { useAuth } from "../hooks/useAuth";

// export default function Sidebar({ open, toggleSidebar }) {
//   const navigate = useNavigate();
//   const { logout, admin } = useAuth();

//   const mainMenu = [
//     { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
//     { label: "Doctors", icon: Users, path: "/doctors" },
//     { label: "Patients", icon: Activity, path: "/patients" },
//     { label: "Appointments", icon: Calendar, path: "/appointments" },
//     { label: "Billing", icon: CreditCard, path: "/billing" },
//   ];

//   const clinicManagement = [
//     { label: "Departments", icon: Building, path: "/departments" },
//     { label: "Staff", icon: UserCog, path: "/staff" },
//     { label: "Medicines", icon: Pill, path: "/medicines" },
//     { label: "Prescriptions", icon: FileText, path: "/prescriptions" },
//   ];

//   return (
//     <div
//       className={`${
//         open ? "w-72" : "w-20"
//       } bg-gradient-to-b from-purple-700 to-purple-900 h-screen text-white transition-all duration-300 flex flex-col`}
//     >
//       {/* HEADER */}
//       <div className="p-4 border-b border-purple-500 flex justify-between items-center">
//         <div className={`flex items-center gap-3 ${!open && "hidden"}`}>
//           <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center font-bold text-purple-900">
//             C
//           </div>
//           <div>
//             <h1 className="font-bold text-md">Doctor Clinic</h1>
//             <p className="text-xs text-purple-200">Management System</p>
//           </div>
//         </div>

//         <button
//           onClick={toggleSidebar}
//           className="p-2 hover:bg-purple-600 rounded-lg"
//         >
//           <Menu size={20} />
//         </button>
//       </div>

//       {/* CLINIC DASHBOARD SECTION */}
//       <div className="px-4 mt-4">
//         {open && (
//           <p className="text-xs text-purple-300 font-semibold mb-2">
//             CLINIC DASHBOARD
//           </p>
//         )}

//         {mainMenu.map((i) => (
//           <button
//             key={i.path}
//             onClick={() => navigate(i.path)}
//             className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-600 transition"
//           >
//             <i.icon size={20} />
//             <span className={`text-sm font-medium ${!open && "hidden"}`}>
//               {i.label}
//             </span>
//           </button>
//         ))}
//       </div>

//       {/* CLINIC MANAGEMENT SECTION */}
//       <div className="px-4 mt-6">
//         {open && (
//           <p className="text-xs text-purple-300 font-semibold mb-2">
//             CLINIC MANAGEMENT
//           </p>
//         )}

//         {clinicManagement.map((i) => (
//           <button
//             key={i.path}
//             onClick={() => navigate(i.path)}
//             className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-600 transition"
//           >
//             <i.icon size={20} />
//             <span className={`text-sm font-medium ${!open && "hidden"}`}>
//               {i.label}
//             </span>
//           </button>
//         ))}
//       </div>

//       {/* ACCOUNTS & SETTINGS */}
//       <div className="px-4 mt-auto mb-4 border-t border-purple-600 pt-4">
//         {open && (
//           <p className="text-xs text-purple-300 font-semibold mb-2">
//             ACCOUNTS & SETTINGS
//           </p>
//         )}

//         <button
//           onClick={() => {
//             logout();
//             navigate("/");
//           }}
//           className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-600 transition text-red-300"
//         >
//           <LogOut size={20} />
//           <span className={`text-sm font-medium ${!open && "hidden"}`}>
//             Logout
//           </span>
//         </button>

//         {open && admin && (
//           <div className="mt-3 text-xs text-purple-200">
//             Logged in as: <strong>{admin.name}</strong>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  LayoutDashboard,
  Users,
  Activity,
  Calendar,
  CreditCard,
  Building,
  UserCog,
  Pill,
  FileText,
  Settings,
  User,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Sidebar({ open, toggleSidebar }) {
  const navigate = useNavigate();
  const { logout, admin } = useAuth();

  const [clinicOpen, setClinicOpen] = useState(true);
  const [clientOpen, setClientOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900 text-white h-screen transition-all duration-300 flex flex-col`}
    >
      {/* HEADER */}
      <div className="p-4 border-b border-purple-600 flex items-center justify-between">
        <div className={`flex items-center gap-3 ${!open && "hidden"}`}>
          <div className="w-10 h-10 bg-purple-400 rounded-lg flex items-center justify-center font-bold text-purple-900">
            C
          </div>
          <div>
            <h1 className="font-bold text-sm">DocDor Admin</h1>
            <p className="text-xs text-purple-200">Management System</p>
          </div>
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-purple-600 rounded-lg transition"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* ================= CLINIC DASHBOARD ================= */}
      <div className="px-3 mt-4">
        <button
          onClick={() => setClinicOpen(!clinicOpen)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          <span className={`text-sm font-semibold ${!open && "hidden"}`}>
            Clinic Dashboard
          </span>
          {open && (clinicOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
        </button>

        {clinicOpen && (
          <div className="ml-2 mt-2 space-y-1">
            <SidebarItem open={open} icon={LayoutDashboard} label="Dashboard" onClick={() => navigate("/dashboard")} />
            <SidebarItem open={open} icon={Users} label="Doctors" onClick={() => navigate("/doctors")} />
            <SidebarItem open={open} icon={Activity} label="Patients" onClick={() => navigate("/patients")} />
            <SidebarItem open={open} icon={Calendar} label="Appointments" onClick={() => navigate("/appointments")} />
            <SidebarItem open={open} icon={CreditCard} label="Billing" onClick={() => navigate("/billing")} />
          </div>
        )}
      </div>

      {/* ================= CLIENT MANAGEMENT ================= */}
      <div className="px-3 mt-6">
        <button
          onClick={() => setClientOpen(!clientOpen)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          <span className={`text-sm font-semibold ${!open && "hidden"}`}>
            Client Management
          </span>
          {open && (clientOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
        </button>

        {clientOpen && (
          <div className="ml-2 mt-2 space-y-1">
            <SidebarItem open={open} icon={Building} label="Departments" onClick={() => navigate("/departments")} />
            <SidebarItem open={open} icon={UserCog} label="Staff" onClick={() => navigate("/staff")} />
            <SidebarItem open={open} icon={Pill} label="Medicines" onClick={() => navigate("/medicines")} />
            <SidebarItem open={open} icon={FileText} label="Prescriptions" onClick={() => navigate("/prescriptions")} />
          </div>
        )}
      </div>

      {/* ================= ACCOUNTS & SETTINGS ================= */}
      <div className="px-3 mt-6">
        <button
          onClick={() => setAccountOpen(!accountOpen)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          <span className={`text-sm font-semibold ${!open && "hidden"}`}>
            Accounts & Settings
          </span>
          {open && (accountOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
        </button>

        {accountOpen && (
          <div className="ml-2 mt-2 space-y-1">
            <SidebarItem open={open} icon={User} label="Profile" onClick={() => navigate("/profile")} />
            <SidebarItem open={open} icon={Settings} label="Settings" onClick={() => navigate("/settings")} />
          </div>
        )}
      </div>

      {/* ================= LOGOUT ================= */}
      <div className="mt-auto p-4 border-t border-purple-600">
        {open && admin && (
          <div className="mb-3 text-xs text-purple-200">
            Logged in as: <strong>{admin.name}</strong>
          </div>
        )}

        <button
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-600 transition text-red-300"
        >
          <LogOut size={20} />
          <span className={`text-sm font-medium ${!open && "hidden"}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}

/* ================= REUSABLE ITEM ================= */
function SidebarItem({ icon: Icon, label, onClick, open }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-purple-500/30 hover:translate-x-1 transition-all duration-200 text-left"
    >
      <Icon size={18} />
      <span className={`text-sm ${!open && "hidden"}`}>{label}</span>
    </button>
  );
}
