import React from 'react'

const AdressCard=({address}) => {
    return(
        <div>
        <div className='space-y-3'>
            <p className='font-semibold'>{address?.firstName+" "+address?.lastName}</p>
            <p>{address?.state},{address?.streetAddress},{address?.zipCode}</p>
        </div>
        <div className='space-y-1'>
            <p className='font-semibold'>Fax</p>
            <p>{address?.mobile}</p>
        </div>
        </div>
    )
}
export default AdressCard