import React from "react";

const CheckoutButton = ({ tier }) => {
  const handleCheckout = () => {
    window.location.href = `/checkout?plan=${tier}`;
  };

  return <button onClick={handleCheckout}>Subscribe to {tier}</button>;
};

export default CheckoutButton;
