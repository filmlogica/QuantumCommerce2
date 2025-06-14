import React from "react";
import PricingTable from "../components/PricingTable";
import CheckoutButton from "../components/CheckoutButton";

const PricingPage = () => (
  <div className="pricing-page">
    <h2>Choose the Right Plan</h2>
    <PricingTable />
    <div className="checkout-buttons">
      <CheckoutButton tier="basic" />
      <CheckoutButton tier="pro" />
      <CheckoutButton tier="enterprise" />
    </div>
  </div>
);

export default PricingPage;
