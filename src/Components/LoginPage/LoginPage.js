import React from 'react';
import bgimg from '../../assests/login/bg-login.jpg'
import './Login.css'

const LoginPage = () => {
    return (
        <div className="login p-20">
            <div className='flex'>
                <div className='bg-white py-20 w-[50%]  flex flex-col justify-center items-center'>
                    <h1 className='text-3xl '>Please Login</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet elit. Illum, quaerat.</p>

                    <input type="text" placeholder="Type here" className="input w-[60%] input-bordered " />
                    <input type="text" placeholder="Type here" className="input w-[60%] input-bordered mt-5" />
                    <div className='flex justify-start'>
                        <button className='bg-red-500 py-2 rounded text-white mt-5 text-start px-5'>Login</button>

                    </div>
                </div>
                <div className='bg-[tomato] text-center text-white bgImage w-[50%] flex justify-center items-center flex-col px-28'>
                    <h1 className='text-4xl  '>Lorem, ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum inventore odio amet error quaerat reprehenderit officiis consequatur, esse perspiciatis, quis veritatis ullam voluptas dolore, laboriosam delectus tempora perferendis? Debitis, odit!</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;