require("./connection");

const User = require("./models/User");

async function createUsers() {
    const userOne = new User({
        username: "Gaby",
        password: "54321"
    });
    await userOne.save();

    const userTwo = new User({
        username: "gorda",
        password: "passwordsecure"
    });
    await userTwo.save();
}

createUsers();
