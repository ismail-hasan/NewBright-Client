import React from 'react';
import img from '../../assests/about/a6.jpg'

const About = () => {
    return (
        <div className='p-20 flex justify-between items-center gap-10'>
            <div className='w-[50%]'>
                <img src={img} alt="" />
            </div>
            <div className='w-1/2'>
                <h1 className='text-4xl capitalize text-black font-semibold pb-3'>Who We Are </h1>
                <p className='text-lg '>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque in dolorem suscipit ipsam delectus unde officiis iusto earum sequi! Quasi molestias culpa dolorum. Dolor officia consectetur, totam, enim rem repellendus non vel ea tenetur, quasi inventore obcaecati dignissimos qui excepturi tempore explicabo a fuga error nam quae aut quos esse laboriosam! Quasi assumenda, tempora, distinctio earum fugit tenetur, dolores quidem aut dicta aliquid incidunt? Velit pora unde, illum molestiae modi quia non possimus
                </p>
            </div>
        </div>
    );
};

export default About;