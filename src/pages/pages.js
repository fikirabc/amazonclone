import React from 'react';
import Header from '../component/header/header';
import LowerHeader from '../component/header/lowerHeader';
import CarouselEffect from "../component/carousel/carouselEffect"
import Catagory from "../catagory/catagory"

const Pages = () => {
    return (
        <div>
            <Header />
            <LowerHeader/>
            <CarouselEffect />
            <Catagory />
        </div>
    );
}

export default Pages;
