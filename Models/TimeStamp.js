const mongoose = require('mongoose');

const TimeStamp = mongoose.model('TimeStamp', new mongoose.Schema({
    _id:Number,
    
    // stamp_Date:{
    //     type: Date,
    //     required: true
    // },
    event_Type:{
        type: String,
        default: " ",
        required: true
    },
    userID:{
        type: String,
        default: "AAAAA",
        required: true
    },
    repoID:{
        type: String,
        default: "AAAAA",
        required: true
    },
    repoStatus:{
        type: String,
        required: false
    },
    repoBool:{
        type: String,
        required: false
    }
}));

exports.TimeStamp = TimeStamp;
