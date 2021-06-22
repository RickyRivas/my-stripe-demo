require("dotenv").config({ path: ".env" });

const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

(async () => {
  console.log(await stripe.plans.list());
})();

app.listen(4000, () => console.log("successfully done, Ricky"));
