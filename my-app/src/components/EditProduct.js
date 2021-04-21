import React, { Component } from 'react';
import axios from "axios";


class EditProduct extends Component {

    constructor(props){
        super();
        this.state = {
            name: "",
            cost: "",
            products: []
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/products/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    cost: res.data.cost
                })
            })
            .catch(function (error){
                console.log(error);
            })

       
    }

    onChangeName(e) {
        this.setState({ name: e.target.value})
    }
    onChangeCost(e) {
        this.setState({ cost: e.target.value})
    }
   
   
    onSubmit(e) {
        e.preventDefault();
        const product = {
            name: this.state.name,
            cost: this.state.cost,
        }

        console.log(product);

        axios.put('http://localhost:8980/api/products/'+this.props.match.params.id, product)
            .then(res => console.log(res.data));

        window.location = "/";
    }
    
    render() { 
        return ( 
            <div className="container">
                <h3>Edit Product </h3>
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
                        <label>Cost: </label>
                        <input
                            type="text" required
                            className="form-control"
                            value={this.state.cost}
                            onChange={this.onChangeCost}
                        />
                    </div>
                  
                   
                    <div className="form-group">
                        <input type="submit" value="Edit Product Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
         );
    }
}
 
export default EditProduct;