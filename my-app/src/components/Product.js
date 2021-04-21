import { useState } from "react";
import axios from "axios"

const Product = (props) => {

    const [product, setProduct] = useState({
        name: '',
        cost:''    })
    let setValues = (e) => setProduct({ ...product, [e.target.name]: e.target.value })

    const { name,cost } = product;

    const formSubmit = (e) => {
        console.log("hi")
        e.preventDefault();
        axios.post('http://localhost:8980/api/products', product)
        .then(res => console.log(res.data));
   
       //clearing input form
        setProduct({ name: '',
        cost:''})

}
        

 

    return (
        <div>
            
             <div className="ticketapp">           
              <form onSubmit={formSubmit}>

<h4 className="modal-title">Add Product</h4>
<div className="form-group">
<input type="text" className="form-control" placeholder="name" required="required" value={name} name='name'
        onChange={setValues}/>
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="cost" required="required" value={cost} name='cost'
        onChange={setValues} />
</div>




<input type="submit" className="btn btn-primary btn-block btn-lg" value="Submit"/>              
</form>
</div>

        </div>

    )

}

export default Product
