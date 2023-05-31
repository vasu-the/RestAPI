const router = require('express').Router();

// controller
const {getProfileDetails } = require("../controller/dashboard.controller");
router.get("/profile", getProfileDetails);

module.exports = router;