import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';

const Register = () => {
    const { signUpUser } = useContext(authContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const handleForm = (data) => {

        signUpUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate("/")
            })
            .catch(e => console.log(e))

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
                    <form onSubmit={handleSubmit(handleForm)} className='text-input'>
                        <input {...register('name')} type="text" placeholder="Type here" />
                        <input {...register('email')} name='email' type="email" placeholder="Type here" />
                        <input {...register('password')} name='password' type="password" placeholder="Type here" />
                        <input {...register('phone')} name='phone' type="Phone" placeholder="Type here" />
                        <button className='text-white py-2 px-5 bg-[tomato]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;