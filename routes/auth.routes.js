const router = require("express").Router();

// controller
const { signupUser, loginUser } = require("../controller/user.controller");

router.post("/signup", signupUser);
router.get("/login/:name/:password", loginUser);


module.exports = router;
