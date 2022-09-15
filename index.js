const connectToMongo = require('./db');
const express = require('express')
const dotenv = require("dotenv");
dotenv.config();
var cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

if ( process.env.NODE_ENV == "production"){
  const path = require("path");
  app.get("/", (req, res) => {
      app.use(express.static(path.resolve(__dirname,'frontend','build')));
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log(`Keepnotes backend listening at http://localhost:${port}`)
})
