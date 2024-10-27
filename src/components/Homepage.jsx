import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contactpage from './Contactpage';

const Homepage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/upload"); // Navigate to /upload on click
  };
  
  return (

    <div className='bg-black'>
    <div className="min-h-screen  flex flex-col items-center justify-center playfair-font ">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-10 px-4 mt-11">
        {/* Responsive image with max width constraints */}
        <img
          src="src/assets/RVSVlogo.svg"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg"
          alt="Responsive Logo" 
        />
        
        {/* Responsive text container */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Fabric Damage Detection and Material Identification
          </h1>
          <p className="py-6 text-gray-300">
            Our AI-powered solution processes image data to accurately identify materials and assess damage extent, enhancing the speed and precision of defect detection.
          </p>
          <button 
            onClick={handleGetStarted} 
            className="btn btn-primary text-black bg-yellow-500 hover:bg-yellow-600">
            Get Started
          </button>
        </div>
      </div>

{/*Rate us */}

<div className="mt-36 p-5 w-full flex flex-col items-center">
  <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">Rate Us</h1>
  <div className="rating space-x-2">
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 scale-150" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 scale-150" defaultChecked />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 scale-150" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 scale-150" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 scale-150" />
  </div>
</div>


 {/* Team Member Cards Section */}
     
      <div className="mt-24 w-full px-4  min-h-screen ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-20 ">OUR TEAM</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-lg">
            <img 
              src="src/assets/Rahul.jpg" 
              alt="Team Member 1"
              className="w-44 h-52 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-white">Rahul Gawade</h3>
            <p className="text-gray-300 mt-2 px-2 text-sm sm:text-base">
              Final Year CSE Student Specialized in MERN stack,<br/> Ex-Intern Flare Global Soft,Nashik
            </p>
            <div className="flex space-x-4 mt-10">
              <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="https://www.github.com" className="text-blue-400 hover:text-blue-600">GitHub</a>
            </div>

          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-lg">
            <img 
              src="src\assets\Vrushali.jpg" 
              alt="Team Member 2"
              className="w-44 h-52 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-white">Vrushali More</h3>
            <p className="text-gray-300 mt-2 px-2 text-sm sm:text-base">
            Final Year CSE Student Specialized in MERN stack,<br/>Ex-Intern Zealits Solution,Pune
            </p>
            <div className="flex space-x-4 mt-10">
              <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="https://www.github.com" className="text-blue-400 hover:text-blue-600">GitHub</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-lg">
            <img 
              src="src\assets\Vaishnavi.jpg" 
              alt="Team Member 3"
              className="w-44 h-52 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-white">Vaishnavi Jadhav</h3>
            <p className="text-gray-300 mt-2 px-2 text-sm sm:text-base">
            Final Year CSE student, Skilled in Datascience,AI/ML and a quick learner.
            </p>
            <div className="flex space-x-4 mt-16">
              <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="https://www.github.com" className="text-blue-400 hover:text-blue-600">GitHub</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center bg-black border rounded-lg p-6 shadow-lg">
            <img 
              src="src\assets\Sakshi.jpg" 
              alt="Team Member 4"
              className="w-44 h-52 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-white">Sakshi Pawale</h3>
            <p className="text-gray-300 mt-2 px-2 text-sm sm:text-base">
              Final Year CSE student specialized in Frontend development.
            </p>
            <div className="flex space-x-4 mt-16">
              <a href="https://www.linkedin.com" className="text-blue-400 hover:text-blue-600">LinkedIn</a>
              <a href="https://www.github.com" className="text-blue-400 hover:text-blue-600">GitHub</a>
            </div>

            
          </div>
        </div>
        </div>
      </div> 


      {/* Route wla scene */}
      <Contactpage/>
    </div>
  );
};

export default Homepage;
