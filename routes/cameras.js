const express = require('express');
const pool = require('../db');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});

const router = express.Router();

// router.get('/', async(req, res) => {
//   const cameras = await pool.query(`
//   SELECT * FROM cameras
//   `)
//   res.send(cameras.rows)
// })

const cameraSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  photourl: String
});

const Camera = mongoose.model('camera', cameraSchema, 'cameras');

router.get('/', async(req, res) => {
  Camera.find(function (err, cameras) {
    if (err) return console.error(err);
    res.send(cameras);
  })
})

module.exports = router