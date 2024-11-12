const express = require("express");
const { createBlogController, getAllBlogsController,getMyBlogsController,editBlogsController ,deleteBlogController} = require("../controllers/bolgController");
const isAuth = require("../middlewares/isAuthMiddleware");
const bolgRouter = express.Router();

bolgRouter
    .post('/create-blog',  createBlogController)
    .get('/get-Blogs',  getAllBlogsController)
    .get('/get-MyBlogs',  getMyBlogsController)
    .post('/edit-Blogs', editBlogsController)
    .post('/delete-blog', deleteBlogController)



module.exports = bolgRouter ;