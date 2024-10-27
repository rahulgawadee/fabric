import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import ImageUpload from "./components/ImageUpload";
import Contactus from "./components/Contactus";
import Login from "./components/Login";
import Aboutus from "./components/Aboutus";

function App() {
  // Example upload function
  const handleImageUpload = async (file) => {
    // Simulate an upload process
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("File uploaded:", file.name);
        resolve();
      }, 2000); // Simulate a 2-second upload delay
    });
  };

  return (
    <div className="hide-scrollbar h-screen overflow-y-scroll">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<ImageUploadPage onUpload={handleImageUpload} />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AboutUs" element={<Aboutus />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

const Home = () => <Homepage />;
const ImageUploadPage = ({ onUpload }) => (
  <div className="min-h-screen bg-[#000000] flex flex-col justify-center items-center ">
    <ImageUpload onUpload={onUpload} /> {/* Pass onUpload prop */}
  </div>
);

export default App;
