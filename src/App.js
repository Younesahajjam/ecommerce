import logo from './logo.svg';
import './App.css';

import HomePage from './clients/pages/HomePage/HomePage';
import Footer from './clients/components/Footer/Footer';
import Navigation from './clients/components/navigation/Navigation';
import Product from './clients/components/Product/Product';
import ProductDetails from './clients/components/ProductDetails/ProductDetails';
import Cart from './clients/components/Cart/Cart';
import Checkout from './clients/components/Checkout/Checkout';
import Order from './clients/components/Order/Order';
import OrderDetails from './clients/components/Order/OrderDetails';
import CustomerRouters from './Routers/CustomerRouters';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="">
       <Routes>
            <Route  path='/*' element={<CustomerRouters/>}></Route>
          
            </Routes>
     
      
     
    </div>
  );
}

export default App;
