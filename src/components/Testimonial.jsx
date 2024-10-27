import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "This is the best service I have ever used. Highly recommended!",
    author: "John Doe",
  },
  {
    id: 2,
    text: "A fantastic experience from start to finish.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "I am extremely satisfied with the results. Will definitely come back!",
    author: "Michael Johnson",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="max-w-xl mx-auto p-6 sm:p-10 mt-28">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8 text-white">
        Trusted User's
      </h2>
      <div className="border p-8 sm:p-12 lg:p-16 h-64 flex items-center justify-center bg-black shadow-lg rounded-lg transition-all duration-300">
        <div className="text-center">
          <p className="text-lg sm:text-xl lg:text-2xl italic text-whiteleading-relaxed">
            "{testimonials[currentIndex].text}"
          </p>
          <h4 className="mt-6 sm:mt-8 font-semibold text-yellow-300">
            {testimonials[currentIndex].author}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
