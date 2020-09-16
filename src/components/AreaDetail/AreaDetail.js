import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import areaData from '../../DataStore/AreaData';
import DatePicker from 'react-datepicker';
import ControlLabel from 'react-datepicker';

const AreaDetail = () => {
    const { areaName } = useParams();
    const selectedArea = areaData.find(area => area.areaName === areaName);
    const [startDate, setStartDate] = useState(new Date());
    // const datePicker = () => {
    //     const [startDate, setStartDate] = useState(new Date());
    //     return (
    //       <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    //     );
    //   };

    return (
        <div className="home-bg text-white">
            <div className="card-overlay">
                <Container>
                    <Header />
                    <Row>
                        <Col className="mr-5">
                            <h2>{selectedArea.areaName}</h2>
                            <p>{selectedArea.longIntro}</p>
                        </Col>
                        <Col className="form-area ml-5">
                            <Form>
                                <Form.Group>
                                    <Form.Label>Origin</Form.Label>
                                    <Form.Control placeholder="Dhaka" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control placeholder="Cox's Bazar" />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>From</Form.Label>
                                        <br />
                                        <DatePicker className="form-control" selected={startDate} onChange={date => setStartDate(date)} />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>To</Form.Label>
                                        <br />
                                        <DatePicker className="form-control mr-auto" selected={startDate} onChange={date => setStartDate(date)} />
                                    </Form.Group>
                                </Form.Row>

                                <Button className="w-100" variant="warning" type="submit">
                                    Start Booking
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default AreaDetail;