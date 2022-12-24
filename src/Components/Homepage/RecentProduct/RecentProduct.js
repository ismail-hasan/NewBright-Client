import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye } from 'react-icons/ai';
import { BsHeartFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../../ContextProvider/ContextProvider';
import ModalShop from '../../ShopPage/ModalShop/ModalShop';

const RecentProduct = () => {
    const { setProduct, product, user } = useContext(authContext)


    const [recent, setRecent] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/limitproduct")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRecent(data)
            })
    }, [])
    const email = user?.email
    const wishlist = true

    return (
        <div className='pb-20 px-10 lg:px-20'>
            <div className='pb-10'>
                <h1 className='text-5xl text-black font-semibold'>Recent Products</h1>
                <h1 className='text-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    recent.map(product => {
                        const { productImg, name, price, seller, _id, ratingsCount, ratings, stock, authorImg, dec, category } = product
                        const handleHeart = () => {
                            const mainId = _id

                            const wishData = { wishlist, email, productImg, mainId, seller, ratingsCount, ratings, stock, authorImg, name, price, dec, category }

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
                            <div key={product._id}>
                                <div className='border border-[#e6e6e6] '>
                                    <div className='text-img'>
                                        <img src={productImg} alt={name} className='w-full' />

                                        <div className='text-overly z-10 flex justify-center items-center flex-col gap-7'>
                                            <label onClick={() => setProduct(product)} className='image-icon' htmlFor="my-modal-3" >
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



                                    </div>
                                    {product &&
                                        <ModalShop product={product}></ModalShop>

                                    }


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
        </div>
    );
};

export default RecentProduct;