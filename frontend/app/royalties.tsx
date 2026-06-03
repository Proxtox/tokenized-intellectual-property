"use client";

export default function RoyaltiesPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">IP Royalties</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Manage and distribute IP royalties.</p>
        <button className="w-full bg-teal-600 text-white py-3 rounded-2xl">Distribute Royalties</button>
      </div>
    </div>
  );
}