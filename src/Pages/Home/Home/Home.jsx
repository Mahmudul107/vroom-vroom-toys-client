import React from 'react';
import SliderBanner from './SliderBanner/SliderBanner';
import Gallery from './Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import useTitle from '../../../Hooks/useTitle';
import BrowseOfScale from '../BrowseOfScale/BrowseOfScale';
import AboutUs from '../AboutUs';

const Home = () => {
    useTitle('Home')

    return (
        <div className='bg-gradient-to-r from-gray-200 via-red-100 p-8'>
            <SliderBanner/>
            <Gallery/>
            <ShopCategory/>
            <AboutUs/>
            <BrowseOfScale/>
        </div>
    );
};

export default Home;