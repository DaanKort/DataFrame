import express = require("express");
const router = express.Router();
import config = require("config");
import jwt = require("jsonwebtoken");
import bcrypt = require("bcrypt");

const User = require("../../models/User");

//@route POST api/user
router.post("/", (req: express.Request, res: express.Response) => {
  const { firstName, lastName, email, password, displayName } = req.body;

  //Field validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: "Please enter all fields."
    });
  }

  //Check for existing user
  User.findOne({ email }).then(user => {
    if (user)
      return res
        .status(400)
        .json({ message: "User with this email already exists" });

    const newUser = new User({
      firstName,
      lastName,
      displayName,
      email,
      password
    });

    //Hash password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err: any, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            { user: {
              id: user._id,
              name: user.name,
              email: user.email,
              displayName: user.displayName
            } },
            config.get("jwtSecret"),
            { expiresIn: 3600 },
            (err: any, token: any) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  displayName: user.displayName
                },
                message: "Signed up!"
              });
            }
          );
        });
      });
    });
  });
});



module.exports = router;
