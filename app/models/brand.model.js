const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name: String,
    slug: String,
    numberOfDevices: Number,
    isDeleted: Boolean,
    position: Number
}, {
    timestamps: true
});

class brandDto{
    constructor(){
        this.name = "";
        this.slug = "";
        this.numberOfDevices = 0;
        this.isDeleted = false;
        this.position = 0;
    }
}

module.exports = { schema: mongoose.model('brand', brandSchema), Dto: brandDto };