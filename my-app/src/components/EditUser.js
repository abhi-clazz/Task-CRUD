import React, { Component } from 'react';
import axios from "axios";


class EditUser extends Component {

    constructor(props){
        super();
        this.state = {
            name: "",
            phonenumber: "",
            reportingmanager: "",
            users: []
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
        this.onChangeReportingmanager = this.onChangeReportingmanager.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/users/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    phonenumber: res.data.phonenumber,
                    reportingmanager: res.data.reportingmanager
                })
            })
            .catch(function (error){
                console.log(error);
            })

       
    }

    onChangeName(e) {
        this.setState({ name: e.target.value})
    }
    onChangePhonenumber(e) {
        this.setState({ phonenumber: e.target.value})
    }
    onChangeReportingmanager(e) {
        this.setState({ reportingmanager: e.target.value})
    }
   
    onSubmit(e) {
        e.preventDefault();
        const user = {
            name: this.state.name,
            phonenumber: this.state.phonenumber,
            reportingmanager: this.state.reportingmanager,
        }

        console.log(user);

        axios.put('http://localhost:8980/api/users/'+this.props.match.params.id, user)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit User </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type='text' 
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName} >
                            
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Phonenumber: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.phonenumber}
                            onChange={this.onChangePhonenumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Reportingmanager </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.reportingmanager}
                            onChange={this.onChangeReportingmanager}
                        />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Edit User Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditUser;