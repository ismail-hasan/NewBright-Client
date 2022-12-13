import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    const productDatas = useLoaderData()
    console.log(productDatas)
    return (
        <div>
            <h1>All  Product Data : {productDatas.length}</h1>
            <div className='grid grid-cols-4 gap-10'>
                {
                    productDatas.map(productData => {
                        const { img, name, price, seller } = productData
                        return (
                            <div key={productData._id}>
                                <div className='border border-[#e6e6e6]'>
                                    <img src={img} alt="" />
                                    <div className='py-5 px-3'>
                                        <div>
                                            <p>{seller}</p>
                                            <h1>{name}</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p>$ {price}</p>
                                            <p> <FaCartArrowDown></FaCartArrowDown> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Shop;