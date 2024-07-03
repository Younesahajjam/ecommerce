import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTraker from './OrderTraker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails=() =>{
    return(

<div className='px:5 lg:px-20'>
    <div>
        <h1 className='font-bold text-xl py-7'> Adresse de Livraison</h1>
        <AdressCard/>
    </div>
    
          <div className='py-20'>
          <OrderTraker activeStep={3}/>
          </div>
          <Grid className='space-y-5' container>
            {[1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx=
            {{alignItems:"center",justifyContent:'space-between'}}>
                <Grid item xs={6}>
                        <div className='flex items-center space-x-4'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' 
                            src="/images/zolima.jpeg" 
                            alt="" />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Zolima Pour Construction</p>
                                <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Size: 2M</span></p>
                                <p>vendeur: abdelkarim</p>
                                <p>90dh</p>
                            </div>
                        </div>
                </Grid>
               <Grid>
                <Box sx={{color:deepPurple[500]}}>
                {/*<StarIcon  style={{ width: '65px', height: '75px' }} className='px-2'/>*/}
                <StarBorderIcon sx={{fontSize:'2rem'}} className='px-2'/>
                <span>Noter et évaluer le produit</span>
                </Box>
               </Grid>
            </Grid>)}
            
          </Grid>
</div>

    )
}
export default OrderDetails