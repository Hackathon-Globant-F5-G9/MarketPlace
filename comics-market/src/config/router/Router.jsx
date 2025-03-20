import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import HomePage from "../../pages/HomePage/HomePage";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import { FavoritesProvider } from "../../context/FavoritesContext"; // Import the provider

export default function Router() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
