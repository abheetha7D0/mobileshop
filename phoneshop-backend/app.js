const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const customer = require('./routes/customer');
const items = require('./routes/items');
const user = require('./routes/user');

const app = express();
const port = 4000;
app.use(cors());

const url = 'mongodb://127.0.0.1/jewelleryshop';

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on("open", () => {
  console.log("MongoDB Connected...!")
});

app.use(express.json());
app.use('/customer', customer);
app.use('/items', items);
app.use('/', user);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`)
});
