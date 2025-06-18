"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-3xl mx-auto mb-6 shadow-lg z-30">
      <input
        type="text"
        className="flex-1 px-6 py-4 text-lg rounded-l-2xl border border-[#01FF04] bg-[#18181b] text-[#FDFDFD] focus:outline-none"
        placeholder="Buscar productos, sets o cartas..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#01FF04] text-[#111111] px-8 py-4 text-lg rounded-r-2xl font-bold border border-[#01FF04] hover:bg-[#1BA1F1] hover:text-white transition"
      >
        Buscar
      </button>
    </form>
  );
}
