import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ChemicalCard from "./components/ChemicalCard";

function App() {
  const [chemical, setChemical] = useState(null);

  const handleSearch = async (query) => {
    try {
      const res = await fetch(`https://localhost:5001/api/chemical/${query}`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      setChemical(data);
    } catch {
      setChemical(null);
      alert("Chemical not found");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">🧪 ToxiScan - Chemical Safety</h1>
      <SearchBar onSearch={handleSearch} />
      {chemical && <ChemicalCard data={chemical} />}
    </div>
  );
}

export default App;