const express = require("express");
const Store = require("../models/storeModel");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
      const products = await Store.listProducts();
      res.status(200).json({ products });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;