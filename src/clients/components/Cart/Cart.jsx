import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
import { store } from '../../../State/store';

const Cart= () => {
    const navigate=useNavigate();
    const {cart}=useSelector(store=>store)
    const dispatch=useDispatch()
    const handleCheckout =()=>{
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])
    return(
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                   { cart.cart?.cartItems.map((item)=><CartItem item={item}/>) }
                </div>
                 <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border '> 
            <p className='uppercase font-bold opacity-60 pb-4'>Details de Prix</p>
            <hr />
            <div  className='space-y-3 font-semibold mb-10'>
                <div className='flex justify-between pt-3 text-black'>
                    <span>Prix</span>
                    <span>{cart.cart?.totalPrice}dh</span>

                </div>

                <div  className='space-y-3 font-semibold'>
                <div className='flex justify-between pt-3'>
                    <span>Rabais</span>
                    <span className='text-green-600'>-{cart.cart?.discounte}dh</span>

                </div>
                <div className='flex justify-between pt-3'>
                    <span>Charge de livraison</span>
                    <span className='text-green-600'>Gratuit</span>

                </div>

                <div className='flex justify-between'>
                    <span>Montant Total</span>
                    <span className='text-green-600'>{cart.cart?.totalDiscountedPrice}dh</span>

                </div>

            </div>
            </div>
            <Button onClick={handleCheckout} variant="contained" className='w-full mt-5' sx={{px:"2.5rem",py:".7rem",bgcolor:"#9155fd"}}>
            vérifier
            </Button>
            </div>
            </div>
            
           
            </div>
            </div>
    )
}
export default Cart