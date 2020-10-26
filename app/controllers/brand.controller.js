const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

function BrandController() {    
}

BrandController.prototype.create = async (req, res) => {
    let response = { errors: [], data: {} }
    try {
        var model = Object.seal(new req.model());
        model = Object.assign(model, req.body);
        //Save Note in the database
        response.data = await model.save();
    } catch (error) {
    }
    res.send(response);
}

BrandController.prototype.findAll = async (req, res) => {
    let response = { errors: [], data: {} }
    //response.data = await req.model.find({ title: new RegExp('my title', "i") });
    var data = myCache.get("_BRANDS_");
    if(data == undefined){
        data = await req.model.find();
        myCache.set("_BRANDS_", data);
    }
    response.data = data;
    res.send(response);
};

module.exports = BrandController;