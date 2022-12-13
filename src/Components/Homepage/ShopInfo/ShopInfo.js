import React from 'react';
import img1 from '../../../assests/features/f1.png'
import img2 from '../../../assests/features/f2.png'
import img3 from '../../../assests/features/f3.png'
import img4 from '../../../assests/features/f4.png'
import img5 from '../../../assests/features/f5.png'
import img6 from '../../../assests/features/f6.png'

const ShopInfo = () => {

    const infoData = [
        {
            id: 1,
            name: 'Free Shipping',
            img: img1
        },
        {
            id: 2,
            name: '24 /7 Support',
            img: img2
        },
        {
            id: 3,
            name: 'Save Money',
            img: img3
        },
        {
            id: 4,
            name: 'Promosions',
            img: img4
        },
        {
            id: 5,
            name: 'Happy Sell',
            img: img5
        },
        {
            id: 6,
            name: 'Online Order',
            img: img6
        },
    ]

    console.log('new', infoData)

    return (
        <div className='grid grid-cols-6 gap-8 px-20 mt-16'>
            {
                infoData.map(info => {
                    const { img, name, bg } = info
                    return (
                        <>
                            <div className='border border-[#ccccccab] px-[10px] py-[20px] rounded-[5px] text-center'>
                                <img src={img} alt="" />
                                <h1 className='text-lg pt-3'>  {name}</h1>
                            </div>
                        </>
                    )
                })
            }
        </div>
    );
};

export default ShopInfo;