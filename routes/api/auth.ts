import express = require('express');
const router = express.Router();
import config = require('config')
import jwt = require('jsonwebtoken')
import bcrypt = require('bcrypt');


const User = require('../../models/User');

//@route POST api/auth
router.post('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {

  const {  email, password } = req.body;

  //Field validation
  if (!email || !password) {
    return res.status(400).json({
      message: 'Please enter all fields.'
    })
  }

  //Check for existing user 
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ message: "User does not exist" })

    //Password validation   
    bcrypt.compare(password, user.password)
    .then(isMatch => {
        if(!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        jwt.sign(
            { id: user._id },
            config.get('jwtSecret'),
            { expiresIn: 3600 },
            (err: any, token: any) => {
              if(err) throw err;
              res.json({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                message: "Signed up!"
              });
            }
          )
    })
    
  })
});
module.exports = router;

