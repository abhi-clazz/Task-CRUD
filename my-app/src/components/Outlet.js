import { useState } from "react";
import axios from "axios"
//import { Redirect } from 'react-router-dom'
const Outlet = (props) => {

    const [outlet, setOutlet] = useState({
        name: '',
        phonenumber:'',
        address:''
    })
    let setValues = (e) => setOutlet({ ...outlet, [e.target.name]: e.target.value })

    const { name,phonenumber,address } = outlet;

    const formSubmit = (e) => {
        console.log("hi")
        e.preventDefault();
        axios.post('http://localhost:8980/api/outlets', outlet)
        .then(res => console.log(res.data));
   
       //clearing input form
        setOutlet({ name: '',
        phonenumber:'',
        address:''})

}

 

    return (
        <div>
             <div className="ticketapp">           
              <form onSubmit={formSubmit}>

<h4 className="modal-title">Add Outlet</h4>
<div className="form-group">
<input type="text" className="form-control" placeholder="name" required="required" value={name} name='name'
        onChange={setValues}/>
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="address" required="required" value={address} name='address'
        onChange={setValues} />
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="phonenumber" required="required" value={phonenumber} name='phonenumber'
        onChange={setValues} />
</div>




<input type="submit" className="btn btn-primary btn-block btn-lg" value="Submit"/>              
</form>
</div>
        </div>

    )

}

export default Outlet
