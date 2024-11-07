const express = require("express");
const {blogController} = require("../controllers/bolgController");
const isAuth = require("../middlewares/isAuthMiddleware");
const bolgRouter = express.Router();

bolgRouter.post('/create-blog', isAuth, blogController)


module.exports = bolgRouter ;