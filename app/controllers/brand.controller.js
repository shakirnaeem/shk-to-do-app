let messages = require("../Utilities/messages");

class BrandController {
    // Create and Save
    static create = async (req, res) => {
        let response = { errors: [], data: {} }
        try {
            var model = Object.seal(new req.model());
            model = Object.assign(model, req.body);
            //Save Note in the database
            response.data = await model.save();
        } catch (error) {
            errorCallback(error, response);
        }
        res.send(response);
    }

    // Retrieve and return all data.
    static findAll = async (req, res) => {
        let response = { errors: [], data: {} }
        //response.data = await req.model.find({ title: new RegExp('my title', "i") });
        response.data = await req.model.find();
        res.send(response);
    };

    // Find a single record
    static findOne = async (req, res) => {
        let response = { errors: [], data: {} }
        try {
            response.data = await req.model.findById(req.params.id);
        } catch (error) {
            errorCallback(error, response);
        }
        res.send(response);
    };

    // Update record identified by the Id in the request
    static update = async (req, res) => {
        let response = { errors: [], data: {} }
        try {
            var model = Object.seal(new req.modelDto());
            model = Object.assign(model, req.body);
            response.data = await req.model.findByIdAndUpdate(req.params.id, model, { new: true });
        } catch (error) {
            errorCallback(error, response);
        }
        res.send(response);
    };

    // Delete record with the specified Id in the request
    static delete = async (req, res) => {
        let response = { errors: [], data: {} }
        try {
            await req.model.findByIdAndRemove(req.params.id);
            response.data = messages.statusMessage.DELETED;
        } catch (error) {
            errorCallback(error, response);
        }
        res.send(response);
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