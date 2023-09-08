const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signupUser = async (req, res) => {
  const formData = {
    name: req.body.name,
    password: req.body.password,
  };

  try {
    formData.password = await bcrypt.hash(formData.password, 12);
    const user = await new User(formData).save();
    user.password = null;
    return res
      .status(200)
      .send({ data: user, message: "user added successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong" });
  }
};

const loginUser = async (req, res) => {
  //   console.log(req.params);
  try {
    const checkUser = await User.findOne({ name: req.params.name });
    // check user
    if (checkUser === null) {
      return res.status(500).send({ message: "user not exist" });
    }

    //   check password
    const verifyPassword = await bcrypt.compare(
      req.params.password,
      checkUser.password
    );
    if (!verifyPassword) {
      return res.status(500).send({ message: "Invalid Password" });
    }

    //   token generation
    const token = jwt.sign({ data: checkUser._id }, "1234", {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token)
      .send({ data: token, message: "Start your journey" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Something went wrong" });
  }
};

module.exports = { signupUser, loginUser };
