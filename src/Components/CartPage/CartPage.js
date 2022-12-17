import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import { AiFillDelete } from 'react-icons/ai';

const CartPage = () => {
    const { user } = useContext(authContext)

    const { data: cartData = [], refetch } = useQuery({
        queryKey: [user?.user],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    const handleCartDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deletecart/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
            })
    }

    const totalPrice = cartData.reduce((prev, cur) => {
        return prev + cur.price
    }, 0
    )


    return (
        <div className='p-20 flex gap-10 bg-[#e9e9e9]'>
            <div className='w-[65%]'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Sub Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                cartData.map(cartItem => <tr key={cartItem._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cartItem.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-2xl capitalize">{cartItem.name}</div>
                                                <div className="text-[15px] text-[#484646]">Qty: {cartItem.productPich} </div>
                                                <div className="text-[15px] text-[#484646]">productSize: {cartItem.productSize} </div>
                                                <div className="text-[15px] text-[#484646]">Color: red</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        $ {cartItem.price}

                                        {/* <span className="badge badge-ghost badge-sm">Tax Accountant</span> */}
                                    </td>
                                    <td>$ {cartItem.price * cartItem.productPich}</td>
                                    <th>
                                        <button onClick={() => handleCartDelete(cartItem._id)}>
                                            <AiFillDelete></AiFillDelete>
                                        </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
            <div className='w-[30%]'>
                <h1 className='text-black text-3xl font-semibold'>Order Summery </h1>
                <div className='flex justify-between mt-2 mb-4'>
                    <p>item {cartData.length}</p>
                    <p>all total: {totalPrice * cartData.length}</p>
                </div>
                <p className='text-lg text-black pb-1'>PROMO CODE</p>
                <input className='border-none px-5 py-1 outline-none' type="text" />
            </div>
        </div>
    )


};

export default CartPage;