import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './CantactPage.css'


const ContactMassage = () => {
    return (
        <div className='bg-[tomato] flex justify-around'>
            <div className=' text-white py-10'>
                <div className=' flex'>
                    <FaPhoneAlt className='text-[20px]'></FaPhoneAlt>
                    <h1 className='text-[20px] font-[500] ml-4'> Call Us</h1>
                </div>
                <p>+880 1776458113</p>
                <div className=' flex mt-10'>
                    <FaEnvelope className='text-[20px]'></FaEnvelope>
                    <h1 className='text-[20px] font-[500] ml-4'> fnismailhasan@gmail.com</h1>
                </div>
                <p>+880 1776458113</p>
                <div className=' flex mt-10'>
                    <MdLocationOn className='text-[20px]'></MdLocationOn>
                    <h1 className='text-[20px] font-[500] ml-4'> Pabna, Bnagladesh</h1>
                </div>
                <p>+880 1776458113</p>
            </div>
            <div className='bg-white -my-16 shadow-lg py-10 px-8 w-[30%] rounded-sm'>
                <h1 className='text-black text-[36px] mt-4 mb-5 font-[500]'>Contact Us</h1>
                <form action="" className='text-input'>
                    <input placeholder='Enter Your Name' type="text" />
                    <input placeholder='Enter Your Email Address' type="email" />
                    <textarea placeholder='Enter Your Messsage' type="text" />
                    <button className='text-white py-2 px-5 bg-[tomato]'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactMassage;