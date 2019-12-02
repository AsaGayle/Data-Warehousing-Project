const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const data_path = require('./config/keys').data_path;
const fs = require('fs');
const csv = require('fast-csv');

mongoose
    .connect(db)
    .then(console.log("Mongodb Database connected!!!.."))
    .catch((err) => console.log(err));

let read = false;

// FS reads the file name for each file in the 
fs.readdirSync(data_path).forEach(file_name => {
    if(!read){
        fs.createReadStream(data_path+file_name)
        .pipe(csv.parse({headers:false}))
        .on('data', row => console.log(row[0]));
        read = true;
    }

    console.log(data_path+file_name);
})
console.log(db);