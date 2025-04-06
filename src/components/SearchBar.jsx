import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
        type="text"
        placeholder="Search for a chemical (e.g., caffeine)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;