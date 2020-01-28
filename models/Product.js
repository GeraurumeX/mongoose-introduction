// Schema es para mongoose y model para noostros para agregar o eliminar productos
const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String
    },
    description: String,
    price: {
        type: Number,
        default: 0
    }
});

module.exports = model("Product", productSchema);
