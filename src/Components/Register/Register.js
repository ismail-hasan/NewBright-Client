import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();

    const handleForm = () => {

    }
    return (
        <div className='bg-red-500 '>
            <div className='flex justify-center items-center h-screen px-20'>
                <div className='bg-stone-500 w-1/2 py-20 text-center'>
                    <h1 className='text-3xl font-[500]'>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, quidem!</p>
                    <button className="btn btn-active btn-secondary">Button</button>
                </div>
                <div className='w-1/2 bg-white py-20 px-10'>
                    <form  className='text-input'>
                        <input name='name' type="text" placeholder="Type here" />
                        <input name='email' type="email" placeholder="Type here" />
                        <input name='password' type="password" placeholder="Type here" />
                        <input name='phone' type="Phone" placeholder="Type here" />
                        <button className='text-white py-2 px-5 bg-[tomato]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;