const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config();


const app = express()
app.use(cors({
  origin: "https://inspiring-cray-1b1890.netlify.app"
}));

const port = process.env.PORT

app.use(bodyParser.urlencoded({
  extended: true
}))

mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});

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

app.get('/cameras', (req, res) => {
  Camera.find(function (err, cameras) {
    if (err) return console.error(err);
    console.log(cameras)
    res.send(cameras);
  })
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})