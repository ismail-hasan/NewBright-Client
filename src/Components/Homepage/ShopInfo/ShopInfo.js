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
            bgc: "bg-[#8FE2EB]",
            hoverColor: "hover:bg-[#009eff]"
        },
        {
            id: 2,
            name: '24 /7 Support',
            img: img2,
            bgc: "bg-[#E189BC]",
            hoverColor: "hover:bg-[#ff0094]"
        },
        {
            id: 3,
            name: 'Save Money',
            img: img3,
            bgc: "bg-[#B8DD7F]",
            hoverColor: "hover:bg-[#9bff00]"
        },
        {
            id: 4,
            name: 'Promosions',
            img: img4,
            bgc: "bg-[#8AC1E3]",
            hoverColor: "hover:bg-[#0598f2]"
        },
        {
            id: 5,
            name: 'Happy Sell',
            img: img5,
            bgc: "bg-[#A592E0]",
            hoverColor: "hover:bg-[#3b05e3]"
        },
        {
            id: 6,
            name: 'Online Order',
            img: img6,
            bgc: "bg-[#BE9074]",
            hoverColor: "hover:bg-[#e35d0b]"
        },
    ]

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 px-10 lg:gap-8 lg:px-20 mt-16'>
            {
                infoData.map(info => {
                    const { img, name, bgc, hoverColor } = info
                    return (
                        <div key={info.id}>
                            <div className={` border shadow-sm border-[#ccccccab] px-[10px] py-[20px] rounded-[5px] text-center`}>
                                <img src={img} alt="" />
                                <h1 className={`${bgc} transition-all cursor-pointer ${hoverColor} rounded-md py-[3px] text-white mt-3`}>{name}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    );
};

export default ShopInfo;