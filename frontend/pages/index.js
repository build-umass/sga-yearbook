// Imports
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import History from './history';
import ProductPage from "./product_page";
import Image from 'next/image';
import backgroundImg from '../assets/umass_fall.jpeg';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Index () {
    return (
        <div className="outer">
            <div className="bg-image">
                <Image
                    layout="fill"
                    src={backgroundImg}
                />
            </div>
            <div className="content">
                <div className="about-bg">
                    <div className="bg-gradient-transparent">
                        <Navbar />
                    </div>
                    <div>
                        <History />
                    </div>
                </div>
                <ProductPage />
            </div>
        </div>
    );
}
