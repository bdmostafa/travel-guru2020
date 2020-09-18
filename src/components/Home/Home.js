import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Home.css'
import { Container } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import { UserContext } from '../../App';

const Home = () => {
    // Get user name to pass as props on Header component when signed in
    const {loggedUser} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;
    return (
        <div className="home-bg text-white">
            <div className="card-overlay">
                <Container>
                    <Header currentUser={loggedInUser.name || loggedInUser.email} />
                    <Slider />
                </Container>
            </div>
        </div>
    );
};

export default Home;