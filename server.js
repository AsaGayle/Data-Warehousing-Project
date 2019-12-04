const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const c_data = mongoose.connection;
const TimeStamp = require('./Models/TimeStamp').TimeStamp;

const data_path_1 = require('./config/keys').data_path_1;
//const data_path_2 = require('./config/keys').data_path_2;

const fs = require('fs');
const csv = require('fast-csv');

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(console.log("Mongodb Database connected!!!.."))
    .catch((err) => console.log(err));

let read = false;

c_data.on('error', console.error.bind(console, 'MongoDB connection error:'));

var count = 924447;

//FS reads the file name for each file in the 
let files = fs.readdirSync(data_path_1); 
files.forEach(file_name => {
    let stamp1;
    fs.createReadStream(data_path_1+file_name)
        .pipe(csv.parse({headers:false}))
        .on('data', row => {
        stamp1  = new TimeStamp({
            _id: count,
            event_Type: row[2],
            userID: row[3],
            repoID: row[4],
            repoStatus: row[5],
            repoBool: row[6]
        })

        stamp1.save((err, stamp) => {
            if(err) return console.error(err);
                console.log(err);
        });
            count++;
        });
})