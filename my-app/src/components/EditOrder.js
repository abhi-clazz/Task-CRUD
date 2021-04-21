import React, { Component } from 'react';
import axios from "axios";


class EditOrder extends Component {

    constructor(props){
        super();
        this.state = {
            userName: "",
            product: "",
            outlet: "",
            quantity:0,
            cost:0,
            orders: []
        }
        this.onChangeUserName = this.onChangeUsername.bind(this);
        this.onChangeProduct = this.onChangeProduct.bind(this);
        this.onChangeOutlet = this.onChangeOutlet.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);

        this.onChangeCost = this.onChangeCost.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/orders/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    userName: res.data.userName,
                    product: res.data.product,
                    outlet: res.data.outlet,
                    quantity:res.data.quantity,
                    cost:res.data.cost
                })
            })
            .catch(function (error){
                console.log(error);
            })

       
    }

    onChangeUser(e) {
        this.setState({ name: e.target.value})
    }
    onChangeProduct(e) {
        this.setState({ phonenumber: e.target.value})
    }
    onChangeOutlet(e) {
        this.setState({ reportingmanager: e.target.value})
    }
   
    onSubmit(e) {
        e.preventDefault();
        const order = {
            userName: this.state.userName,
            product: this.state.product,
            outlet: this.state.outlet,
            quantity:this.state.quantity,
            cost:this.state.cost
        }

        console.log(order);

        axios.put('http://localhost:8980/api/orders/'+this.props.match.params.id, order)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit Order </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type='text' 
                            required
                            className="form-control"
                            value={this.state.userName}
                            onChange={this.onChangeUsername} >
                            
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Product: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.product}
                            onChange={this.onChangeProduct}
                        />
                    </div>
                    <div className="form-group">
                        <label>outlet </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.outlet}
                            onChange={this.onChangeOutlet}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangeOutlet}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cost </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.cost}
                            onChange={this.onChangeOutlet}
                        />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Edit Order Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditOrder;