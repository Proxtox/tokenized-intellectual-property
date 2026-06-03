"use client";

export default function IPDashboard() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">IP Dashboard</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">View your IP portfolio and royalty overview.</p>
        <button className="w-full bg-teal-600 text-white py-3 rounded-2xl">View Dashboard</button>
      </div>
    </div>
  );
}