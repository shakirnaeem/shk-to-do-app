const Model = require('../models/brand.model.js').schema;
const ModelDto = require('../models/brand.model.js').Dto;
//const appController = require('../controllers/brand.controller.js');

module.exports = (app) => {
    attchDependancy = (req, res, next) => {
        req.model = Model;
        req.modelDto = ModelDto;
        next();
    };

    // Retrieve all Notes
    app.get('/brands', (req, res) => {
        res.send("test shk");
    });
}