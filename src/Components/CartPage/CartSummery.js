import React, { useState } from 'react';
import { MdLockOutline } from 'react-icons/md';

const CartSummery = ({ cartData }) => {
    const [inputs, setInput] = useState('');

    const totalPrice = cartData.reduce((prev, cur) => {
        return prev + cur.price
    }, 0)

    return (
        <div>
            <div className='w-[30%] bg-white py-8 px-5'>
                <h1 className='text-black text-3xl font-semibold text-center pb-5'>Order Summery </h1>
                <div className='flex justify-between mt-2 mb-4'>
                    <p>item {cartData.length}</p>
                </div>
                <p className='text-lg text-black pb-1'>PROMO CODE</p>

                {/* <form onSubmit={handleCuponForm} action="" className='mb-8'> */}
                <input onBlur={e => setInput(e.target.value)} name='cupon' className='border-2 border-[#dcdcdc] rounded px-5 py-2 outline-none' type="text" />
                <button className='bg-[tomato] text-lg py-1 px-4 ml-4 text-white'>Apply</button>
                {/* </form> */}

                <div className='flex justify-between mt-2'>
                    <p>Subtotal ({cartData.length}) Items</p>
                    <p>all total: {totalPrice * cartData.length}</p>
                    {/* <p>all total: {totalPrice * cartItem.productPich}</p> */}
                </div>
                <div className='flex justify-between mt-2'>
                    <p>Shopping cost</p>
                    <p className='font-semibold'>Free</p>
                </div>
                <div className='flex justify-between mt-2'>
                    <p>Discount</p>
                    <p>N / A</p>
                </div>

                <div className='flex mt-5 items-center justify-evenly'>
                    <div className='mr-5'>
                        <p className='text-black text-2xl font-[500]'>Total Price</p>
                        {/* <p className='text-[tomato] font-bold text-[21px]'>$ {totalPrice * cartData.length}</p> */}
                        {/* <p className='text-[tomato] font-bold text-[21px]'>$ {inputs === "ismail" ? totalPrice * cartData.length - 10 : totalPrice * cartData.length}</p> */}

                    </div>
                    <div>
                        <button className='bg-red-500 text-white px-5 my-5 py-[10px] rounded flex  '>
                            <MdLockOutline></MdLockOutline>
                            <span className='ml-3'>Chekout</span>
                        </button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default CartSummery;