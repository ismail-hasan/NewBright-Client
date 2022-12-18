import React from 'react';
import './ShowOffBanner.css'

const ShowOffBanner = () => {
    return (
        <div className='flex-none lg:flex gap-x-12 py-16 px-10 lg:px-20'>
            <div className='w-full lg:w-1/2 px-20 banner-box px[30px] py-[80px]'>
                <span className='text-[18px] py-[3px] px-[12px] bg-[#6f00ff] text-white'>creazy deals</span>
                <h1 className='text-[48px] font-bold'>Buy 1 Get 1</h1>
                <p className='text-lg font-semibold'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non Amet Consectetur Adipisicing Elit. Non, Ad.</p>
                <button className='border border-black px-5 py-1 mt-5'>Read More</button>
            </div>
            <div className='w-full lg:w-1/2 px-20 banner-box2 text-white px[30px] py-[80px]'>
                <span className='text-[18px] py-[3px] px-[12px] bg-[#6f00ff] text-white'>creazy deals</span>
                <h1 className='text-[48px] font-bold'>Buy 1 Get 1</h1>
                <p className='text-lg font-semibold'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non Amet Consectetur Adipisicing Elit. Non, Ad.</p>
                <button className='border border-black px-5 py-1 mt-5'>Read More</button>
            </div>

        </div>
    );
};

export default ShowOffBanner;