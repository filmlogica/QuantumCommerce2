import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AffiliatePage from "./pages/AffiliatePage";
import ReportDownloadPage from "./pages/ReportDownloadPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/report-download" element={<ReportDownloadPage />} />
      </Routes>
    </div>
  );
}

export default App;
