const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors());
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

var brands = {
  1: {
    id: 1,
    name: 'Apple',
    startDate: '1976-04-01',
    country: 'USA',
    type: 'brand',
  },
  2: {
    id: 2,
    name: 'Zune',
    startDate: '2006-11-14',
    endDate: '2011-10-31',
    country: 'USA',
    type: 'former-brand',
  },
};

app.get('/articles', (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'iPhone',
      price: '499',
      brand: 1,
    },
    {
      id: 2,
      name: 'iPod Touch',
      price: '399',
      brand: 1,
    },
    {
      id: 3,
      name: 'Zune 30',
      price: '249',
      brand: 2,
    },
  ]);
});

app.get('/brands/:id', (req, res) => {
  if (req.params.id in brands) {
    return res.json(brands[req.params.id]);
  }
  return res.status(404).end();
});
