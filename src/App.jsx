import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import ImageUpload from "./components/ImageUpload";

import Contactus from "./components/Contactus";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<ImageUploadPage />} />
        <Route path="/Contactus" element={<Contactus/>} />    
      </Routes>
      <Footer />
    </Router>
  );
}

const Home = () => <Homepage />;
const ImageUploadPage = () => (
  <div className="min-h-screen bg-[#000000] flex flex-col justify-center items-center">
    <ImageUpload />
  </div>
);

export default App;
