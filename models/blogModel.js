const { LIMIT } = require("../privateConstant");
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

const getAllBlogs = ({ SKIP }) => {
    return new Promise(async (resolve, reject) => {
        try {
            // sort, skip , limit
            const blogDb = await blogSchema.aggregate([
                { $sort: { createDateTime: -1 } },// Desending order for -1 ;
                { $skip: SKIP },
                { $limit: LIMIT }
            ]);
            resolve(blogDb);
        } catch (error) {
            reject(error)
        }
    });
};

const getMyBlogs = ({ SKIP, userId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            const MyBolgsDb = await blogSchema.aggregate([
                { $match: { userId: userId } },
                { $sort: { createDateTime: -1 } },
                { $skip: SKIP },
                { $limit: LIMIT }
            ])
            resolve(MyBolgsDb);
        } catch (error) {
            reject(error);
        };
    });
};

const getBlogWithId = ({ blogId }) => {
    return new Promise(async (resolve, reject) => {
        if (!blogId) return reject("Mission BlogId");

        try {

            const blogDb = await blogSchema.findOne({ _id: blogId })
            if (!blogDb) return reject(`Blog not found with BlogId:${blogId}`);

            resolve(blogDb)
        } catch (error) {
            reject(error);
        }
    })
}

const editBlogsWithId = ({ title, textBody, blogId }) => {
    return new Promise(async(resolve, reject) => {
        try {
            const blogDb = await blogSchema.findOneAndUpdate(
                { _id: blogId },
                { title, textBody },
                { new: true }
            );
            resolve(blogDb);
        } catch (error) {
            reject(error);
        }
    })
}


const deleteBlogWithId = ({blogId})=>{ 
    return new Promise(async(resolve, reject)=>{ 
            try {
                const blogDb = blogSchema.findOneAndDelete({_id : blogId})
                resolve(blogDb);
            } catch (error) {
                reject(error)
            }
    })
}


module.exports = { 
    createBlog,
    getAllBlogs,
    getMyBlogs,
    getBlogWithId,
    editBlogsWithId,
    deleteBlogWithId
 };


// 100 sort ---> 100 (DESC)(SKIP, LIMIT)---> 10(DESC)