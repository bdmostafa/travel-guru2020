import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home-bg">
            <div className="card-overlay">
                <Container>
                    <Header />
                </Container>
            </div>

        </div>
    );
};

export default Home;