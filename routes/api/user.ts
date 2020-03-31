import express = require('express');
import emailCheck = require('email-check');
const router = express.Router();

const User = require('../../models/User');

//@route POST api/user
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const { firstName, lastName, email, password } = req.body;

  //Field validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: 'Please enter all fields.'
    })
  }

  //Check for existing user 
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ message: "User with this email already exists" })

    const newUser = new User({
      firstName,
      lastName,
      email,
      password
    });

    newUser.save().then(() => {
      return res.send({
        singedUp: true,
        message: "Signed up!"
      });
    });
  })
});
module.exports = router;

