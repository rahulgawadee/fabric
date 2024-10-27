import React from 'react';
import { Link } from 'react-router-dom';

const Contactpage = () => {
  return (
    <div>
      <div className="hero bg-black min-h-screen -mt-32">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-5">Contact</h1>
            <p className="py-6">
              If you have any Suggestions,queries,etc for our model and want to join our team please feel free to contact us freely without any hesitation.<br/><br/>--Regards,Team RVSV
            </p>
            <Link to="/contactus">
              <button className="btn btn-primary">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
