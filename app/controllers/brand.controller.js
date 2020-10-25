let messages = require("../Utilities/messages");

class BrandController {
    // Retrieve and return all data.
    static findAll = async (req, res) => {
        let response = { errors: [], data: {} }
        //response.data = await req.model.find({ title: new RegExp('my title', "i") });
        //response.data = await req.model.find();
        res.send("brand search");
    };

    //-- callback
    static errorCallback = (error, response) => {
        if (error.kind === 'ObjectId')
            response.errors.push(messages.statusMessage.NOT_FOUND);
        else
            response.errors.push(error.message);
    }
}

module.exports = BrandController;