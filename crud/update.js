require("../connection");

const User = require("../models/User");

const someFunction = async () => {
    const user = await User.findOne({ username: "negro" });
    console.log(user);
    user.password = "minuevacontraseña";
    user.save();
};

const otherFunction = async () => {
    const user = await User.findOneAndUpdate(
        { username: "gorda" },
        {
            name: "Camila Baptista"
        },
        { new: true }
    );
    console.log(user);
};

async function updateUser() {
    const user = await User.update(
        { username: "fazt" },
        {
            password: "contraseñasegura"
        }
    );
    console.log(user);
}

//updateUser();
//someFunction();
otherFunction();
