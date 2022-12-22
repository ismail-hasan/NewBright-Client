import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../../ContextProvider/ContextProvider';

const ModalShop = ({ product }) => {
    const { user } = useContext(authContext)

    console.log("bacccccca", product)
    const { productImg, ratingsCount, ratings, stock, authorImg, name, price, dec, category } = product
    const [smallImg, setSmallImg] = useState(authorImg[0])




    const handleDetailsData = e => {
        e.preventDefault()
        const productPich = e.target.productNumber.value
        const productSize = e.target.size.value
        const email = user?.email
        const subTotal = price * productPich
        console.log(subTotal)


        const cartData = {
            name,
            email,
            price,
            productPich,
            productSize,
            productImg,
            category,
            subTotal
        }

        fetch("https://bright-ecommerce.vercel.app/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('product added')
                    console.log(data)
                }
            })


    }

    const handleCheck = (e) => {
        console.log('done')

        if (!user?.uid) {
            alert("please login")
        }
    }


    const ratingStart = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5
        return (
            <span key={index} className='mb-3'>
                {
                    ratings >= index + 1 ? <FaStar className='mr-[2px] text-[17px] text-yellow-400' ></FaStar>
                        :
                        ratings >= number ? <FaStarHalfAlt className='mr-[2px] text-[17px]  text-red-500 ' ></FaStarHalfAlt>
                            :
                            <FaStar className='mr-[2px] text-[17px] text-[#c0c0c0]' ></FaStar>
                }
            </span>
        )
    })
    const handleNumber = (e) => {
        let inputNumber = e.target.value
        if (inputNumber == stock) {
            toast.error("over the stock")
        }
    }
    return (
        <div className='w-10'>
            <input type="checkbox" id="my-modal-3" className="modal-toggle " />
            <div className="modal">
                <div className="modal-box  max-w-full">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='my-20 px-5 md:px-10 lg:px-20' >
                        <div className='md:flex justify-between items-center gap-x-14'>
                            <div className='w-full lg:w-[40%]'>
                                <img src={smallImg.img1} alt="mainImg" />
                                <div className='flex justify-between mt-3 overflow-hidden gap-2'>
                                    {
                                        authorImg.map((singleImg, idx) => {
                                            return (
                                                <div key={idx}>
                                                    <img className='w-[120px]' onClick={() => setSmallImg(singleImg)} src={singleImg.img1} alt="images" />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='w-full lg:w-[50%]'>
                                <form onSubmit={handleDetailsData} action="">

                                    <p className='flex'>
                                        <span className='mr-6 flex'> {ratingStart}</span>
                                        <span className='mr-6'>{ratingsCount} Reviews</span>
                                        <span className='mr-6'>Write A Review</span>
                                    </p>
                                    <h1 className='text-[44px] text-black capitalize font-semibold'>{name}</h1>
                                    <h1 className='text-[38px] text-[tomato] font-semibold'>$ {price}</h1>
                                    <select name='size' className="select w-[30%] input-bordered mb-5">
                                        {/* <option disabled selected>...Select One...</option> */}
                                        <option>XXL</option>
                                        <option>XL</option>
                                        <option>M</option>
                                        <option>S</option>
                                        <option>Xs</option>

                                        {/* warning  */}
                                    </select>
                                    <div className='flex mt-2 items-center mb-5'>
                                        <div>
                                            <p className='text-[20px] mr-5'>color: </p>
                                        </div>
                                        <div className='w-[23px] h-[23px] bg-red-500 rounded-full mr-4'></div>
                                        <div className='w-[23px] h-[23px] bg-blue-500 rounded-full mr-4'></div>
                                        <div className='w-[23px] h-[23px] bg-green-500 rounded-full mr-4'></div>
                                    </div>
                                    <div>

                                        <input onClick={handleNumber} max={stock} min={1} name='productNumber' type="number" defaultValue="1" className='border py-1 w-[70px] pl-3 rounded-md mr-5' />
                                        <button onClick={handleCheck} className='capitalize text-[17px] py-2 pt-3 px-6 bg-[tomato] text-white rounded-[30px] mr-4'>add to cart</button>
                                        <Link to={'/cart'}>
                                            <button className='capitalize text-[17px] pt-3 py-2 px-6 bg-[tomato] text-white rounded-[30px]'>View Cart</button>
                                        </Link>
                                    </div>
                                    <h1 className='text-[44px] text-black capitalize font-semibold pt-8'>Prodect Description</h1>
                                    <p className='text-[17px]'>{dec.length > 100 && dec.slice(0, 300)}</p>
                                </form>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    );
};

export default ModalShop;