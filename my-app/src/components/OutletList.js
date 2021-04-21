import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Outlet = props => (
    <tr>
        <td>{props.outlet.name}</td>
        <td>{props.outlet.phonenumber}</td>
        <td>{props.outlet.address}</td>
        <td>
            <button className="btn"><Link to={"/editoutlet/"+props.outlet.id} >
                Edit</Link></button>    </td>  
                 <td>
                <button className="btn btn-danger" onClick={() => {props.deleteOutlet(props.outlet.id) }}>Delete</button>
        </td>
    </tr>
)

class OutletsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outlets: []
        }

        this.deleteOutlet = this.deleteOutlet.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/outlets/')
            .then(res => {
                this.setState({ outlets: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteOutlet(id) {
        axios.delete('http://localhost:8980/api/outlets/' +id)
            .then(res => console.log(res.data));

        this.setState({ outlets: this.state.outlets.filter(el => el.id !== id)})
    }

    outletsList() {
        return this.state.outlets.map(currentoutlet => {
            return <Outlet outlet={currentoutlet} deleteOutlet={this.deleteOutlet} key={currentoutlet.id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3> Outlets</h3>
                <table className="table table-striped table-hover">
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>PhoneNumber</th>
                            <th>Address</th>
                            <th  >Update</th>
                            <th  >Delete</th>


                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.outletsList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default OutletsList;