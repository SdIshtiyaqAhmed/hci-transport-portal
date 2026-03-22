import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-green-50 text-green-700',
    orange: 'bg-orange-50 text-orange-700',
    purple: 'bg-purple-50 text-purple-700',
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[color] || colorClasses.blue}`}>
          <Icon size={24} />
        </div>
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      <h3 className="text-gray-500 font-medium text-sm">{title}</h3>
    </div>
  );
};

export default DashboardCard;
