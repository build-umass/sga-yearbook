// Imports
import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';

import Navbar from '../components/Navbar';
import Colors from '../components/Colors'
import DetailsThumb from '../components/DetailsThumb';
import logo from '../public/firstEdition.png'
import Image from "next/image";

export default function Index () {

    const [products, setProducts] = React.useState([{
        "_id": "1",
        "title": "Yearbook",
        "src": ['/index2005.jpg'],
        "description": "Get your limited yearbooks",
        "content": "The Index is UMass Amherst’s student-published yearbook, and the oldest yearbook in New England, having originally been published in 1870.  It chronicles anything and everything about UMass undergraduate student life, including memories, current events, clubs, agencies, athletics, student works of art, and lots of pictures.  For seniors, the yearbook also includes the graduating class, ordered by academic college, and signature pages.  In the 2021-2022 academic year, the Index is resuming publication after a 16-year hiatus!  \n" +
            "\n",
        "price": 9.99,
        "colors":[],
        "count": 1
    }])

    const [index, setIndex] = React.useState(0);

    return (
        <div>
            <div className="about-bg">
                <div className="bg-gradient-transparent">
                    <Navbar />
                </div>
            </div>
            {
                products.map(item =>(
                    <div className="details" key={item._id}>
                        <div className="big-img">
                            <Image src={item.src[index]} alt="site logo" width={500} height={500} />
                        </div>

                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <Colors colors={item.colors} />
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <a href="https://timothynguyen.github.io/TimothyNguyen/" className="button">Add to Cart</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
