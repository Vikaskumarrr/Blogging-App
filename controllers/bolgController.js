const createBlog = require("../models/blogModel");
const bolgUtils = require("../utils/bolgUtils");

const blogController = async (req, res) => {

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
        const blogDb = await createBlog({ title, textBody, userId })
        return res.send({
            status: 201,
            message: "Blog created succesfully",
            data: blogDb,
        });
    } catch (error) {
        return res.send({
            status: 400,
            message: "Internal Server error",
            error: error,
        });
    };
};



module.exports =  {blogController} ; 