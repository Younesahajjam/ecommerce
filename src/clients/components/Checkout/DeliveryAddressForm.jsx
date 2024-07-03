import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';

const DeliveryAddressForm = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

const handleSubmit= (e) => {
    e.preventDefault();
    
    const data= new FormData(e.currentTarget);
    const address={
        firstName:data.get("prenom"),
        lastName:data.get("nom"),
        streetAddress:data.get("address"),
        city:data.get("ville"),
        state:data.get("state"),
        zipCode:data.get("code postal"),
        mobile:data.get("numero Télé")

    }
    const orderData={address,navigate}
    dispatch(createOrder(orderData))
    console.log("address",address)
}
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AdressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' >
                            Livrer Ici
                        </Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='prenom'
                                        name='prenom'
                                        label='prenom'
                                        fullWidth
                                        autoComplete='given-name'
                                    />



                                </Grid>


                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='nom'
                                        name='nom'
                                        label='nom'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} >

                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label='address'
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='ville'
                                        name='ville'
                                        label='ville'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label='State/Province/Region'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>

<TextField
    required
    id='code postal'
    name='code postal'
    label='code postal'
    fullWidth
    autoComplete='shipping postal-code'
/>
</Grid>
<Grid item xs={12} sm={6}>

<TextField
    required
    id='numero Télé'
    name='numero Télé'
    label='numero Télé'
    fullWidth
    autoComplete='given-name'
/>


</Grid>

<Grid item xs={12} sm={6}>
<Button 
sx={{py:1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} 
size='large' variant='contained' 
type='submit'>
 Livrer Ici
</Button>
</Grid>

<p className='p-5 py-7'>  *Nb Il y a des remise sur le prix selon la distance entre vous et le carriere </p>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
export default DeliveryAddressForm