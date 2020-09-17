import React, { useContext } from 'react';
import Header2 from '../Header/Header2';
import { Container, Row, Col } from 'react-bootstrap';
import suitesData from '../../DataStore/SuitesData';
import { UserContext } from '../../App';


const Listings = () => {
    // Get user name to pass as props on Header2 component when signed in
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Container>
                <Header2 user={loggedInUser.name} />
                <hr className="hr-header" />
                <div className="d flex">
                    <p>176 stays Sep 19-25 guests</p>
                    <h2>Stay in Cox's Bazar</h2>
                </div>
                <Row>
                    <Col className="w-50" >
                        {
                            suitesData.map(suite =>
                                <Row key={suite.id}>
                                    <Col className="w-50"> <img className="w-100" src={suite.img} alt="" /> </Col>
                                    <Col className="w-50">
                                        <h2> {suite.name} </h2>
                                        <p>{suite.features}</p>
                                        <p>{suite.info}</p>
                                        <p>{suite.feedback} {suite.rate} {suite.total}</p>
                                    </Col>
                                </Row>

                            )
                        }
                    </Col>
                    <Col className="w-50">map <img className="w-100" src={suitesData[0].img} alt="" /> </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Listings;