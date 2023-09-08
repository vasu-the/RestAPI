const User = require("../model/user.model");

const getProfileDetails = async (req, res) => {
  try {
    const who = req.body.id.data;
      const profileDetails = await User.findById(who, { password: 0 });
      return res.status(200).send({ data: profileDetails, message: "success" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ message: "Something went wrong | please Login again " });
  }
};

module.exports = { getProfileDetails };
