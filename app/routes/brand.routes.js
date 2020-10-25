const Model = require('../models/brand.model.js').schema;
const ModelDto = require('../models/brand.model.js').Dto;
const appController = require('../controllers/brand.controller.js');

module.exports = (app) => {
    attchDependancy = (req, res, next) => {
        req.model = Model;
        req.modelDto = ModelDto;
        next();
    };

    const controller = new appController();

    // Retrieve all Notes
    app.get('/brands', controller.findAll);
}