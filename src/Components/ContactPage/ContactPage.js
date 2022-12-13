import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const ContactPage = () => {
    return (
        <div className='px-20 py-20'>
            <div>
                <p className='text-lg italic'>Get In Touch</p>
                <h1 className='text-[26px] font-semibold'>Lorem Ipsum Dolor Sit Amet Consectetur.</h1>
                <p className='text-[20px] font-[500]'>Head Office</p>
                <div className='font-semibold text-lg mt-8'>
                    <div className='flex mt-5'>
                        <AiFillHome className='text-[20px]'></AiFillHome>
                        <p className='text-[17px] ml-4'>Pabna Arippur, Hazihat, Pabna</p>
                    </div>
                    <div className='flex mt-5'>
                        <FaPhoneAlt className='text-[20px]'></FaPhoneAlt>
                        <p className='text-[17px] ml-4'>+880 1776458113</p>
                    </div>
                    <div className='flex mt-5'>
                        <FaEnvelope className='text-[20px]'></FaEnvelope>
                        <p className='text-[17px] ml-4'>Pabna Arippur, Hazihat, Pabna</p>
                    </div>
                    <div className='flex mt-5'>
                        <MdLocationOn className='text-[20px]'></MdLocationOn>
                        <p className='text-[17px] ml-4'>Pabna Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;