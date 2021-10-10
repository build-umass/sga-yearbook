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
import Footer from '../components/Footer';

export default function Index () {

    const [products, setProducts] = React.useState([{
        "_id": "1",
        "title": "Yearbook",
        "src": [],
        "description": "Get your limited yearbooks",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
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
                            <img src={item.src[index]} alt=""/>
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
        <Footer />
        </div>
    );
}
