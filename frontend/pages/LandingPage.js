import React from "react";
import PricingTable from "../components/PricingTable";
import TrialBadge from "../components/TrialBadge";

const LandingPage = () => (
  <div className="landing">
    <h1>Unlock AI-Powered Market Insights</h1>
    <p>Subscribe to QuantumCommerce for predictive reports that give you a competitive edge.</p>
    <TrialBadge />
    <PricingTable />
  </div>
);

export default LandingPage;
