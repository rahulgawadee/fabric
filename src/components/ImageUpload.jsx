import React, { useState } from "react";

const ImageUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center mt-20 playfair-font">
        <img
          src="src/assets/RVSVlogo.svg"
          alt="Logo"
          className="w-52 h-52 mb-10"
        />

        <input
          type="file"
          className="file-input file-input-bordered file-input-error w-full max-w-xs"
          onChange={handleFileChange}
        />

        <button className="btn btn-md sm:btn-md md:btn-md lg:btn-lg mt-10 border-2 border-white text-white hover:text-blue-500 bg-black">
          Analyze Image
        </button>
      </form>

      {/* FAQ Section */}
      <div className="mt-32 mb-16 w-full px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-10">FAQ's</h2>
        
        {/* FAQ Item 1 */}
        <div className="collapse collapse-arrow bg-gray-900 text-white mb-4 p-4 rounded-lg border border-gray-700">
          <input type="checkbox" className="hidden" id="faq1" />
          <label htmlFor="faq1" className="collapse-title text-lg font-medium cursor-pointer">How does this AI work?</label>
          <div className="collapse-content mt-2 text-sm">
            <p>Upload the image above the input field and click "Analyze Image." The output will be displayed!</p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="collapse collapse-arrow bg-gray-900 text-white mb-4 p-4 rounded-lg border border-gray-700">
          <input type="checkbox" className="hidden" id="faq2" />
          <label htmlFor="faq2" className="collapse-title text-lg font-medium cursor-pointer">Does this AI provide material identification of the fabric I uploaded?</label>
          <div className="collapse-content mt-2 text-sm">
            <p>Yes! Upload the image, and check the report displayed on screen for material type.</p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="collapse collapse-arrow bg-gray-900 text-white mb-4 p-4 rounded-lg border border-gray-700">
          <input type="checkbox" className="hidden" id="faq3" />
          <label htmlFor="faq3" className="collapse-title text-lg font-medium cursor-pointer">What's the purpose of this site?</label>
          <div className="collapse-content mt-2 text-sm">
            <p>It aids the fashion industry by identifying material types and defects, enabling companies to recycle large-scale materials and control waste.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
