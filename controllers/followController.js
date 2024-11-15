const {followUser,getFollowingList} = require("../models/followModel");
const User = require("../models/userModel");

const followUserController = async (req, res) => {

    const followerUserId = req.session.user.userId
    const followingUserId = req.body.followingUserId;

    try {
        await User.findUserWithKey({ key: followerUserId });
        await User.findUserWithKey({ key: followingUserId });
    } catch (error) {
        return res.send({
            status: 500,
            message: "Internal server error",
            error: error,
        })
    };
    try {
        const followDb = await followUser({ followerUserId, followingUserId });
        return res.send({
            status: 201,
            message: "Follow sucessfully",
            data: followDb
        })
    } catch (error) {
        return res.send({
            status: 500,
            message: "Internal Server Error",
            error: error,
        })
    }


    console.log("Hellow form follow controller")
    return res.send("Follow from foloow controller")
}

const getFollowingListController = async (req, res) => {
    const followerUserId = req.session.user.userId;
    const SKIP = Number(req.query.skip) || 0;

    try {
        const followingListDb = await getFollowingList({ followerUserId, SKIP });

        return res.send({
            status: 200,
            message: "Read successfully",
            data: followingListDb,
        })
    } catch (error) {
        return res.send({
            status: 500,
            message: "Internal Server error",
            error: error
        });
    }
}



module.exports = { followUserController, getFollowingListController };