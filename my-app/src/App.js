import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { BrowserRouter as Router,Route } from 'react-router-dom'
import Outlet from './components/Outlet';
import Product from './components/Product';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';
import EditUser from './components/EditUser';
import EditProduct from './components/EditProduct';
import EditOutlet from './components/EditOutlet';
import ProductsList from './components/ProductList';
import OutletsList from './components/OutletList';
import OrdersList from './components/OrderList';
import Order from './components/Order';
import Welcome from './components/Welcome';
import User from './components/User';


 const  App=()=> {
  return   (
 
 <Router>
    <div  className="App   ">
      
   <Navbar></Navbar>
  

<Route exact path="/user" component={User}></Route>
<Route exact path="/home" component={Welcome}></Route>
<Route exact path="/" component={Welcome}></Route>

<Route exact path="/outlet" component={Outlet}></Route>

 <Route exact path="/order" component={Order}></Route>
<Route exact path="/edituser/:id" component={EditUser}></Route>
<Route exact path="/editproduct/:id" component={EditProduct}></Route>

<Route exact path="/editoutlet/:id" component={EditOutlet}></Route>
<Route exact path="/editorder/:id" component={EditOutlet}></Route>

<Route exact path="/product" component={Product}></Route>
<Route exact path="/users" component={UsersList}></Route>
<Route exact path="/products" component={ProductsList}></Route>
<Route exact path="/outlets" component={OutletsList}></Route>
<Route exact path="/orders" component={OrdersList}></Route>











    </div>
   
    </Router>
  )
    
}
export default App

