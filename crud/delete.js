require("../connection");

const Product = require("../models/Product");

// Borrar dos o mas registros con el mismo nombre (name)
const someFunction = async () => {
    const result = await Product.deleteMany({ name: "Keyboard" });
    console.log(result);
};

// Borrar un solo registro por el nombre
// si hay muchos con el mismo nombre solo elimina el primero
const otherFunction = async () => {
    const result = await Product.deleteOne({ name: "laptop" });
    console.log(result);
};

// Busca un registro por el nombre y lo borra
const oneMoreFunction = async () => {
    const result = await Product.deleteOne({ name: "laptop lenovo" });
    console.log(result);
};

// Busca un registro por id y lo borra
const byIdFunction = async () => {
    const result = await Product.findByIdAndDelete("5e303c9c78a6791784fe858b");
    console.log(result);
};

//someFunction();
//otherFunction();
//oneMoreFunction();
byIdFunction();
