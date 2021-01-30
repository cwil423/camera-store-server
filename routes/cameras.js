const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/', async(req, res) => {
  const cameras = await pool.query(`
  SELECT * FROM cameras
  `)
  res.send(cameras.rows)
})

module.exports = router