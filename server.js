const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(console.log("Mongodb Database connected!!!.."))
    .catch((err) => console.log(err));

console.log(db);