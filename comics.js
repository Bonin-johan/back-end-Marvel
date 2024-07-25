const express = require("express");
const router = express.Router();
const axios = require("axios");

// une route pour récup les comics
router.get("/comics", async (req, res) => {
  try {
    // - paramètres de recherche (titre et page)
    // console.log("cela fontionne", req.query); //cela fonctionne {}
    let query = `apiKey=Z0Cr1Rh9Fny66fwT`;
    // console.log("cela fontionne aussi", process.env.Z0Cr1Rh9Fny66fwT); // cela fonctionne aussi undefined
    if (req.query.title) {
      query = query + `&title=${req.query.title}`;
      console.log(req.query.title);
    }
    if (req.query.page) {
      query = query + `&skip=${(req.query.page - 1) * 100}`;
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?${query}`
    );
    console.log(response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// une route pour récup les comics liés à un  personnage (ID => params)
router.get("/comics/:characterID", async (req, res) => {
  try {
    console.log("params =>", req.params.characterID); // cette route fonctionne
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${req.params.characterID}?apiKey=Z0Cr1Rh9Fny66fwT`
    );
    console.log(response.data.comics.length);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
