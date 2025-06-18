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
        className="flex-1 px-6 py-4 text-lg rounded-l-2xl border border-mint bg-light text-dark-blue focus:outline-none"
        placeholder="Buscar productos, sets o cartas..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-primary text-light px-8 py-4 text-lg rounded-r-2xl font-bold border border-primary hover:bg-medium-blue hover:text-dark-blue transition"
      >
        Buscar
      </button>
    </form>
  );
}
