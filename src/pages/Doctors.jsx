import React, {useEffect, useState} from 'react';
import {doctorsAPI} from '../utils/api';
import {Trash2, CheckCircle, XCircle} from 'lucide-react';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({name: '', email: '', phone: '', specialty: '', qualification: '', experience: 0, consultationFee: 500});

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await doctorsAPI.getAll();
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    try {
      await doctorsAPI.create(formData);
      setFormData({name: '', email: '', phone: '', specialty: '', qualification: '', experience: 0, consultationFee: 500});
      setShowForm(false);
      fetchDoctors();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleApprove = async (id, isApproved) => {
    try {
      await doctorsAPI.approve(id, !isApproved);
      fetchDoctors();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      try {
        await doctorsAPI.delete(id);
        fetchDoctors();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">👨‍⚕️ Doctors</h1>
        <button onClick={() => setShowForm(!showForm)} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          {showForm ? '✕ Close' : '+ Add Doctor'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <form onSubmit={handleAddDoctor} className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="px-4 py-2 border rounded-lg" required />
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-2 border rounded-lg" required />
            <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="px-4 py-2 border rounded-lg" required />
            <input type="text" placeholder="Specialty" value={formData.specialty} onChange={(e) => setFormData({...formData, specialty: e.target.value})} className="px-4 py-2 border rounded-lg" required />
            <input type="text" placeholder="Qualification" value={formData.qualification} onChange={(e) => setFormData({...formData, qualification: e.target.value})} className="px-4 py-2 border rounded-lg" />
            <input type="number" placeholder="Experience (yrs)" value={formData.experience} onChange={(e) => setFormData({...formData, experience: parseInt(e.target.value)})} className="px-4 py-2 border rounded-lg" />
            <input type="number" placeholder="Fee" value={formData.consultationFee} onChange={(e) => setFormData({...formData, consultationFee: parseInt(e.target.value)})} className="px-4 py-2 border rounded-lg" />
            <button type="submit" className="col-span-2 bg-purple-600 text-white py-2 rounded-lg font-semibold">✅ Add</button>
          </form>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100"><tr>
            <th className="px-6 py-4 text-left font-semibold">Name</th>
            <th className="px-6 py-4 text-left font-semibold">Email</th>
            <th className="px-6 py-4 text-left font-semibold">Specialty</th>
            <th className="px-6 py-4 text-left font-semibold">Fee</th>
            <th className="px-6 py-4 text-left font-semibold">Status</th>
            <th className="px-6 py-4 text-center font-semibold">Action</th>
          </tr></thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor._id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{doctor.name}</td>
                <td className="px-6 py-4">{doctor.email}</td>
                <td className="px-6 py-4">{doctor.specialty}</td>
                <td className="px-6 py-4">₹{doctor.consultationFee}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleApprove(doctor._id, doctor.isApproved)} className="flex items-center gap-2 text-sm">
                    {doctor.isApproved ? <><CheckCircle size={16} className="text-green-600" /> Approved</> : <><XCircle size={16} className="text-yellow-600" /> Pending</>}
                  </button>
                </td>
                <td className="px-6 py-4 flex gap-2 justify-center">
                  <button onClick={() => handleDelete(doctor._id)} className="text-red-600"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}