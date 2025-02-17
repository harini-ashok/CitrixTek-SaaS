import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Solutions } from "./components/solutions";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={<Header data={landingPageData.Header} />} />
        <Route path="/Solutions" element={<Solutions data={landingPageData.Solutions} />} />
        <Route path="/services" element={<Services data={landingPageData.Services} />} />
        <Route path="/about" element={<About data={landingPageData.About} />} />
        <Route path="/team" element={<Team data={landingPageData.Team} />} />
        <Route path="/testimonials" element={<Testimonials data={landingPageData.Testimonials} />} />
        <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
