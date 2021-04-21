import { useState } from "react";
import axios from "axios";


//import { Redirect } from 'react-router-dom'
const Order = (props) => {

    const [order, setOrder] = useState({
        userName: '',
        product:'',
        outlet:'',
        quantity:'',
        cost:''
    })
    let setValues = (e) => setOrder({ ...order, [e.target.name]: e.target.value })

    const { userName,product,outlet,quantity,cost } = order;

    const formSubmit = (e) => {
        e.preventDefault();
       

        console.log(order);

        axios.post('http://localhost:8980/api/orders', order)
            .then(res => console.log(res.data));
       
           //clearing input form
            setOrder({ userName: '',
            product:'',
            outlet:'',quantity:'',cost:''})

 }

    return (
        <div>
             <div className="ticketapp">           
              <form onSubmit={formSubmit}>

<h4 className="modal-title">Add Order</h4>
<div className="form-group">
<input type="text" className="form-control" placeholder="UserName" required="required" value={userName} name='userName'
        onChange={setValues}/>
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Outlet" required="required" value={outlet} name='outlet'
        onChange={setValues} />
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Product" required="required" value={product} name='product'
        onChange={setValues} />
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Quantity" required="required" value={quantity} name='quantity'
        onChange={setValues} />
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Cost" required="required" value={cost} name='cost'
        onChange={setValues} />
</div>



<input type="submit" className="btn btn-primary btn-block btn-lg" value="Place Order"/>              
</form>
</div>
        </div>

    )

}

export default Order
