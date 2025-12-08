import React from 'react';

export default function MetricCard({title, value, change, subtitle, icon: Icon}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">{value}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
          {change && <p className="text-sm text-green-600 font-semibold mt-2">{change}</p>}
        </div>
        <div className="bg-purple-100 text-purple-600 p-3 rounded-lg">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}