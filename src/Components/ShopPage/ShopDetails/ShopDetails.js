import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductReview from '../ProductReview/ProductReview';
import ShopRealted from '../ShopRealted/ShopRealted';

const ShopDetails = () => {
    const detailsData = useLoaderData()
    const { name, img, dec, price, category, _id, thumImg } = detailsData
    const [smallImg, setSmallImg] = useState(thumImg[2])
    console.log(thumImg)

    const handleDetailsData = e => {
        e.preventDefault()
        const perPich = e.target.productNumber.value
        const productSize = e.target.size.value

        const cartData = {
            name,
            price,
            perPich,
            productSize
        }
        console.log(cartData)

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }


    return (
        <div>
            <div className='my-20 px-20' >
                <div className='flex justify-between items-center gap-x-14'>
                    <div className='w-[40%]'>
                        <img src={smallImg} alt="" />
                        <div className='flex justify-between mt-3 overflow-hidden gap-2'>
                            {
                                thumImg.map(singleImg => {
                                    return (
                                        <>
                                            <img onClick={() => setSmallImg(img)} className='w-[120px]' src={singleImg} alt="images" />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <form onSubmit={handleDetailsData} action="">
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
                            <div className='flex mt-2 items-center'>
                                <div>
                                    <p className='text-[20px] mr-5'>color: </p>
                                </div>
                                <div className='w-[23px] h-[23px] bg-red-500 rounded-full mr-4'></div>
                                <div className='w-[23px] h-[23px] bg-blue-500 rounded-full mr-4'></div>
                                <div className='w-[23px] h-[23px] bg-green-500 rounded-full mr-4'></div>
                            </div>
                            <div>
                                <input name='productNumber' type="number" defaultValue="1" className='border py-1 w-[70px] pl-3 rounded-md mr-5' />
                                <button className='capitalize text-[17px] py-2 px-6 bg-[tomato] text-white rounded-[30px] my-5'>add to cart</button>
                            </div>
                            <p>{dec}</p>
                            <h1 className='text-[44px] text-black capitalize font-semibold pt-5'>Prodect Description</h1>
                        </form>
                    </div>
                </div>
            </div >
            <ShopRealted
                category={category}
                id={_id}
            ></ShopRealted>
            <ProductReview></ProductReview>
        </div>
    );
};

export default ShopDetails;