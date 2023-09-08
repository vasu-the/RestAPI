const router = require('express').Router();

// controller
const {getProfileDetails } = require("../controller/dashboardController");
router.get("/profile", getProfileDetails);

module.exports = router;