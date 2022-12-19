import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import { AiFillDelete } from 'react-icons/ai';
import { MdLockOutline } from 'react-icons/md'

const CartPage = () => {
    const { user } = useContext(authContext)
    const [inputs, setInput] = useState('');

    const { data: cartData = [], refetch, isLoading } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    // if (isLoading) {
    //     return <h1>losdfsdfsfsdfsdfading</h1>
    // }



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

    console.log(totalPrice)


    // const handleCuponForm = (e) => {
    //     e.preventDefault()
    //     const cupon = e.target.cupon.value
    //     console.log(cupon)
    //     if (cupon === "ismail") {
    //         const newTotalPrice = totalPrice - 10
    //     }
    //     return newTotalPrice

    // }

    console.log(inputs)

    return (
        <div className='px-20 py-10 flex gap-10 bg-[#e9e9e9]'>
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
                                    <>
                                        <tr key={cartItem._id}>
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
                                    </>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

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
                    <p>all total: {totalPrice}</p>
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
                        <p className='text-[tomato] font-bold text-[21px]'>$ {totalPrice}</p>

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