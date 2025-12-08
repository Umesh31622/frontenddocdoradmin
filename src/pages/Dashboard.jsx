import React, {useEffect, useState} from 'react';
import {Users, Activity, Calendar, TrendingUp, BarChart3} from 'lucide-react';
import {dashboardAPI} from '../utils/api';
import MetricCard from '../components/MetricCard';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsResponse = await dashboardAPI.getStats();
        const appointmentsResponse = await dashboardAPI.getRecentAppointments();
        setStats(statsResponse.data.stats);
        setAppointments(appointmentsResponse.data.appointments || []);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="flex items-center justify-center h-screen"><div className="animate-spin inline-block w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full"></div></div>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
      <p className="text-gray-600"></p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8 mt-8">
        <MetricCard title="Total Patients" value={stats?.totalPatients?.value || 0} change={stats?.totalPatients?.change} icon={Users} />
        <MetricCard title="Total Doctors" value={stats?.totalDoctors?.value || 0} change={stats?.totalDoctors?.change} icon={Activity} />
        <MetricCard title="Today's Appt" value={stats?.todayAppointments?.value || 0} subtitle={`${stats?.todayAppointments?.pending || 0} pending`} icon={Calendar} />
        <MetricCard title="Monthly Revenue" value={`₹${(stats?.totalRevenue?.value || 0).toLocaleString()}`} change={stats?.totalRevenue?.change} icon={TrendingUp} />
        <MetricCard title="Completed" value={stats?.completedAppointments || 0} icon={BarChart3} />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Appointments</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Doctor</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Patient</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date & Time</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? appointments.map((apt) => (
                <tr key={apt._id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">👨‍⚕️</div><div><p className="font-medium">{apt.doctorName || 'N/A'}</p><p className="text-xs text-gray-500">{apt.specialty}</p></div></div></td>
                  <td className="py-4 px-4">{apt.patientName || 'N/A'}</td>
                  <td className="py-4 px-4">{new Date(apt.appointmentDate).toLocaleDateString()} @ {apt.timeSlot}</td>
                  <td className="py-4 px-4"><span className={`px-3 py-1 rounded-full text-xs font-semibold ${apt.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{apt.status?.toUpperCase()}</span></td>
                </tr>
              )) : (
                <tr><td colSpan="4" className="py-8 px-4 text-center text-gray-500">📅 No appointments</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}