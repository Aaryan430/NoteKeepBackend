const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const {PORT,JWT_SECRET,mongoURI} = require('./config/keys')
const connectToMongo = ()=>{
    try{
    mongoose.connect(mongoURI, 
        {
            useNewUrlParser: "true",
            useUnifiedTopology: "true"
          
          },
        ()=>{
        console.log("Connected to Mongo Successfully");
    })
    }
    catch{
        console.log(error);
    }
}

module.exports = connectToMongo;