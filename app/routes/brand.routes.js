const Model = require('../models/brand.model.js').schema;
const ModelDto = require('../models/brand.model.js').Dto;

module.exports = (app) => {
    const appController = require('../controllers/brand.controller.js');

    attchDependancy = (req, res, next) => {
        req.model = Model;
        req.modelDto = ModelDto;
        next();
    };

    // Create a new Note
    app.post('/brands', attchDependancy, appController.create);

    // Retrieve all Notes
    app.get('/brands', attchDependancy, appController.findAll);

    // Retrieve a single Note with noteId
    app.get('/brands/:id', attchDependancy, appController.findOne);

    // Update a Note with noteId
    app.put('/brands/:id', attchDependancy, appController.update);

    // Delete a Note with noteId
    app.delete('/brands/:id', attchDependancy, appController.delete);
}