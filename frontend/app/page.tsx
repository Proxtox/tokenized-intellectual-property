"use client";

import { useState } from 'react';

export default function IPTokenization() {
  const [ip, setIP] = useState('');

  const handleTokenize = () => {
    alert(`Tokenizing IP: ${ip} (demo)`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 border rounded-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Tokenized Intellectual Property</h1>

      <div className="space-y-4">
        <input type="text" value={ip} onChange={(e) => setIP(e.target.value)} className="w-full p-4 border rounded-2xl" placeholder="IP or Patent ID" />
        <button onClick={handleTokenize} className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl text-lg font-semibold">
          Tokenize IP
        </button>
      </div>
    </div>
  );
}