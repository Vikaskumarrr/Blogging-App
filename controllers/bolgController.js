const {
    createBlog,
    getAllBlogs,
    getMyBlogs,
    getBlogWithId,
    editBlogsWithId,
    deleteBlogWithId } = require("../models/blogModel");

const bolgUtils = require("../utils/bolgUtils");

const createBlogController = async (req, res) => {

    const { title, textBody } = req.body;
    const userId = req.session.user.userId;

    try {
        await bolgUtils({ title, textBody });
    } catch (error) {
        return res.send({
            status: 400,
            message: "Invaild data",
            error: error
        });
    };

    try {
        const blogDb = await createBlog({ title, textBody, userId });

        return res.send({
            status: 201,
            message: "Blog created succesfully",
            data: blogDb,
        });
    } catch (error) {
        return res.send({
            status: 500,
            message: "Internal Server error",
            error: error,
        });
    };
};

const getAllBlogsController = async (req, res) => {
    const SKIP = Number(req.query.skip) || 0;

    try {
        const blogDb = await getAllBlogs({ SKIP })

        if (blogDb.length === 0) {
            return res.send({
                status: 204,
                message: "NO BLOG FOUND",
            })
        }

        return res.send({
            status: 200,
            message: "Read Success",
            data: blogDb
        });
    } catch (error) {
        return res.send({
            status: 500,
            messgae: "Internal server error",
            error: error,
        });
    }
};

const getMyBlogsController = async (req, res) => {
    const SKIP = Number(req.query.skip) || 0;
    const userId = req.session.user.userId;

    try {
        const MyblogDb = await getMyBlogs({ SKIP, userId });

        if (MyblogDb.length === 0)
            return res.send({
                status: 204,
                message: "NO Blogs Found",
            })

        return res.send({
            status: 200,
            message: "Read Success",
            data: MyblogDb,
        })
    } catch (error) {
        return res.send({
            stauts: 500,
            message: "Internal Server error",
            error: error,
        });
    };
};

const editBlogsController = async (req, res) => {
    // console.log(req.body);

    // Data validation
    // Find the blog with blogId
    // owner ship cheak
    // if time is less then 30 mint 
    // update the blogs


    const { title, textBody, blogId } = req.body;
    const userId = req.session.user.userId;

    try {
        await bolgUtils({ title, textBody });
    } catch (error) {
        return res.send({
            status: 400,
            message: "Invaild Data",
            error: error
        })
    }

    try {
        const blogDb = await getBlogWithId({ blogId })
        console.log(blogDb);

        // console.log(userId, blogDb.userId)

        if (!userId.equals(blogDb.userId)) {
            return res.send({
                status: 403,
                message: "Not allow to edit this blog"
            })
        }

        console.log(blogDb.createDateTime , Date.now());
        const diff = (Date.now() - blogDb.createDateTime) / (1000 * 60);
        if (diff > 30) {
            return res.send({
                status: 400,
                message: "Not Alow to edit blog after 30 mis of Creation",
            })
        }

        const updatedBlogDb = await editBlogsWithId({ title, textBody, blogId })

        return res.send({
            status: 200,
            message: "Blog updated sucessfully",
            data: updatedBlogDb,
        });

    } catch (error) {
        return res.send({
            status: 500,
            message: "Internal Server Error",
            error: error
        });
    }

};

const deleteBlogController = async(req,res)=>{ 
    const blogId = req.body.blogId ; 
    const userId = req.session.user.userId ; 

    try {
        const blogDb = await getBlogWithId({blogId})

        if(!userId.equals(blogDb.userId)){ 
            return res.send({ 
                status : 403,
                message : "Not allow to delete this blog",
            })
        }

        const deleteBlogDb = await deleteBlogWithId({blogId})
        
        return res.send({ 
            status : 200, 
            message : "Delete Successfull",
            data : deleteBlogDb,
        })

    } catch (error) {
        return res.send({ 
            status : 500,
            message : "Internal server Error",
            error : error,
        });
    }
}


module.exports = {
     createBlogController,
     getAllBlogsController,
     getMyBlogsController,
     editBlogsController,
     deleteBlogController
     }; 