import React from 'react';
import Head from 'next/head'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'

export default function Index() {
    return (
        <div>
            <Head>
                <title>The Index</title>
            </Head>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        The Index
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav custom-toggler"
                        className="justify-content-end"
                    >
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}