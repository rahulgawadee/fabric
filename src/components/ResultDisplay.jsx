import React from "react";

const ResultDisplay = ({ result }) => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold">Analysis Results</h2>
      <div className="flex justify-center mt-6">
        <div className="mx-2">
          <h3 className="text-xl">Uploaded Image</h3>
          <img src={result.originalImageUrl} alt="Uploaded" className="border-2 border-gray-300" />
        </div>
        <div className="mx-2">
          <h3 className="text-xl">Analyzed Image</h3>
          <img src={result.analyzedImageUrl} alt="Analyzed" className="border-2 border-gray-300" />
        </div>
      </div>
      <div className="mt-4">
        <p><strong>Material Detected:</strong> {result.material}</p>
        <p><strong>Damage Level:</strong> {result.damageLevel}%</p>
      </div>
    </div>
  );
};

export default ResultDisplay;
