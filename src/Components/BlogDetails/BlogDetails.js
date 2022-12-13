import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const blogDetails = useLoaderData()
    console.log(blogDetails)
    return (
        <div>

        </div>
    );
};

export default BlogDetails;