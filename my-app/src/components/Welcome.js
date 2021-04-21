
import { Link } from 'react-router-dom'


const Welcome = (props) => {

    
       
    return (
        <div>
            <div className="container">
  <div className="row my-4">
    <div className="col">
      <div className="dut">
     
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex">
              <div className="card card-body flex-fill">
                            <Link className="nav-link" to="/user">User</Link>
                        
              </div>
            </div>
            <div className="col d-flex">
              <div className="card card-body flex-fill">
              <Link className="nav-link" to="/product">Product </Link>

            </div>
            </div>
            <div className="col d-flex">
              <div className="card card-body flex-fill">
              <Link className="nav-link" to="/order">Order</Link>

                  
             </div>
            </div>
            <div className="col d-flex">
              <div className="card card-body flex-fill">
              <Link className="nav-link" to="/outlet">Outlet</Link>

             </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
            

</div>

        </div>

    )

}

export default Welcome
