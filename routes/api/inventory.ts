import express = require("express");
const router = express.Router();
const app = express();
const User = require("../../models/User");

interface IInventory {
  inventory: [];
}

//@route put/user/:id
app.put("/api/user/:id", (req: express.Request, res: express.Response) => {
  User.findOne({ _id: req.params.id }).then(user => {
    console.log(req.params.id)
    if (user) {
      console.log(req.params.id);
      user.updateOne({
        Inventory: req.body
      })
        .then((inventory: IInventory) => {
          console.log(inventory);
          if (!inventory) {
            return res.status(400).json({
              message: "Something went wrong."
            })
          };
          return res.status(200).json(user);
        })
    } else {
      return res.status(400).json({
        message: 'yeaa nope'
      })
    }
  })
})

module.exports = router;