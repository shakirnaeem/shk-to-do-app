function BrandController() {
    // Retrieve and return all data.
    
}

BrandController.prototype.findAll = async (req, res) => {
    let response = { errors: [], data: {} }
    //response.data = await req.model.find({ title: new RegExp('my title', "i") });
    response.data = await req.model.find();
    res.send(response);
};

module.exports = BrandController;