import { useState } from "react";
import axios from "axios";


//import { Redirect } from 'react-router-dom'
const User = (props) => {

    const [user, setUser] = useState({
        name: '',
        phonenumber:'',
        reportingmanager:''
    })
    let setValues = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const { name,phonenumber,reportingmanager } = user;

    const formSubmit = (e) => {
        e.preventDefault();
       

        console.log(user);

        axios.post('http://localhost:8980/api/users', user)
            .then(res => console.log(res.data));
       
           //clearing input form
            setUser({ name: '',
            phonenumber:'',
            reportingmanager:''})

 }

    return (
        <div>
             <div className="ticketapp">           
              <form onSubmit={formSubmit}>

<h4 className="modal-title">Add User</h4>
<div className="form-group">
<input type="text" className="form-control" placeholder="Name" required="required" value={name} name='name'
        onChange={setValues}/>
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Reportingmanager" required="required" value={reportingmanager} name='reportingmanager'
        onChange={setValues} />
</div>
<div className="form-group">
<input type="text" className="form-control" placeholder="Phonenumber" required="required" value={phonenumber} name='phonenumber'
        onChange={setValues} />
</div>




<input type="submit" className="btn btn-primary btn-block btn-lg" value="Create"/>              
</form>
</div>
        </div>

    )

}

export default User
