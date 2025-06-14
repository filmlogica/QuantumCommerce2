import React from "react";
import { useSearchParams } from "react-router-dom";

const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  const redirectToStripe = () => {
    window.location.href = `/api/checkout?plan=${plan}`;
  };

  return (
    <div className="checkout">
      <h2>Confirm Subscription to {plan} Plan</h2>
      <button onClick={redirectToStripe}>Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;
