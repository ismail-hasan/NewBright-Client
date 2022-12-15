import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
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
        <div className="login p-20">
            <div className='flex'>
                <div className='bg-white py-20 w-[50%]  flex flex-col justify-center items-center'>
                    <h1 className='text-3xl '>Please Login</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet elit. Illum, quaerat.</p>

                    <form onSubmit={handleSubmit(loginForm)} action="">
                        <input {...register("email")} type="text" placeholder="Type here" className="input w-[60%] input-bordered " />
                        <input {...register("password")} type="password" placeholder="Type here" className="input w-[60%] input-bordered mt-5" />
                        <div className='flex justify-start'>
                            <button className='bg-red-500 py-2 rounded text-white mt-5 text-start px-5'>Login</button>
                        </div>
                    </form>


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