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
                    <select className="select w-[30%] input-bordered mb-5">
                        <option disabled selected>Pick your favorite Simpson</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                    <div className='flex mt-2 items-center'>
                        <div>
                            <p className='text-[20px] mr-5'>color: </p>
                        </div>
                        <div className='w-[23px] h-[23px] bg-red-500 rounded-full mr-4'></div>
                        <div className='w-[23px] h-[23px] bg-red-500 rounded-full mr-4'></div>
                        <div className='w-[23px] h-[23px] bg-red-500 rounded-full mr-4'></div>
                    </div>
                    <div>
                        <input type="number" className='border py-1 w-[70px] pl-3 rounded-md mr-5' />
                        <button className='capitalize text-[17px] py-2 px-6 bg-[tomato] text-white rounded-[30px] my-5'>add to cart</button>

                    </div>
                    <p>{dec}</p>
                    <h1 className='text-[44px] text-black capitalize font-semibold pt-5'>Prodect Description</h1>
                </div>
            </div>
        </div >
    );
};

export default ShopDetails;