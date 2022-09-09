const express = require("express");
const { home } = require("../controllers/UserControllers");
const router = express.Router();

// adding router for the home  page
router.get("/", home);

// adding users routes
router.use("/users", require("./user.js"));
module.exports = router;
