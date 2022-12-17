import React from 'react';
import ReactStars from 'react-rating-stars-component';
const ratingChanged = (rating) => {
    console.log(rating)
}


const ProductReview = () => {
    return (
        <div className='px-20 mb-20'>
            <h1 className='text-3xl font-semibold mb-5'>Write A Review</h1>
            <form action="">
                <p>
                    <label htmlFor="">Name: </label> <br />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </p>
                <p className='mt-7'>
                    <label htmlFor="">Message: </label> <br />
                    <textarea className="textarea textarea-ghost input-bordered w-full h-36" placeholder="Bio"></textarea>
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
                        />
                    </div>
                </div>
                <div>

                </div>

                <button className='bg-black py-2 mt-5 px-8 rounded-[30px] text-white'>Continue</button>
            </form>
        </div>
    );
};

export default ProductReview;