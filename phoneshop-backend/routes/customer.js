const express = require('express');
const app = express();
const router = express.Router();

const Customer = require('../models/customer.models');

app.use(express.json());

router.get('/', async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  }catch (err) {
    console.log(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
  }catch (err) {
    console.log(err)
  }
})

router.post('/', async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    telephone: req.body.telephone,
    address: req.body.address,
    email: req.body.email,
  });

  try {
    const responce = await customer.save();
    res.json(responce);
  } catch (e) {
    console.log('error ' + e)
  }
});

router.put('/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      telephone: req.body.telephone,
      address: req.body.address,
      email: req.body.email,
    });
    res.json(customer);
  } catch (e) {
    console.log('error ' + e)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    res.json(customer);
  } catch (e) {
    console.log('error ' + e)
  }
});

module.exports = router;
