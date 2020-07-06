import express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../../models/User");
import { IAuthRequest } from '../../interfaces';
const auth = require("../../middleware/auth");

interface IFavorites {
  favorites: [];
}
interface IITem {
  name: string
} 

//@route put/user/:id
router.put("/", auth, (req: IAuthRequest, res: express.Response) => {
  User.findOne({ _id: req.params.id }).then((user) => {
    const favoritesArray = user.favorites;
    const alreadyFavorite = favoritesArray.map((item: IITem) => {
      return item.name;
    });

    if (alreadyFavorite.includes(req.body.name)) {
      return res.status(400).json({
        message: "Item already marked as favorite"
      })
    } else {
      user.updateOne({
        '$addToSet': { 'favorites': req.body }
      })
        .then((favorites: IFavorites) => {
          if (!favorites) {
            return res.status(400).json({
              message: "Could not add to favorites."
            })
          };
          return res.status(200).json({
            message: "Favorites updated!"
          });
        })
    }
  })
})

module.exports = router;
