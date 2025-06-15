import React from "react";
import { Routes, Route } from "react-router-dom";
import AffiliatePage from "./pages/AffiliateSignup";
import CheckoutPage from "./pages/CheckoutPage";
import LandingPage from "./pages/LandingPage";
import PricingPage from "./pages/PricingPage";
import DownloadPage from "./pages/DownloadPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/affiliate" element={<AffiliateSignup />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </div>
  );
}

export default App;
