import React from "react";

const ChemicalCard = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{data.Name}</h2>
        <img src={data.ImageUrl} alt={data.Name} className="h-24" />
      </div>
      <p className="text-gray-700">Formula: {data.MolecularFormula}</p>
      <p className="text-gray-700">Molecular Weight: {data.MolecularWeight} g/mol</p>
      {data.SignalWord && (
        <p className="text-red-600 font-semibold mt-2">
          ⚠️ Signal Word: {data.SignalWord}
        </p>
      )}
    </div>
  );
};

export default ChemicalCard;