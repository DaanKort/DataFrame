// import express =  require('express');
// const router = express.Router();


// const Item = require('../../models/Item');

// //@route GET api/items
// router.get('/', (req:express.Request, res:express.Response) => {
//     Item.find()
//     .sort({ date: -1 })
//     .then((items:[]) => res.json(items));
// });

// //@route POST api/items
// router.post('/', (req:express.Request, res:express.Response) => {
//    const newItem = new Item({
//        name: req.body.name
//    });

//    newItem.save().then(item => res.json(item));
// });

// //@route DELETE api/items:id
// router.delete('/:id', (req:express.Request, res:express.Response) => {
//   Item.findById(req.params.id)
//   .then(item => item.remove().then(() => res.json({success: true}))
//   ).catch(err => res.status(404).json({success: false}));
//  });



// module.exports = router;