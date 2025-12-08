import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Stethoscope, Mail, Lock} from 'lucide-react';
import {useAuth} from '../hooks/useAuth';
import {authAPI} from '../utils/api';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const response = await authAPI.login(email, password);
        login(response.data.token, response.data.admin);
        navigate('/dashboard');
      } else {
        const response = await authAPI.register(name, email, password);
        login(response.data.token, response.data.admin);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || '❌ Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-center text-white">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Stethoscope className="text-purple-600" size={32} />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">DocDor Admin</h1>
            <p className="text-purple-200"> Management System</p>
          </div>

          <div className="p-8">
            <div className="flex gap-4 mb-8">
              <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${isLogin ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}>Login</button>
              <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${!isLogin ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}>Register</button>
            </div>

            {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">{error}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required={!isLogin} />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                </div>
              </div>

              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50">
                {loading ? '⏳ Loading...' : isLogin ? '🔓 Login' : '✅ Register'}
              </button>
            </form>

            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
              {/* <p className="text-sm text-gray-700 mb-2 font-semibold">🧪 Demo Credentials:</p>
              <p className="text-xs text-gray-600">📧 Email: <code className="bg-gray-100 px-2 py-1 rounded">admin@docdoor.com</code></p>
              <p className="text-xs text-gray-600">🔑 Password: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}