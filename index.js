const connectToMongo = require('./db');
const express = require('express')
const dotenv = require("dotenv");
dotenv.config();
var cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

const path = require("path");

if (process.env.NODE_ENV == "production") {
  app.get("/", (req, res) => {
    res.send("Server working in production");
    // app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));
    // res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
} else {
  app.get("/", (req, res) => {
    res.send("Server working in developemnt mode properly")
    // app.use(express.static(path.resolve(__dirname,'frontend','build')));
    // res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log(`Keepnotes backend listening at http://localhost:${port}`)
})
