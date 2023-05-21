import React from 'react';
import SliderBanner from './SliderBanner/SliderBanner';
import Gallery from './Gallery/Gallery';
import ShopCategory from '../ShopCategory/ShopCategory';
import useTitle from '../../../Hooks/useTitle';
import BrowseOfScale from '../BrowseOfScale/BrowseOfScale';

const Home = () => {
    useTitle('Home')

    return (
        <div>
            <SliderBanner/>
            <Gallery/>
            <ShopCategory/>
            <BrowseOfScale/>
        </div>
    );
};

export default Home;