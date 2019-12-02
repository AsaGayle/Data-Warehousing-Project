const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const data_path_1 = require('./config/keys').data_path_1;
//const data_path_2 = require('./config/keys').data_path_2;
const fs = require('fs');
const csv = require('fast-csv');

mongoose
    .connect(db)
    .then(console.log("Mongodb Database connected!!!.."))
    .catch((err) => console.log(err));

let read = false;

class TimeStamp {
    constructor(date, time, event_type, userID, repoID, repoStatus, repoBool){
        this.date = date;
        this.time = time;
        this.event_type = event_type;
        this.userID = userID;
        this.repoID = repoID;
        this.repoStatus = repoStatus;
        this.repoBool = repoBool;
    }
}
let date_test = new Date('2015-01-01T00:5:6');
let date_test_2 = new Date('1999-01-01T00:5:6');
console.log(date_test.getFullYear() > date_test_2.getFullYear());

// // FS reads the file name for each file in the 
// fs.readdirSync(data_path_1).forEach(file_name => {
//     if(!read){
//         fs.createReadStream(data_path_1+file_name)
//         .pipe(csv.parse({headers:false}))
//         .on('data', row => {
//             let temp = new TimeStamp(row[0],row[1],row[2],row[3],row[4],row[5],row[6])
//             console.log(temp);
//         });
//         read = true;
//     }
// })

