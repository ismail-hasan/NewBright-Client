import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Review.css";
import { useQuery } from '@tanstack/react-query';



const ReviewInfo = () => {
    // const [reviewInfo, setReviewInfo] = useState([])



    const { data: reviewInfo = [], refetch, isLoading } = useQuery({
        queryKey: ["review"],
        queryFn: async () => {
            const res = await fetch("https://bright-ecommerce.vercel.app/review")
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <h1>dsfsdf</h1>
    }

    // useEffect(() => {
    //     fetch("https://bright-ecommerce.vercel.app/review")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setReviewInfo(data)
    //                 ()
    //         })
    // }, [refetch])
    refetch()

    return (
        <div className='my-20'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                style={{ height: "50vh", width: "80vw", backgroundColor: '#eee' }}
                pagination={{
                    clickable: true,
                }}
                grabCursor
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <div className=''>
                    {
                        reviewInfo.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <SwiperSlide>
                                        <div >
                                            <p>{item.reviweName}</p>
                                            <p>{item.reviweDec}</p>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }
                </div>

            </Swiper>
        </div >
    );
};

export default ReviewInfo;