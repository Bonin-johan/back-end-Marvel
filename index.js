require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const charactersRoutes = require("./character");
app.use(charactersRoutes);

const comicsRoutes = require("./comics");
app.use(comicsRoutes);

app.listen(3000 || process.env.PORT, () => {
  console.log("🔥🔥🔥Serveur started🔥🔥🔥");
});
