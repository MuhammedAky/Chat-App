const mongoose = require("mongoose");

connection = () => {
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log("DB connection Successfull");
    }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = connection;