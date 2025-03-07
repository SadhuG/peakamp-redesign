import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    // App Wrapper
    <div className="bg-eastern-blue-lightest font-asap text-eastern-blue-darkest flex min-h-screen justify-center">
      {/* App Container */}
      <div className="w-full max-w-[1440px]">
        <header className="h-screen w-full overflow-hidden">
          <Navbar />
          <Hero />
        </header>
      </div>
    </div>
  );
};

export default App;
