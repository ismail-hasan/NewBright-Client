import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShopDetails = () => {
    const detailsData = useLoaderData()
    const { name, img, dec, price } = detailsData
    console.log(detailsData)
    return (
        <div className='my-20 px-20' >
            <div className='flex justify-between items-center gap-x-14'>
                <div className='w-[40%]'>
                    <img src={img} alt="" />
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-[44px] text-black capitalize font-semibold'>{name}</h1>
                    <h1 className='text-[38px] text-[tomato] font-semibold'>$ {price}</h1>
                    <p>{dec}</p>
                    <h1 className='text-[44px] text-black capitalize font-semibold'>Prodect Description</h1>
                </div>
            </div>
        </div >
    );
};

export default ShopDetails;