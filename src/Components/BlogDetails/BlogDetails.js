import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blogDetails = useLoaderData()
    console.log(blogDetails)
    const { img, name, dec } = blogDetails
    return (
        <div className='p-20 '>
            <div className='w-3/4 mx-auto'>
                <img className='' src={img} alt="" />
                <h1 className='font-semibold capitalize mt-8 text-[46px]'>{name}</h1>
                <p className='text-lg'>{dec}</p>
            </div>
        </div>
    );
};

export default BlogDetails;