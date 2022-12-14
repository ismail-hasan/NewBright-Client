import React from 'react';

const Register = () => {
    return (
        <div className='bg-red-500 '>
            <div className='flex justify-center items-center h-screen px-20'>
                <div className='bg-white w-1/2 py-20 text-center'>
                    <h1 className='text-3xl font-[500]'>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, quidem!</p>
                    <button className="btn btn-active btn-secondary">Button</button>
                </div>
                <div className='w-1/2 bg-green-500 py-20 px-10'>
                    <input name='name' type="text" placeholder="Type here" className="input input-bordered w-full mt-4" />
                    <input name='email' type="text" placeholder="Type here" className="input input-bordered w-full mt-4" />
                    <input name='' type="text" placeholder="Type here" className="input input-bordered w-full mt-4" />
                    <button className="btn btn-active btn-secondary mt-5">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Register;