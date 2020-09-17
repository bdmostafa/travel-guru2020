import React from 'react';
import Header2 from '../Header/Header2';
import { Container, Row, Col } from 'react-bootstrap';
import suitesData from '../../DataStore/SuitesData';


const Listings = () => {
    return (
        <div>
            <Container>
                <Header2 />
                <hr className="hr-header" />
                <div className="d flex">
                        <p>176 stays Sep 19-25 guests</p>
                        <h2>Stay in Cox's Bazar</h2>
                    </div>
                <Row>
                    {
                        suitesData.map(suite =>
                            <Col className="w-50" key={suite.id}>
                                <Row>
                                    <Col className="w-50"> <img className="w-100" src={suite.img} alt="" /> </Col>
                                    <Col className="w-50">
                                        <h2> {suite.name} </h2>
                                        <p>{suite.features}</p>
                                        <p>{suite.info}</p>
                                        <p>{suite.feedback} {suite.rate} {suite.total}</p>
                                    </Col>
                                </Row>
                            </Col>
                        )
                    }
                    <Col className="w-50">map <img className="w-100" src={suitesData[0].img} alt="" /> </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Listings;