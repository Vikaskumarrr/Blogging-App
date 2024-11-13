const mongoose = require.apply('mongoose');
const Schema = mongoose.Schema

const followSchema = new Schema({
    followerUesrId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    followingUserId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    createDatetime: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('folow', followSchema);