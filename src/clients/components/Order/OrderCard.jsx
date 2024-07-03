import { Grid } from '@mui/material';
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';


const OrderCard =() =>{
    const navigate=useNavigate();
   return(
   <div onClick={() =>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
    <Grid container spacing={2} xs={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
             <div className='flex cursor-pointer'>
                  <img className='w-[5rem] h-[5rem]  object-cover object-top'  style={{ width: '100px', height: '100px' }} src="/images/yajora2.webp" alt="" />
             
                  <div className='ml-5 space-y-2'>
                     <p className=''>Brique de construction</p>
                     <p className='opacity-50 text-xs font-semibold'>Size: 25Cm</p>
                     <p className='opacity-50 text-xs font-semibold'>Color: Rouge</p>
                    </div>
             </div>
        </Grid>

        <Grid item xs={2}> <p>1.5dh</p></Grid>
        <Grid item xs={4}>
          { true && <div><p> 
            <AdjustIcon xs={{ width: '20px', height: '15px' }} className='text-green-600 mr-2 text-sm'/>

                <span>Livrer le 20 Juin 24</span>
                
            </p>
            <p className='text-xs'>
                votre command a été livré
            </p>
            </div>}
           {false && <p> 

                <span>Livraison prévue en Juin</span>
                
            </p>}
            </Grid>
    </Grid>
   </div>
   ) 
   }
   export default OrderCard