const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    let token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res
        .status(500)
        .send({ message: "Something went wrong | please Login again " });
    }
    const tokenData = await jwt.verify(token, "1234");
    req.body.id = tokenData;
    next();
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = verifyToken;
