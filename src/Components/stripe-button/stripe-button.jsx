import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51Jh3eXDYNGttdHGzmbMTtmKzUeVXipV6cagyd5tATbKXrPvh2GI6UnYRrsbs6YiuNffmwlKsvqD7UNmouKsE9XYh00KbbXqUai";
  const onToken = (token) => {
    console.log(token);
    alert("payment succeed");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    ></StripeCheckout>
  );
};

export default StripeCheckoutButton;
