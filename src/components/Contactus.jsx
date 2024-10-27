import React from 'react';

const Contactus = () => {
  return (
    <div className='bg-black min-h-screen p-6 flex flex-col items-center justify-center'>
      <h1 className="text-3xl font-bold text-white mb-12">Contact Us</h1> {/* Title added */}

      <label className="input input-bordered flex items-center gap-2 w-full max-w-md mb-4  bg-black">
       
        <input 
          type="text" 
          className="grow h-12 px-4 bg-gray-800 text-white  border-gray-600 rounded focus:outline-none focus:ring-blue-500" 
          placeholder="Email" 
        />
      </label>

      <textarea 
        className="textarea textarea-bordered w-full max-w-md h-24 bg-black text-white placeholder-gray-400 border  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6" 
        placeholder="Enter your doubt Our Team will contact you soon"
      ></textarea>
      
      <button className="btn btn-outline btn-secondary text-white px-7">Submit</button> {/* Updated button text */}
    </div>
  );
}

export default Contactus;
