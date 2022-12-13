import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogDatas = useLoaderData()
    return (
        <div className='px-20 py-20'>
            <div>
                {
                    blogDatas.map(blogData => {
                        const { name, img, dec } = blogData
                        return (
                            <div key={blogData._id}>
                                <div className='flex items-center gap-16 mt-10'>
                                    <div className='w-[40%]'>
                                        <img src={img} alt="" />
                                    </div>
                                    <div className='w-[50%]'>
                                        <h1 className='text-[40px] text-black font-semibold capitalize'> {name}</h1>
                                        <p className='text-lg mt-2 mb-5'>{dec}</p>
                                        <Link className=' text-[tomato] hover:text-blue-500 flex items-center' href="#">
                                            <span className='text-lg'>Read More To You Are Enjoyed</span>
                                            <span className='bg-[tomato] hover:text-blue-500 h-[3px] ml-3 w-48 inline-block'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Blog;