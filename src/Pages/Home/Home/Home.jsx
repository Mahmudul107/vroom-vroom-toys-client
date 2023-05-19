import React from 'react';
import SliderBanner from './SliderBanner/SliderBanner';
import Gallery from './Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';

const Home = () => {
    return (
        <div>
            <SliderBanner/>
            <Gallery/>
            <ShopCategory/>
        </div>
    );
};

export default Home;