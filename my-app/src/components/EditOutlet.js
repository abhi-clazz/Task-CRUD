import React, { Component } from 'react';
import axios from "axios";


class EditOutlet extends Component {

    constructor(props){
        super();
        this.state = {
            name: "",
            phonenumber: "",
            address: 0,
            outlets: []
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/outlets/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    phonenumber: res.data.phonenumber,
                    address: res.data.address
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
    onChangeAddress(e) {
        this.setState({ address: e.target.value})
    }
   
    onSubmit(e) {
        e.preventDefault();
        const outlet = {
            name: this.state.name,
            phonenumber: this.state.phonenumber,
            address: this.state.address,
        }

        console.log(outlet);

        axios.put('http://localhost:8980/api/outlets/'+this.props.match.params.id, outlet)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit Outlet </h3>
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
                        <label>Address </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Edit Outlet Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditOutlet;