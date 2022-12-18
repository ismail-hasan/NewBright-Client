import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';

const ShopRealted = ({ category, id }) => {
    const [relatedDatas, setRelatedDatas] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product?category=${category}`)
            .then(res => res.json())
            .then(data => {
                const dataFilter = data.filter(trys => id != trys._id)
                setRelatedDatas(dataFilter)
            })
    }, [category, id])

    return (
        <div>
            <div className='grid grid-cols-4 gap-8 px-20 pb-20'>
                {
                    relatedDatas.map(relatedData => {
                        const { productImg, name, price, seller, _id } = relatedData

                        return (
                            <div key={relatedData._id}>
                                <div className='border border-[#e6e6e6] '>
                                    <div className='text-img '>
                                        <img src={productImg} alt={name} className='w-full' />
                                        <div className='text-overly z-10 flex justify-center items-center flex-col gap-7'>
                                            <div className='image-icon'>
                                                <AiFillEye className='text-[23px] icon'></AiFillEye>
                                            </div>

                                            <div className='image-icon'>
                                                <BsHeartFill className='text-[23px] icon'></BsHeartFill>
                                            </div>
                                            <a href={`/shop/${_id}`}>
                                                <div className='image-icon'>
                                                    <AiFillEye className='text-[23px] icon'></AiFillEye>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                    <div className='py-5 px-3'>
                                        <div>
                                            <p>{seller}</p>
                                            <h1 className='font-[700] text-[26px] capitalize'>{name}</h1>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <p className='text-[tomato] text-[24px] font-semibold'>$ {price}</p>
                                            <p> <FaCartArrowDown></FaCartArrowDown> </p>
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

export default ShopRealted;