import React from 'react';
import img1 from '../../../assests/banner/b7.jpg'


const Banner = () => {
    const bannerData = [
        {
            id: 1,
            name: "Sesonal Sell",
            dec: 'lorem insum in the main catagory',
            img: img1
        },
        {
            id: 2,
            name: "Sesonal Sell",
            dec: 'lorem insum in the main catagory',
            img: img1
        },
        {
            id: 3,
            name: "Sesonal Sell",
            dec: 'lorem insum in the main catagory',
            img: img1
        },
    ]

    return (
        <div>
            <div className='grid grid-cols-3 gap-10 px-20'>
                {
                    bannerData.map(Bdata => {
                        const { name, img, dec } = Bdata
                        console.log(Bdata)
                        return (
                            <>
                                <div className="card w-96 shadow-xl image-full">
                                    <figure><img src={img} alt={name} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{name}</h2>
                                        <p>{dec}</p>

                                    </div>
                                </div></>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Banner;