const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

const mogoose = require('mongoose');
const config = require('./DB.js');
const employeeRoutes = require('./employee.route');

mogoose.Promise = global.Promise;
mogoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=> {console.log('Database is connected')},
    err=>{console.log('Error with connecting database'+err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/employee', employeeRoutes);

app.listen(PORT, function() {
    console.log("Server is running on PORT: " + PORT);
});