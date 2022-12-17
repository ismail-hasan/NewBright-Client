import React from 'react';
import Banner from './Banner/Banner';
import Home from './Home/Home';
import HomeBLog from './HomeBLog/HomeBLog';
import ShopInfo from './ShopInfo/ShopInfo';
import ShowOffBanner from './ShowOffBanner/ShowOffBanner';

const HomePage = () => {
    return (
        <div className=''>
            <Home></Home>
            <ShopInfo></ShopInfo>
            <ShowOffBanner></ShowOffBanner>
            <Banner></Banner>
            <HomeBLog></HomeBLog>
        </div>
    );
};

export default HomePage;