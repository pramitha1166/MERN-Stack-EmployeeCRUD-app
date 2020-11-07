const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    nic: {
        type: String
    }
});

module.exports = mongoose.model('Employee',Employee);