import React from "react";

const tiers = [
  { name: "Basic", price: "$9/mo", features: ["Market Trend Report ✅", "Competitor Pricing ✅", "Demand Prediction ❌"] },
  { name: "Pro", price: "$29/mo", features: ["Market Trend Report ✅", "Competitor Pricing ✅", "Demand Prediction ✅"] },
  { name: "Enterprise", price: "$79/mo", features: ["All Pro Features ✅", "Real-Time Alerts ✅", "Dashboard Access ✅"] },
];

const PricingTable = () => (
  <div className="pricing-table">
    <h2>Choose Your Plan</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          {tiers.map(tier => <th key={tier.name}>{tier.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {["Market Trend Report", "Competitor Pricing", "Demand Prediction", "Real-Time Alerts", "Dashboard Access"].map((feature, index) => (
          <tr key={index}>
            <td>{feature}</td>
            {tiers.map(tier => <td key={tier.name}>{tier.features[index]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PricingTable;
