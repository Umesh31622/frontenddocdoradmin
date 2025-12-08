import React, {useEffect, useState} from 'react';
import {patientsAPI} from '../utils/api';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await patientsAPI.getAll();
        setPatients(response.data.patients);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">👥 Patients</h1>
      {loading ? (
        <div className="text-center py-8">⏳ Loading...</div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100"><tr>
              <th className="px-6 py-4 text-left font-semibold">Name</th>
              <th className="px-6 py-4 text-left font-semibold">Email</th>
              <th className="px-6 py-4 text-left font-semibold">Phone</th>
              <th className="px-6 py-4 text-left font-semibold">Age</th>
              <th className="px-6 py-4 text-left font-semibold">Status</th>
            </tr></thead>
            <tbody>
              {patients.length > 0 ? patients.map((patient) => (
                <tr key={patient._id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{patient.name}</td>
                  <td className="px-6 py-4">{patient.email}</td>
                  <td className="px-6 py-4">{patient.phone}</td>
                  <td className="px-6 py-4">{patient.age || 'N/A'}</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">{patient.status}</span></td>
                </tr>
              )) : (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-500">No patients</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}