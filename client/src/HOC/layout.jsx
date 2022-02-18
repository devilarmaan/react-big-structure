import React from 'react';
import Navigation from '../components/common/nav';
import Footer from '../components/common/footer';
import { Container } from 'react-bootstrap';

const Layout = (props) => {
    return (
        <>
            <Navigation />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    );
};

export default Layout;