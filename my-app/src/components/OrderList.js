import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Order = props => (
    <tr>
        <td>{props.order.userName}</td>
        <td>{props.order.product}</td>
        <td>{props.order.outlet}</td>
        <td>{props.order.quantity}</td>

        <td>{props.order.cost}</td>

        <td>
            <button className="btn btn-secondary"><Link to={"/editorder/"+props.order.id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteOrder(props.order.id) }}>Delete</button>
        </td>
    </tr>
)

class OrdersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }

        this.deleteOrder = this.deleteOrder.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/orders/')
            .then(res => {
                this.setState({ orders: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteOrder(id) {
        axios.delete('http://localhost:8980/api/orders/' +id)
            .then(res => console.log(res.data));

        this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
    }

    ordersList() {
        return this.state.orders.map(currentorder => {
            return <Order order={currentorder} deleteOrder={this.deleteOrder} key={currentorder.id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3> Orders</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>product</th>
                            <th>outlet</th>

                            <th>Quantity</th>
                            <th>Cost</th>
                            <th>Action</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.ordersList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default OrdersList;