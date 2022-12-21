import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import './Login.css'

const LoginPage = () => {
    const { logInUser } = useContext(authContext)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const loginForm = (data) => {
        console.log(data)
        logInUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate("/")
            })
            .catch(e => console.log(e))

    }


    return (
        <div className="login p-5 md:p-20 mb-44">
            <div className='lg:flex'>
                <div className='bg-white py-16 px-5 w-full lg:w-[45%]  flex flex-col justify-center items-center'>
                    <h1 className='text-4xl font-semibold '>Please Login</h1>
                    <p className='mb-5 text-lg'>Lorem ipsum dolor sit amet elit. Illum, quaerat.</p>

                    <form onSubmit={handleSubmit(loginForm)} action="">
                        <input {...register("email")} type="text" placeholder="Type here" className="input w-[60%] input-bordered " />
                        <input {...register("password")} type="password" placeholder="Type here" className="input w-[60%] input-bordered mt-5" />
                        <div className='flex justify-start'>
                            <button className='bg-red-500 py-2 rounded text-white mt-5 text-start px-5'>Login</button>
                        </div>
                    </form>

                </div>
                <div className='bg-[tomato] w-full text-center text-white bgImage py-16 lg:w-[55%] flex justify-center items-center flex-col px-5 lg:px-20'>
                    <h1 className='text-4xl font-semibold'>Lorem, ipsum dolor sit amet.</h1>
                    <p className='text-lg mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum inventore odio amet error quaerat reprehenderit officiis consequatur, esse perspiciatis, quis veritatis ullam voluptas dolore, laboriosam delectus tempora perferendis? Debitis, odit!</p>
                    <p className='pt-3 text-[22px] capitalize'>new to Bright-Commerce, please<Link className='text-[22px]' to="/register"> Register</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;