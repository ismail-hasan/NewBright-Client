import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeBLog = () => {


    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/limitbLog`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogs(data)
            })

    }, [])

    console.log(blogs)
    return (
        <div className='pb-20 px-10 lg:px-20'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    blogs.map(blog => {
                        const { name, img, dec, _id } = blog
                        return (
                            <div key={blog._id}>
                                <Link to={`blogs/${_id}`}>
                                    <img src={img} alt="" />
                                    <div className='py-4 text-black '>
                                        <h1 className='text-3xl pb-3 fotn-[500] capitaliz'>{name}</h1>
                                        <p>{dec.length > 100 ? dec.slice(0, 100) : dec + "see more"}</p>

                                    </div>
                                </Link>


                            </div>
                        )
                    })
                }
            </div>
            <Link to='/blogs'>
                <div className='w-full lg:w-[20%] mx-auto my-16'>
                    <button className='bg-[tomato] text-white py-2 px-6 text-center capitalize text-lg '>read more</button>
                </div>
            </Link>
        </div>
    );
};

export default HomeBLog;