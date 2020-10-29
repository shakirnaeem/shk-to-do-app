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
    // var data = myCache.get("_BRANDS_");
    // if(data == undefined){
    //     data = await req.model.find();
    //     myCache.set("_BRANDS_", data);
    // }
    response.data = [
        {
            "id": "5f957e4324841e97f8f9148e",
            "name": "Samsung"
        },
        {
            "id": "5f957e8224841e97f8f9148f",
            "name": "Realme"
        },
        {
            "id": "5f957e9224841e97f8f91490",
            "name": "QMobile"
        },
        {
            "id": "5f957ea524841e97f8f91491",
            "name": "Oppo"
        },
        {
            "id": "5f957ebc24841e97f8f91492",
            "name": "OnePlus"
        },
        {
            "id": "5f957fa024841e97f8f91493",
            "name": "Nokia"
        },
        {
            "id": "5f957fae24841e97f8f91494",
            "name": "Motorola"
        },
        {
            "id": "5f957fbc24841e97f8f91495",
            "name": "Xiaomi"
        },
        {
            "id": "5f957fca24841e97f8f91496",
            "name": "vivo"
        },
        {
            "id": "5f957fd824841e97f8f91497",
            "name": "TECNO"
        },
        {
            "id": "5f957fe724841e97f8f91498",
            "name": "Sony Ericsson"
        },
        {
            "id": "5f957ff624841e97f8f91499",
            "name": "Sony"
        },
        {
            "id": "5f95800424841e97f8f9149a",
            "name": "Microsoft"
        },
        {
            "id": "5f95801424841e97f8f9149b",
            "name": "Asus"
        },
        {
            "id": "5f95802324841e97f8f9149c",
            "name": "Apple"
        },
        {
            "id": "5f95803324841e97f8f9149d",
            "name": "LG"
        },
        {
            "id": "5f95804124841e97f8f9149e",
            "name": "Lenovo"
        },
        {
            "id": "5f95804d24841e97f8f9149f",
            "name": "Infinix"
        },
        {
            "id": "5f95805e24841e97f8f914a0",
            "name": "Huawei"
        },
        {
            "id": "5f95807224841e97f8f914a1",
            "name": "HTC"
        }
    ];
    
    //data.map(x => {return {id: x._id, "name": x.name}});
    res.send(response);
};

module.exports = BrandController;