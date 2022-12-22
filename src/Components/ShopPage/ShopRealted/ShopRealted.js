import React, { useContext, useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';
import { authContext } from '../../../ContextProvider/ContextProvider';
import ModalShop from '../ModalShop/ModalShop';

const ShopRealted = ({ category, id }) => {
    const [relatedDatas, setRelatedDatas] = useState([])
    const { product, setProduct } = useContext(authContext)


    useEffect(() => {
        fetch(`https://bright-ecommerce.vercel.app/product?category=${category}`)
            .then(res => res.json())
            .then(data => {
                const dataFilter = data.filter(trys => id != trys._id)
                setRelatedDatas(dataFilter)
            })
    }, [category, id])

    return (
        <div className='mt-32'>
            <h1 className='text-4xl mb-10 ml-10 lg:ml-16 font-semibold text-black capitalize'>related product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 lg:px-20 pb-5'>
                {
                    relatedDatas.map(product => {
                        const { productImg, name, price, seller, _id } = product
                        return (
                            <div key={product._id}>
                                <div className='border border-[#e6e6e6] '>
                                    <div className='text-img '>
                                        <img src={productImg} alt={name} className='w-full' />
                                        <div className='text-overly z-10 flex justify-center items-center flex-col gap-7'>
                                            <label onClick={() => setProduct(product)} className='image-icon' htmlFor="my-modal-3" >
                                                <AiFillEye className='text-[23px] icon'></AiFillEye>
                                            </label>

                                            <div className='image-icon'>
                                                <BsHeartFill className='text-[23px] icon'></BsHeartFill>
                                            </div>
                                            <a href={`/shop/${_id}`}>
                                                <div className='image-icon'>
                                                    <AiFillEye className='text-[23px] icon'></AiFillEye>
                                                </div>
                                            </a>

                                        </div>
                                        {product &&
                                            <ModalShop product={product}></ModalShop>

                                        }
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