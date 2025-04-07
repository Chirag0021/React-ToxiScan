import React from "react";

const ChemicalCard = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{data.Name}</h2>
        {data.ImageUrl && (
          <img src={data.ImageUrl} alt={data.Name} className="h-24" />
        )}
      </div>

      <p className="text-gray-700 mt-2">
        <strong>Formula:</strong> {data.MolecularFormula}
      </p>
      <p className="text-gray-700">
        <strong>Molecular Weight:</strong> {data.MolecularWeight} g/mol
      </p>

      {data.RiskLevel && (
        <div
          className={`mt-4 font-bold ${
            data.RiskLevel === "High"
              ? "text-red-600"
              : data.RiskLevel === "Medium"
              ? "text-yellow-500"
              : data.RiskLevel === "Low"
              ? "text-green-600"
              : "text-gray-500"
          }`}
        >
          🧪 Risk Level: {data.RiskLevel}
        </div>
      )}

      {data.Toxicity && data.Toxicity.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-1">Toxicity:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {data.Toxicity.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {data.PhysicalProperties && Object.keys(data.PhysicalProperties).length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-1">Physical Properties:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {Object.entries(data.PhysicalProperties).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChemicalCard;
