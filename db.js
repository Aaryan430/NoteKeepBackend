const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const data = require('./config/keys')
const connectToMongo = () => {
    try {
        mongoose.connect(data.MONGOURI, {
            useNewUrlParser: "true",
            useUnifiedTopology: "true"
        }, () => {
            console.log("Connected to Mongo Successfully");
        })
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongo;