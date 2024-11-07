const blogSchema = require("../schemas/blogSchema");

const createBlog = ({ title, textBody, userId }) => {
    return new Promise(async (resolve, reject) => {
        const blogObj = new blogSchema({
            title: title,
            textBody: textBody,
            userId: userId,
            creationDateTime: Date.now(),
        });
        try {
            const blogDb = await blogObj.save();
            return resolve(blogDb);
        } catch (error) {
            return reject(error)
        }
    });
};

module.exports = { createBlog }; 