const express = require('express');
const mongoose = require("mongoose");
const router = require("./routes/user-routes");

const app = express();
app.use(express.json());
app.use('/api',router);

mongoose.connect("mongodb+srv://emin:emin123@cluster0.ysisfia.mongodb.net/auth?retryWrites=true&w=majority").then(() =>{
    app.listen(5000);
    console.log("database is connected")
}).catch((err)=>console.log(err));

