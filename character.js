const express = require("express"); //import de express
const router = express.Router(); //import de router
const axios = require("axios"); // import axios

// recuperation de perso
router.get("/characters", async (req, res) => {
  // console.log("voici le resultat ", process.env.Z0Cr1Rh9Fny66fwT); //undefined
  try {
    //  - paramètre de recherche (nom)

    let query = `apiKey=Z0Cr1Rh9Fny66fwT`;
    // console.log(process.env.Z0Cr1Rh9Fny66fwT); //undefined
    if (req.query.name) {
      query = query + `&name=${req.query.name}`;
    }
    if (req.query.page) {
      query = query + `&skip=${(req.query.page - 1) * 100}`;
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?${query}`
    );

    // console.log(response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
