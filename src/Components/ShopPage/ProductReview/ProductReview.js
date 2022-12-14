import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ProductReview = () => {
    return (
        <div className='px-20 mb-20'>
            <h1 className='text-3xl font-semibold mb-5'>Write a review</h1>
            <form action="">
                <p>
                    <label htmlFor="">Name</label> <br />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </p>
                <p className='mt-7'>
                    <label htmlFor="">Name</label> <br />
                    <textarea className="textarea textarea-ghost input-bordered w-full h-36" placeholder="Bio"></textarea>
                </p>
                <div className='flex'>
                    <p className='text-lg mr-4'> Rating :</p>
                    <p className='flex  items-center'>
                        <AiFillStar className='text-[23px] text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-[23px] text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-[23px] text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-[23px] text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-[23px] text-yellow-400'></AiFillStar>
                    </p>
                </div>

                <button className='bg-black py-2 mt-5 px-8 rounded-[30px] text-white'>Continue</button>
            </form>
        </div>
    );
};

export default ProductReview;