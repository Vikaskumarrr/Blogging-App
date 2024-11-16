const express = require("express");
const { followUserController,getFollowingListController,unfollowUserController } = require("../controllers/followController");
const followRouter = express.Router();

followRouter.
    post("/follow-user", followUserController)
    .get("/get-following", getFollowingListController)
    .post("/unfollow-user",unfollowUserController)



module.exports = followRouter;