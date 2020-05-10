require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const mongoose = require('mongoose');
const to = require('await-to-js').default;

mongoose.connect(`mongodb+srv://paranoia:${process.env.DB_PASS}@userinexperience-maztg.mongodb.net/test`);

const User = require('./models/User');

app.get('/users', async (req, res) => {
  const [error, users] = await to(User.find({}).exec());
  if (error) return res.json({success: false, error});
  return res.json({success: true, data: users});
});

app.post('/users', async (req, res) => {
  const { username, time, avatar } = req.body;
  const [error] = await to(User.create({username, time, avatar}));
  if (error) return res.json({success: false, error});
  return res.json({success: true});
});

app.listen(port, () => {
  console.log('Example app listening on port 3000!');
});
