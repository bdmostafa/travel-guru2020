import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import { Container } from 'react-bootstrap';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div className="home-bg text-white">
            <div className="card-overlay">
                <Container>
                    <Header />
                    <Slider />
                </Container>
            </div>
        </div>
    );
};

export default Home;