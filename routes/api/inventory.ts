import express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../../models/User");
import { IUser, IAuthRequest } from '../../interfaces'

interface IInventory {
  inventory: [];
}



//@route put/user/:id
router.put("/", (req: IAuthRequest, res: express.Response) => {
  User.findOne({ _id: req.params.id }).then((user: IUser) => {
    if (user) {
      user.updateOne({
        Inventory: req.body
      })
        .then((inventory: IInventory) => {
          if (!inventory) {
            return res.status(400).json({
              message: "Could not update inventory."
            })
          };
          return res.status(200).json(user);
        })
    } else {
      return res.status(400).json({
        message: 'Something went wrong.'
      })
    }
  })
})

module.exports = router;