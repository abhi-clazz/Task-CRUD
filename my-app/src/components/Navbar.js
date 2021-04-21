import { Link } from 'react-router-dom'


const Navbar=(props)=> {
    
        return (
           
            <nav className="navbar navbar-expand-lg navbar-light"  >
                <span className="navbar-brand">Order Collection System</span>
                <div className="collapse navbar-collapse show" >

                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/user">User </Link>
                 </li>
                    
                     <li className="nav-item">
                            <Link className="nav-link" to="/outlet">Outlet</Link>
                     </li>
                     <li className="nav-item">
                            <Link className="nav-link" to="/order">Order</Link>
                     </li>
                     <li className="nav-item">
                            <Link className="nav-link" to="/users">Read Users</Link>
                     </li>
                     <li className="nav-item">
                            <Link className="nav-link" to="/products">Read Products</Link>
                     </li>
                     <li className="nav-item">
                            <Link className="nav-link" to="/outlets">Read Outlets</Link>
                     </li>
                     
                     
                    </ul>
                </div>
            </nav>
        )
    }




    
  
   
    
    export default Navbar