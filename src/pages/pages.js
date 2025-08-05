import React from 'react';
import Header from '../component/header/header';
import LowerHeader from '../component/header/lowerHeader';
import CarouselEffect from "../component/carousel/carouselEffect"
import Catagory from "../component/catagory/catagory";
import Product from "../component/product/product"

const Pages = () => {
    return (
        <div>
            <Header />
            <LowerHeader/>
            <CarouselEffect />
            <Catagory />
            <Product />
        </div>
    );
}

export default Pages;
