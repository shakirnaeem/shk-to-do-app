const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name: String,
    slug: String,
    numberOfDevices: Number,
    isDeleted: Boolean,
    position: Number,
    isPopular: Boolean
}, {
    timestamps: false
});

class brandDto{
    constructor(){
        this.name = "";
        this.slug = "";
        this.numberOfDevices = 0;
        this.isDeleted = false;
        this.position = 0;
        this.isPopular = false;
    }
}

module.exports = { schema: mongoose.model('brand', brandSchema), Dto: brandDto };