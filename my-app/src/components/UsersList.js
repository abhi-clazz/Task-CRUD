import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const User = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.phonenumber}</td>
        <td>{props.user.reportingmanager}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/edituser/"+props.user.id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteUser(props.user.id) }}>Delete</button>
        </td>
    </tr>
)

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/users/')
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteUser(id) {
        axios.delete('http://localhost:8980/api/users/' +id)
            .then(res => console.log(res.data));

        this.setState({ users: this.state.users.filter(el => el.id !== id)})
    }

    usersList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser.id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3> Users</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>PhoneNumber</th>
                            <th>relational manager</th>
                            <th>Action</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default UsersList;