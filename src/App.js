import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Finding from "./pages/Finding";
import Fetching from './pages/Fetching';
import Seen from './pages/Seen';
import LandingPage from "./components/LandingPage";
import Hero from "./pages/Hero";
import PropertyListPage from "./components/PropertyListPage";
import MapView from "./components/MapView";
import ComparisonModal from "./components/ComparisonModal"; // Import ComparisonModal
import ComparisonPage from "./components/ComparisonPage"; // Import ComparisonPage
import "./index.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (window.location.pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/Finding":
        title = "";
        metaDescription = "";
        break;
      case "/Hero":
        title = "";
        metaDescription = "";
        break;
      case "/Fetching":
        title = "";
        metaDescription = "";
        break;
      case "/PropertyListing":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Finding" element={<Finding />} />
      <Route path="/Fetching" element={<Fetching />} />
      <Route path="/Seen" element={<Seen />} />
      <Route path="/MapView" element={<MapView />} />
      <Route path="/PropertyListing" element={<PropertyListPage />} />
      <Route path="/Comparison" element={<ComparisonModal />} /> {/* Add route for ComparisonModal */}
      <Route path="/ComparisonPage" element={<ComparisonPage />} /> {/* Add route for ComparisonPage */}
    </Routes>
  );
}

export default App;
