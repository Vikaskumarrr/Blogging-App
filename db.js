const mongoose = require("mongoose");
const clc = require("cli-color");

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log(clc.yellowBright("MongoDB connect sucessfully")))
.catch((error)=>console.log(clc.redBright(error)));






/**
 * java script -----> css -----> fir advanced javaScript ------> in 15Days
 */