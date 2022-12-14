import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home h-screen flex items-center text-white px-20'>
            <div className='w-1/2'>
                <p>Trade-In-Offer</p>
                <h1 className='text-[42px] font-bold'>Get Up To 65% Off</h1>
                <h1 className='text-[36px]'>New Arrivals</h1>
                <p className='text-lg mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, odit architecto assumenda labore animi nihil? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, odit architecto assumenda labore animi nihil? save more with 70% extra</p>
                <Link to={'shop'}>
                    <button className='border text-[18px] border-white px-[35px] py-[9px] mr-5 rounded-[30px]'>shop now</button>
                </Link>
                <button className='border text-[18px] border-white px-[35px] py-[9px] rounded-[30px]'>shop now</button>

            </div>
        </div>
    );
};

export default Home;