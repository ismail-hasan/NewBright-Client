import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blogDetails = useLoaderData()
    console.log(blogDetails)
    const { img, name, dec } = blogDetails
    return (
        <div className='p-5 lg:p-20 '>
            <div className='w-full lg:w-3/4 mx-auto'>
                <img className='w-full' src={img} alt="" />
                <h1 className='font-semibold capitalize mt-4 lg:mt-8 text-[46px]'>{name}</h1>
                <p className='text-lg'>{dec}</p>
            </div>
        </div>
    );
};

export default BlogDetails;