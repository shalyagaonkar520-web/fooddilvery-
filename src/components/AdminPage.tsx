import React from 'react';
import { useSystemStore } from '../store/systemStore';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-lg">
        <h1 className="text-2xl font-black text-gray-900 mb-2">Admin Portal</h1>
        <p className="text-gray-500 font-medium text-sm">Please access via desktop for full features.</p>
      </div>
    </div>
  );
}
