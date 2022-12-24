import React from 'react';
import Banner from './Banner/Banner';
import Home from './Home/Home';
import HomeBLog from './HomeBLog/HomeBLog';
import RecentProduct from './RecentProduct/RecentProduct';
import ShopInfo from './ShopInfo/ShopInfo';
import ShowOffBanner from './ShowOffBanner/ShowOffBanner';

const HomePage = () => {
    return (
        <div className=''>
            <Home></Home>
            <ShopInfo></ShopInfo>
            <ShowOffBanner></ShowOffBanner>
            <RecentProduct></RecentProduct>
            <Banner></Banner>
            <HomeBLog></HomeBLog>
        </div>
    );
};

export default HomePage;