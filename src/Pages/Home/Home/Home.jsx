import React from 'react';
import SliderBanner from './SliderBanner/SliderBanner';
import Gallery from './Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import useTitle from '../../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <SliderBanner/>
            <Gallery/>
            <ShopCategory/>
        </div>
    );
};

export default Home;