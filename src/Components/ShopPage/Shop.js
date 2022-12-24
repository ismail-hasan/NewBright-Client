import React, { useContext, useState } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';

import './Shop.css'
import { authContext } from '../../ContextProvider/ContextProvider';
import { toast } from 'react-hot-toast';
import ModalShop from './ModalShop/ModalShop';



const Shop = ({ setProduct, product }) => {
    const productDatas = useLoaderData()
    const { user } = useContext(authContext)

    const email = user?.email
    const wishlist = true

    const useEmail = {
        email
    }
    console.log(useEmail)




    // const handleHeart = (id) => {
    //     fetch(`https://bright-ecommerce.vercel.app/wishlists/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(useEmail)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged) {
    //                 toast.success('WishList item Added')
    //             }
    //             else {
    //                 toast.error('Allready Item Added')
    //             }
    //             console.log(data)
    //         })
    // }
    ////////////
    // const handleWishlist = (id) => {
    //     fetch(`https://bright-ecommerce.vercel.app/wishlists/${id}`, {
    //         method: "POST",
    //         body:
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }



    return (
        <div>
            <h1>All  Product Data : {productDatas.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    productDatas.map(productData => {
                        const { productImg, name, price, seller, _id, ratingsCount, ratings, stock, authorImg, dec, category } = productData
                        const handleHeart = () => {
                            const mainId = _id

                            const wishData = { productImg, mainId, seller, ratingsCount, ratings, stock, authorImg, name, price, dec, category }

                            fetch(`http://localhost:5000/wish`, {
                                method: "POST",
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(wishData)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.acknowledged) {
                                        toast.success('wish list item added')
                                        console.log(data)

                                    }

                                })
                        }
                        return (
                            <div key={productData._id}>
                                <div className='border border-[#e6e6e6] '>
                                    <div className='text-img'>
                                        <img src={productImg} alt={name} className='w-full' />

                                        <div className='text-overly z-10 flex justify-center items-center flex-col gap-7'>
                                            <label onClick={() => setProduct(productData)} className='image-icon' htmlFor="my-modal-3" >
                                                <AiFillEye className='text-[23px] icon'></AiFillEye>
                                            </label>

                                            <div className='image-icon' onClick={() => handleHeart(_id)}>
                                                <BsHeartFill className='text-[23px] icon'></BsHeartFill>
                                            </div>
                                            <Link to={`/shop/${_id}`}>
                                                <div className='image-icon'>
                                                    <AiFillEye className='text-[23px] icon'></AiFillEye>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <ModalShop productData={productData}></ModalShop> */}

                                    </div>

                                    <div className='py-5 px-3'>
                                        <div>
                                            <p className='capitalize text-[15px]'>{seller}</p>
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

        </div >
    );
};

export default Shop;