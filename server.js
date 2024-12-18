const express = require("express");
require('dotenv').config();
const clc = require("cli-color")
const session = require("express-session");
const mongodbSession = require("connect-mongodb-session")(session);


// File-Improts
const db = require("./db")
const authRouter = require("./routers/authRouter");
const bolgRouter = require("./routers/bolgRouter");
const followRouter = require("./routers/followRouter")
// Constant
const app = express();
const PORT = process.env.PORT;
const store = new mongodbSession({
    uri : process.env.MONGO_URI,
    collection: "session",
})
const isAuth = require("./middlewares/isAuthMiddleware")


//MiddleWares
app.use(express.json())
app.use(session({
    secret : process.env.SECRET_KEY,
    store : store,
    resave: false,
    saveUninitialized : false,
}))


app.use("/auth", authRouter);
app.use("/blog", isAuth, bolgRouter);
app.use("/follow", isAuth, followRouter);

app.listen(PORT,()=>{ 
    console.log(clc.yellowBright.underline("Server is up and runing PORT:8000"))
});
