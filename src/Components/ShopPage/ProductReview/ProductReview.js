import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ReactStars from 'react-rating-stars-component';
import ReviewInfo from './ReviewInfo';



const ProductReview = () => {
    const [ratings, setRatings] = useState(5)
    const ratingChanged = (rating) => {
        setRatings(rating)
    }
    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const reviweName = form.reivewName.value
        const reviewDec = form.reivewDec.value
        console.log(reviweName, reviewDec, ratings)


        const reviewProducts = { reviweName, reviewDec, ratings }

        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewProducts)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Review Added")
                    form.reset()
                    console.log(data)
                }

            })

    }


    return (
        <>
            <div className='px-20 mb-20'>
                <div className=''>
                    <ReviewInfo></ReviewInfo>
                </div>
                <h1 className='text-3xl mb-5 font-semibold'>Write A Review</h1>
                <form onSubmit={handleForm} action="">
                    <p>
                        <label htmlFor="">Name: </label> <br />
                        <input required name='reivewName' type="text" placeholder="Type here" className="input input-bordered w-full" />
                    </p>
                    <p className='mt-7'>
                        <label htmlFor="">Message: </label> <br />
                        <textarea required name='reivewDec' className="textarea textarea-ghost input-bordered w-full h-36" placeholder="Bio"></textarea>
                    </p>
                    <div className='flex mt-5'>
                        <p className='text-[24px] mr-4'> Rating :</p>
                        <div>
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={31}
                                activeColor="#ffd700"
                                isHalf={true}
                                value={5}


                            />
                        </div>
                    </div>
                    <div>

                    </div>

                    <button className='bg-black py-2 mt-5 px-8 rounded-[30px] text-white'>Continue</button>
                </form>
            </div>
        </>
    );
};

export default ProductReview;