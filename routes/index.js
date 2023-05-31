const router = require("express").Router();

// Routes
const authRoutes = require("./auth.routes");
const dashboardRoutes = require("./dashboard.routes");

// verify Token
const tokenVerification = require("../verify/tokenVerifycation");

router.use("/auth", authRoutes);
router.use("/dashboard", tokenVerification, dashboardRoutes);

module.exports = router;
