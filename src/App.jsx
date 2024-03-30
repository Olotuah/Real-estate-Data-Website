import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Hero from "./pages/Hero";
import PropertyListPage from "./components/PropertyListPage";
import MapView from "./components/MapView";
import ComparisonPage from "./components/ComparisonPage";
import "./index.css";
import PropertyDetailsPage from "./pages/PropertyDetailsPage"; // Adjust the path as necessary


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
      case "/Hero":
        title = "";
        metaDescription = "";
        break;
      case "/PropertyListing":
        title = "";
        metaDescription = "";
        break;
      case "/MapView":
        title = "";
        metaDescription = "";
        break;
      case "/ComparisonPage":
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
    <Routes >
      <Route path="/" element={<Hero />} />
      <Route path="/Hero" element={<Hero />} />
      <Route path="/PropertyListpage" element={<PropertyListPage />} />
      <Route path="/MapView" element={<MapView />} />
      <Route path="/ComparisonPage" element={<ComparisonPage />} />
      <Route path="/property-details/:id" element={<PropertyDetailsPage />} />

    </Routes>
  );
}

export default App;
