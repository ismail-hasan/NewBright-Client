import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';

const CartPage = () => {
    const { user } = useContext(authContext)

    const { data: cartData = [] } = useQuery({
        queryKey: [user?.user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    return (
        <div className='m-20'>
            {/* <div className='flex justify-between text-black'>
                <h1 className='text-3xl  text-black'>Shipping Cart</h1>
                <h1 className='text-3xl  text-black'>{cartData.length} Itesms</h1>
            </div> */}
            <div className='flex justify-between'>
                <div className='w-[60%]'>
                    {
                        cartData.map(itemCart => {
                            const { img, name, productSize, productPich, price } = itemCart

                            return (
                                <div key={itemCart._id} className='flex justify-between items-center'>
                                    <div className='flex items-center gap-8'>
                                        <img className='w-[120px]' src={img} alt="" />
                                        <div>
                                            <p>{name}</p>
                                            <p>{productSize}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <input name='productNumbers' type="number" defaultValue={productPich} />
                                    </div>
                                    <div>
                                        <h1>$ {price}</h1>
                                    </div>
                                    <div>
                                        <h1>$ 56756</h1>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-[35%]'>
                    <h1>Order Summery</h1>
                </div>
            </div>
        </div>

    );
};

export default CartPage;