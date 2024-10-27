import React from "react";

const DownloadReport = ({ reportUrl }) => {
  return (
    <div className="mt-4 text-center playfair-font">
      <a
        href={reportUrl}
        download
        className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
      >
        Download Report
      </a>
    </div>
  );
};

export default DownloadReport;
