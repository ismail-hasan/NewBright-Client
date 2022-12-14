import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillEye } from 'react-icons/ai';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link, } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import ModalShop from '../ShopPage/ModalShop/ModalShop';

const WishList = () => {
    const { user, product, setProduct } = useContext(authContext)

    const { data: wishListDatas = [], isLoading, refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/wish?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    console.log("latest", wishListDatas)

    if (isLoading) {
        return <h1>loading....</h1>
    }

    const handleDelete = (id) => {
        console.log(id)

        fetch(`http://localhost:5000/wishdelete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    toast.success('One Item Delete')
                    refetch()
                }
            })
    }

    refetch()
    return (
        <div className='p-20'>
            {
                !wishListDatas.length &&
                <h1 className='text-3xl capitalize font-[500] text-center h-[50vh] flex items-center justify-center'>no data available</h1>
            }

            <div className='grid grid-cols-4 gap-8'>
                {
                    wishListDatas.map(product => {
                        const { productImg, mainId, seller, price, name } = product
                        return (
                            <div key={product._id}>
                                <div className='border border-[#e6e6e6] '>
                                    <div className='text-img'>
                                        <img src={productImg} alt={name} className='w-full' />
                                        <div className='text-overly z-10 flex justify-center items-center flex-col gap-7'>

                                            <label onClick={() => setProduct(product)} className='image-icon' htmlFor="my-modal-3" >
                                                <AiFillEye className='text-[23px] icon'></AiFillEye>
                                            </label>

                                            <div className='image-icon' onClick={() => handleDelete(mainId)}>
                                                <AiTwotoneDelete className='text-[23px] icon'></AiTwotoneDelete>
                                            </div>

                                            <Link to={`/shop/${mainId}`}>
                                                <div className='image-icon'>
                                                    <AiFillEye className='text-[23px] icon'></AiFillEye>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* {product &&
                                            <ModalShop product={product}></ModalShop>

                                        } */}

                                    </div>
                                    {/* <ModalShop></ModalShop> */}
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
        </div >
    );
};

export default WishList;