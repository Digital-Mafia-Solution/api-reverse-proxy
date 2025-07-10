require("dotenv").config();
const express = require("express");
const proxies = require("./config/proxies");

const app = express();

proxies.forEach(({ path, middleware }) => {
  app.use(path, middleware);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Reverse proxy running on port ${PORT}`);
});
