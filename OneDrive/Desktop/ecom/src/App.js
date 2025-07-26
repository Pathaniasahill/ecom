import logo from './logo.svg';
import './App.css';

import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Navbar from './customer/components/navigation/NavBar';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checout/Checkout';
import OrderSummary from './customer/components/Checout/OrderSummary';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';




function App() {
  return (
    <div className=" ">

      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
   
   
   </div>
  
  

  );
}

export default App;
