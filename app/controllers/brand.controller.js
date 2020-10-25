let messages = require("../Utilities/messages");

class BrandController {
    // Retrieve and return all data.
    static findAll = (req, res) => {
        let response = { errors: [], data: {} }
        //response.data = await req.model.find({ title: new RegExp('my title', "i") });
        //response.data = await req.model.find();
        res.send("brand search");
    };
}

module.exports = BrandController;