import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import CartSummery from './CartSummery';

const CartTable = ({ cartItem }) => {
    console.log(cartItem)
    return (
        <>
            <tr key={cartItem._id}>
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
                <td>$ {cartItem.price} </td>
                <td>$ {cartItem.price * cartItem.productPich}</td>
                <td>remove</td>
            </tr>

            <CartSummery></CartSummery>
        </>

    )

};

export default CartTable;