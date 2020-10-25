function BrandController() {
    // Retrieve and return all data.
    
}

BrandController.prototype.findAll = (req, res) => {
    let response = { errors: [], data: {} }
    //response.data = await req.model.find({ title: new RegExp('my title', "i") });
    //response.data = await req.model.find();
    res.send("brand search");
};

module.exports = BrandController;