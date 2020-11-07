const express = require('express');
const employeeRoute =  express.Router();

let Employee = require('./employee.model');

employeeRoute.route('/add').post(function(req,res) {
    let employee = new Employee(req.body);
    employee.save()
        .then(employee => {
            res.status(200).json({employee: 'employee added successfully'});
        });
});

employeeRoute.route('/').get(function(req,res) {
    Employee.find(function(err,employee) {
        if(err) {
            console.log(err);
        }else {
            res.json(employee);
        }
    });
})

module.exports = employeeRoute;