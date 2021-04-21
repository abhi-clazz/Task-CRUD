import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Product = props => (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.cost}</td>
        <td>
            <button className="btn btn-secondary"><Link to={"/editproduct/"+props.product.id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteProduct(props.product.id) }}>Delete</button>
        </td>
    </tr>
)

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:8980/api/products/')
            .then(res => {
                this.setState({ products: res.data })
            })
            .catch(error => console.log(error));
    }

    deleteProduct(id) {
        axios.delete('http://localhost:8980/api/products/' +id)
            .then(res => console.log(res.data));

        this.setState({ products: this.state.products.filter(el => el.id !== id)})
    }

    productsList() {
        return this.state.products.map(currentproduct => {
            return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct.id} />
        })
    }

    render() { 
        return ( 
            <div className="container">
                <h3> Products</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Action</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.productsList()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default ProductsList;