const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config();


const app = express()
app.use(cors());


const cameras = require('./routes/cameras')
const port = 4000



app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/cameras', cameras)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})