const express = require('express');
const app = express();
const router = express.Router();

const Item = require('../models/item.models');

app.use(express.json());

router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  }catch (e) {
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  
  try {
    const responce = await item.save();
    res.json(responce);
  }catch (e) {
    console.log(e);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.json(item);
  } catch (e) {
    console.log(e);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id, {
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        price: req.body.price,
        quantity: req.body.quantity,
      });
    res.json(item);
  } catch (e) {
    console.log(e);
  }
})

module.exports = router;
