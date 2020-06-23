import express = require("express");
const router = express.Router();

const User = require("../../models/User");

interface IInventory {
  inventory: [];
}

//@route put/user/:id
router.put("/", (req: express.Request, res: express.Response) => {
  User.updateOne({ _id: req.params.id }, {
    Inventory: req.body.Inventory
  })
    .then((inventory: IInventory) => {
      if (!inventory) {
        return res.status(400).json({
          message: "Something went wrong."
        })
      };
      return res.status(200).json(inventory);

    })
})

module.exports = router;