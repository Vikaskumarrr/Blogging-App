// const followSchema = require("../schemas/followSchema")
const followSchema = require("../schemas/followSchema")

const followUser = ({ followerUserId , followingUserId }) => {
    return new Promise(async (resolve, reject) => {
        
        try {

            // check if aclready in db or not
            const followerAlreadyDb = await followSchema.findOne({
                followerUserId,
                followingUserId
            })

            if(followerAlreadyDb){ 
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


const getFollowingList = ({followerUserId, SKIP })=>{ 
    return new Promise((resolve ,reject)=>{
        
    });
}
module.exports = {followUser,getFollowingList}