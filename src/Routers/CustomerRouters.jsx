import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../clients/pages/HomePage/HomePage'
import Cart from '../clients/components/Cart/Cart'
import Navigation from '../clients/components/navigation/Navigation'
import Footer from '../clients/components/Footer/Footer'
import Product from '../clients/components/Product/Product'
import ProductDetails from '../clients/components/ProductDetails/ProductDetails'
import Checkout from '../clients/components/Checkout/Checkout'
import Order from '../clients/components/Order/Order'
import OrderDetails from '../clients/components/Order/OrderDetails'
import PaymentSuccess from '../clients/components/Payment/PaymentSuccess'

const CustomerRouters =() =>{
    return(
        <div>

            <div>
            <Navigation/>
            </div>

            <Routes>

            <Route  path='/login' element={ <HomePage/>}></Route>
            <Route  path='/register' element={ <HomePage/>}></Route>

            <Route  path='/' element={ <HomePage/>}></Route>
            <Route  path='/cart' element={ <Cart/>}></Route>
            <Route  path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route  path='product/:productId' element={<ProductDetails/>}></Route>
            <Route  path='/checkout' element={<Checkout/>}></Route>
            <Route  path='/account/order' element={<Order/>}></Route>
            <Route  path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            <Route  path='/payment/:orderId' element={<PaymentSuccess/>}></Route>
                
               
                  {/* <Order/>*/}
                  {/* <OrderDetails/>*/}
 </Routes>
            <div>
            <Footer/>
            </div>
        </div>


    )
}
export default CustomerRouters