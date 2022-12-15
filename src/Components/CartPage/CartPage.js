import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CartPage = () => {
    const cartData = useLoaderData()
    console.log('sdfsd', cartData)
    const [inputValues, setInputValues] = useState(1)








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
                            // const [inputValues, setInputValues] = useState(1)

                            const handleNumber = (e) => {
                                const inputValue = e.target.value
                                setInputValues(inputValue)
                            }
                            return (
                                <div className='flex justify-between items-center'>
                                    <div className='flex items-center gap-8'>
                                        <img className='w-[120px]' src={img} alt="" />
                                        <div>
                                            <p>{name}</p>
                                            <p>{productSize}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <input name='productNumbers' onChange={handleNumber} type="number" defaultValue={productPich} />
                                    </div>
                                    <div>
                                        <h1>$ {price}</h1>
                                    </div>
                                    <div>
                                        <h1>$ {`${inputValues * price}`}</h1>
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