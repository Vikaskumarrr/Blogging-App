const blogSchema = require("../schemas/blogSchema");

const createBlog = ({ title, textBody, userId }) => {
    return new Promise(async (resolve, reject) => {
        const blogObj = new blogSchema({
            title: title,
            textBody: textBody,
            userId: userId,
            createDateTime: Date.now(),
        });
        try {
            const blogDb = await blogObj.save();
            resolve(blogDb);
        } catch (error) {
             reject(error)
        }
    });
};

module.exports = { createBlog }; 