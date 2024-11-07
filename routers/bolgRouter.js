const express = require("express");
const {createBlogController} = require("../controllers/bolgController");
const isAuth = require("../middlewares/isAuthMiddleware");
const bolgRouter = express.Router();

bolgRouter.post('/create-blog', isAuth, createBlogController)


module.exports = bolgRouter ;