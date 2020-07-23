import express = require("express");
const router = express.Router();
const axios = require('axios');
const fs = require('fs');
const path = require('path');


router.get('/', (req: express.Request, res: express.Response) => {
  axios.get('https://api.warframestat.us/items')
    .then((response) => {
      fs.writeFile(path.join(__dirname, '../../client/src/data/items.json'), JSON.stringify(response.data), () => { }, (err) => {
        if (err) return res.status(400).json(err);
        res.status(200).json({
          message: 'successfully wrote to file!'
        });
      });
    })
    .catch((error: Promise<express.Request>) => {
      console.log(error);
    });
})

module.exports = router;
