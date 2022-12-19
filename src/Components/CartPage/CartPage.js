import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import { AiFillDelete } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { user } = useContext(authContext)
    const [cupons, setCupons] = useState('');

    const { data: cartData = [], refetch, isLoading } = useQuery({
        queryKey: [user?.email],
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
        return prev + cur.subTotal
    }, 0
    )


    return (
        <div className='px-20 py-10 flex gap-10 bg-[#efefef]'>
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
                                cartData.map(cartItem =>
                                    <React.Fragment key={cartItem._id}>
                                        <tr>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={cartItem.productImg} alt="Avatar Tailwind CSS Component" />
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
                                            <td> $ {cartItem.price} </td>
                                            <td>$ {cartItem.subTotal}</td>
                                            <th>
                                                <button onClick={() => handleCartDelete(cartItem._id)}>
                                                    <AiFillDelete></AiFillDelete>
                                                </button>
                                            </th>
                                        </tr>

                                    </React.Fragment>
                                )

                            }

                        </tbody>

                    </table>

                    <div className='bg-white py-5'>
                        <Link to='/shop'>
                            <span className='pl-10 text-[25px] text-blue-600 '>Back to shop</span>
                        </Link>
                    </div>

                </div>
            </div>

            <div className='w-[30%] bg-white py-8 px-5 h-[63vh]'>
                <h1 className='text-black text-3xl font-semibold text-center pb-5'>Order Summery </h1>

                <p className='text-lg text-black pb-1'>PROMO CODE</p>
                <input onBlur={e => setCupons(e.target.value)} name='cupon' className='border-2 border-[#dcdcdc] rounded px-5 py-2 outline-none' type="text" />
                <button className='bg-[tomato] text-lg py-1 px-4 ml-4 text-white'>Apply</button>

                <div className='flex justify-between mt-4'>
                    <p>Subtotal ({cartData.length}) Items</p>
                    <p>All Total: {totalPrice}</p>
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
                        <p className='text-[tomato] font-bold text-[21px]'>$ {cupons === "ismail" ? totalPrice - 40 : totalPrice}</p>

                    </div>
                    <div>
                        <button className='bg-red-500 text-white px-5 my-5 py-[10px] rounded flex  '>
                            <MdLockOutline></MdLockOutline>
                            <span className='ml-3'>Chekout</span>
                        </button>
                    </div>
                </div>
            </div>

        </div >
    )


};

export default CartPage;