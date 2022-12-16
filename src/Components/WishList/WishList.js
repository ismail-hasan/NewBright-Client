import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const WishList = () => {
    const wishListData = useLoaderData()


    // const { wishListData } = useQuery({
    //     queryKey: [""],
    //     queryFn: () => fetch()
    // })





    return (
        <div className='p-20'>
            <div className='grid grid-cols-4 gap-8'>
                {
                    wishListData.map(productData => {
                        const { img, name, price, seller, _id } = productData
                        return (
                            <div key={productData._id}>
                                <div className='border border-[#e6e6e6] '>
                                    <div className='text-img'>
                                        <img src={img} alt={name} className='w-full' />
                                        <div className='text-overly z-10 flex justify-center items-center flex-col gap-7'>
                                            <div className='image-icon'>
                                                <AiFillEye className='text-[23px] icon'></AiFillEye>
                                            </div>

                                            {/* <div className='image-icon' onClick={() => handleHeart(_id)}>
                                                <BsHeartFill className='text-[23px] icon'></BsHeartFill>
                                            </div> */}

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
                                            <Link to="/cart">
                                                <div className='border border-[#d2d2d2] p-3 hover:bg-[tomato] hover:text-[#fff] cursor-pointer transition-[3s] rounded-full'>
                                                    <p> <FaCartArrowDown></FaCartArrowDown> </p>
                                                </div>
                                            </Link>
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

export default WishList;