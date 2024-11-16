// const followSchema = require("../schemas/followSchema")
const { LIMIT } = require("../privateConstant")
const followSchema = require("../schemas/followSchema")
const userschema = require("../schemas/userschema")


const followUser = ({ followerUserId, followingUserId }) => {
    return new Promise(async (resolve, reject) => {

        try {

            // check if aclready in db or not
            const followerAlreadyDb = await followSchema.findOne({
                followerUserId,
                followingUserId
            })

            if (followerAlreadyDb) {
                return reject("Already following the user..")
            }


            const followObj = new followSchema({
                followerUserId,
                followingUserId,
                createDatetime: Date.now(),
            });

            const followDb = await followObj.save();
            resolve(followDb);
        } catch (error) {
            reject(error)
        }
    })

}


const getFollowingList = ({ followerUserId, SKIP }) => {
    return new Promise(async (resolve, reject) => {
        try {

            // We can also user populate method by mongoose 
            // const followingListDb = await followSchema.find({ 
            //     followerUserId : followerUserId,
            // }).populate("followingUserId");


            const followingListDb = await followSchema.aggregate([
                { $match: { followerUserId: followerUserId } },
                { $sort: { createDatetime: -1 } },
                { $skip: SKIP },
                { $limit: LIMIT }
            ]);

            const followingUserIdsList =
                followingListDb.map((follow) => follow.followingUserId);


            const followingUserDetails = await userschema.find({
                _id: { $in: followingUserIdsList }
            })

            console.log(followingListDb);
            console.log(followingUserIdsList)
            console.log(followingUserDetails)


            resolve(followingUserDetails.reverse())

        } catch (error) {
            reject(error)
        }
    });
}

const unfollowUser = ({ followerUserId, followingUserId }) => {
    return new Promise(async (resolve, reject) => {

        try {
            const followDb = await followSchema.findOneAndDelete({
                followerUserId, followingUserId
            });
            resolve(followDb);
        } catch (error) {
            reject(error);
        }
    })
}


module.exports = { followUser, getFollowingList, unfollowUser }