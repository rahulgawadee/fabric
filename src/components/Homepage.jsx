import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contactpage from './Contactpage';
import Testimonial from './Testimonial';

const Homepage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/upload"); // Navigate to /upload on click
  };
  
  return (

    <div className='bg-black '>
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
          <p className="py-6 text-white">
            Our AI-powered solution processes image data to accurately identify materials and assess damage extent, enhancing the speed and precision of defect detection.
          </p>
       
       
       
        {/*Button */}



          <button  onClick={handleGetStarted}  className="mt-6 relative flex items-center gap-1 px-9 py-4 border-4 border-transparent text-lg bg-inherit rounded-full font-semibold text-lime-400 shadow-[0_0_0_2px] shadow-lime-400 cursor-pointer overflow-hidden transition-all duration-600 ease-out hover:shadow-[0_0_0_12px] hover:shadow-transparent hover:text-gray-900 hover:rounded-lg active:scale-95">
      
      {/* Left Arrow SVG */}
      <svg
        viewBox="0 0 24 24"
        className="absolute left-[-25%] w-6 fill-red-400 transition-all duration-800 ease-out group-hover:left-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* Button Text */}
      <span className="relative z-10 translate-x-[-3px] transition-transform duration-800 ease-out group-hover:translate-x-3">
        Get Started
      </span>

      {/* Expanding Circle */}
      <span className="absolute top-1/2 left-1/2 bg-blue-400 w-5 h-5 rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-800 ease-out group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
      
      {/* Right Arrow SVG */}
      <svg
        viewBox="0 0 24 24"
        className="absolute right-4 w-6 fill-lime-400 transition-all duration-800 ease-out group-hover:right-[-25%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      
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

<Testimonial/>


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
