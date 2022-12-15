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
            img: img1,
            bgc: "bg-[#8FE2EB]"
        },
        {
            id: 2,
            name: '24 /7 Support',
            img: img2,
            bgc: "bg-[#E189BC]"
        },
        {
            id: 3,
            name: 'Save Money',
            img: img3,
            bgc: "bg-[#B8DD7F]"
        },
        {
            id: 4,
            name: 'Promosions',
            img: img4,
            bgc: "bg-[#8AC1E3]"
        },
        {
            id: 5,
            name: 'Happy Sell',
            img: img5,
            bgc: "bg-[#A592E0]"
        },
        {
            id: 6,
            name: 'Online Order',
            img: img6,
            bgc: "bg-[#BE9074]"
        },
    ]

    return (
        <div className='grid grid-cols-6 gap-8 px-20 mt-16'>
            {
                infoData.map(info => {
                    const { img, name, bgc } = info
                    return (
                        <div key={info.id}>
                            <div className='border border-[#ccccccab] px-[10px] py-[20px] rounded-[5px] text-center'>
                                <img src={img} alt="" />
                                <h1 className={`${bgc} text-lg rounded-md py-[3px] text-white mt-3`}>{name}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    );
};

export default ShopInfo;