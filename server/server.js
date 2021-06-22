require("dotenv").config({ path: ".env" });

const express = require("express");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { resolve } = require("path");

(async () => {
  console.log(await stripe.plans.list());
})();

app.use(express.static("/client"));

app.get("/", (req, res) => {
  const path = resolve("/client" + "/index.html");
  res.sendFile(path);
});

app.listen(4242, () => console.log("successfully done, Ricky"));
