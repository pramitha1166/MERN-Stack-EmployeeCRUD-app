import React, {Component} from 'react';
import axios from 'axios';


export default class Create extends Component {

    constructor(props) {
        super(props);
        this.OnChangeFname = this.onChangeFname.bind(this);
        this.onChangeLname = this.onChangeLname.bind(this);
        this.onChangeNic = this.onChangeNic.bind(this);
        this.onSubmitAddEmployee = this.onSubmitAddEmployee.bind(this);

        this.state = {
            fname: '',
            lname: '',
            nic: ''
        }

    }

    onChangeFname(e) {
        this.setState({
            fname: e.target.value
        });
    }

    onChangeLname(e) {
        this.setState({
            lname: e.target.value
        });
    }

    onChangeNic(e) {
        this.setState({
            nic: e.target.value
        });
    }

    onSubmitAddEmployee(e) {
        e.preventDefault();
        
        const obj = {
            fname: this.state.fname,
            lname: this.state.lname,
            nic: this.state.nic
        }

        axios.post('http://localhost:4000/employee/add', obj).then(
            res=>{
                console.log(res.data);
                console.log("added");
            },
            err=>{console.log('Error with adding data'+err)}
            );

        //console.log(`form submitted`);
       // console.log(`fname: ${this.state.fname}`);
        
        this.setState({
            fname: '',
            lname: '',
            nic: ''
        });
        
    }

    render() {
        return (
            <div className="container">
                <h3>Add New Employee</h3>
                <form onSubmit={this.onSubmitAddEmployee}>
                    <div className="from-group">
                        <label>Enter first name:</label>
                        <input type="text" className="form-control" onChange={this.OnChangeFname} value={this.state.fname}/>
                    </div>
                    <div className="from-group">
                        <label>Enter Last name:</label>
                        <input type="text" className="form-control" onChange={this.onChangeLname} value={this.state.lname}/>
                    </div>
                    <div className="from-group">
                        <label>Enter NIC:</label>
                        <input type="text" className="form-control" onChange={this.onChangeNic} value={this.state.nic}/>
                    </div>
                    <div className="from-group">
                        <input type="submit" className="btn btn-primary mt-2" value="Add new employee"/>
                    </div>
                </form>
            </div>
        );
    }
}