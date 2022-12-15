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
            <div className='grid grid-cols-3 gap-10 px-20 pb-20'>
                {
                    bannerData.map(Bdata => {
                        const { name, img, dec } = Bdata
                        console.log(Bdata)
                        return (
                            <div key={Bdata.id}>
                                <div className="relative text-white">
                                    <img src={img} className="" alt={name} />
                                    <div className="absolute w-full text-center top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                                        <h2 className="text-[29px] font-[500] ">{name}</h2>
                                        <p className='text-lg'>{dec}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default Banner;