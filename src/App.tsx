import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import WelcomeCounty from "./components/WelcomeCounty";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomeCounty />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
