const mongoose = require("mongoose");

const uri =
    "mongodb+srv://developer_1:auag721003lp5@cluster0-s17oc.mongodb.net/mywebstore?retryWrites=true&w=majority";

const db = mongoose.connection;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .catch(err => consloe.log(err));

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

// evento de conección once= solo una vez se ejecuta el evento
db.once("open", _ => {
    console.log("Database is connected to", uri);
});

// evento cuando haya algun error
db.on("error", err => {
    console.log(err);
});
