import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';

const Register = () => {
    const { signUpUser, updateUser } = useContext(authContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const handleForm = (data) => {

        signUpUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                const clientInfo = {
                    displayName: data.name
                }
                updateUser(clientInfo)
                    .then(() => { })
                    .catch(e => console.log(e))

                navigate("/")
            })
            .catch(e => console.log(e))

    }

    return (
        <div className='bg-blue-500 py-10'>
            <div className='lg:flex  justify-center items-center p-8 lg:px-20'>
                <div className='bg-stone-500 shadow-md w-full lg:w-1/2 py-20 text-center'>
                    <h1 className='text-3xl font-[500]'>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, quidem!</p>
                    <button className="btn btn-active btn-secondary"> <Link to="/login">login</Link> </button>
                </div>
                <div className='w-full shadow-md lg:w-1/2 bg-white py-20 px-10'>
                    <form onSubmit={handleSubmit(handleForm)} className='text-input'>
                        <input {...register('name')} type="text" placeholder="UserName" />
                        <input {...register('email')} name='email' type="email" placeholder="E-Mail Address" />
                        <input {...register('password')} name='password' type="password" placeholder="Enter Strong Password" />
                        <input {...register('phone')} name='phone' type="Phone" placeholder="Phone number" />
                        <button className='text-white py-2 px-5 bg-[tomato]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;