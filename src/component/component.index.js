import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeRow = props => (
    <tr>
        <td>{props.employee.fname}</td>
        <td>{props.employee.lname}</td>
        <td>{props.employee.nic}</td>
        <td>
            <Link to={"/edit/"+props.employee._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
            <button>Delete</button>
        </td>
    </tr>
);

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {employee: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/employee/')
            .then(res=>{
                this.setState({employee: res.data});
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    employeeList() {
        return this.state.employee.map(function(currentEmployee, i) {
            return <EmployeeRow employee={currentEmployee} key={i} />
        });
    }

    render() {
        return (
            <div className="container">
                <p>Inside index</p>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>NIC</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.employeeList()}
                    </tbody>
                </table>
            </div>
        );
    }
}