import React, { useContext } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';

import './Shop.css'
import { authContext } from '../../ContextProvider/ContextProvider';
import { toast } from 'react-hot-toast';



const Shop = () => {
    const productDatas = useLoaderData()
    const { user } = useContext(authContext)
    const email = user?.email

    const hello = {
        email
    }
    console.log(hello)



    const handleHeart = (id) => {
        fetch(`http://localhost:5000/wishlists/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(hello)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('WishList item Added')
                }
                else {
                    toast.error('Allready Item Added')
                }
                console.log(data)
            })
    }
    // const handleWishlist = (id) => {
    //     fetch(`http://localhost:5000/wishlists/${id}`, {
    //         method: "POST",
    //         body:
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }

    const check = () => {
        toast.success("added")
    }

    return (
        <div>
            <h1>All  Product Data : {productDatas.length}</h1>
            <div className='grid grid-cols-4 gap-8'>
                {
                    productDatas.map(productData => {
                        const { productImg, name, price, seller, _id } = productData
                        return (
                            <div key={productData._id}>
                                <div className='border border-[#e6e6e6] '>
                                    <div className='text-img'>
                                        <img src={productImg} alt={name} className='w-full' />
                                        <div className='text-overly z-10 flex justify-center items-center flex-col gap-7'>
                                            <div className='image-icon'>
                                                <AiFillEye onClick={check} className='text-[23px] icon'></AiFillEye>
                                            </div>

                                            <div className='image-icon' onClick={() => handleHeart(_id)}>
                                                <BsHeartFill className='text-[23px] icon'></BsHeartFill>
                                            </div>
                                            <Link to={`/shop/${_id}`}>
                                                <div className='image-icon'>
                                                    <AiFillEye className='text-[23px] icon'></AiFillEye>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                    <div className='py-5 px-3'>
                                        <div>
                                            <p>{seller}</p>
                                            <h1 className='font-[700] text-[26px] capitalize'>{name}</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[tomato] text-[24px] font-semibold'>$ {price}</p>
                                            <div className='border border-[#d2d2d2] p-3 hover:bg-[tomato] hover:text-[#fff] cursor-pointer transition-[3s] rounded-full'>
                                                <p> <FaCartArrowDown></FaCartArrowDown> </p>
                                            </div>
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