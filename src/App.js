import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CarouselComponent from "./components/carousel";

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="CarouselComponent">
        <CarouselComponent />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
