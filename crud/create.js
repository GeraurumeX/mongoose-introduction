require("../connection");

const Product = require("../models/Product");

// Otra forma de escribir las funciones con la funcion de flecha
const createProducts = async () => {
    const laptopone = new Product({
        name: "laptop hp",
        description: "hp pavilion 15"
    });
    await laptopone.save();

    const laptoptwo = new Product({
        name: "laptop lenovo",
        description: "lenovo x1"
    });
    await laptoptwo.save();
};

createProducts();
