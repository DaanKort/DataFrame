import express = require('express');
import emailCheck = require('email-check');
const router = express.Router();

const User = require('../../models/User');

//@route POST api/user
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
  });
  if (!newUser.firstName) {
    return res.send({
      success: false,
      message: "Firstname cannot be empty"
    });
  }
  if (!newUser.lastName) {
    return res.send({
      success: false,
      message: "Last Name cannot be empty"
    });
  }
  if (!newUser.email) {
    return res.send({
      success: false,
      message: "Email cannot be empty"
    });
  }
  if (!newUser.password) {
    return res.send({
      success: false,
      message: "Password cannot be empty"
    });
  }
 

  newUser.email = newUser.email.toLowerCase(),
  newUser.firstName = newUser.firstName,
  newUser.lastName = newUser.lastName,
  newUser.password = newUser.generateHash(newUser.password),
  User.find({
    email: newUser.email
  }, (err:any, user:any) => {
    if(err) {
      return res.send({
        success: false,
        message: "Error: Server error"
      });
    }
    if(user.length > 0) {
      return res.send({
        success: false,
        message: "User with this email already exists"
      });
    } else {
      newUser.save().then(() => {
        return res.send({
          success: true,
          message: "Signed up!"
        });
      });
    }
  })
});

module.exports = router;

