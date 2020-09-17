import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import areaData from '../../DataStore/AreaData';
import DatePicker from 'react-datepicker';

const Booking = () => {
    const { areaName } = useParams();
    const selectedArea = areaData.find(area => area.areaName === areaName);
    const [startDate, setStartDate] = useState(new Date());
    const [userDestinationData, setUserDestinationData] = useState({
        origin: '',
        destination: '',
        startDate: '',
        endDate: ''
    });
    // const { origin, destination } = userDestinationData;

    // Booking state will be true when booking form is filled up
    // const [isFormCompleted, setIsFormCompleted] = useState(false);

    // const handleSubmit = (e) => {
    //     if (origin && destination && startDate) {
    //         console.log('ok')
    //         const form = { ...userDestinationData }
    //         form[isFieldValid] = true;
    //         console.log(isFieldValid)
    //     }
    // }

    // const showError = (e) => {
    //     if (e) return 'text';
    //     else return 'hidden';

    // }
// console.log(isFieldValid)
//     const handleBlur = (e) => {

//         let isFieldValid = true;

//         if (e.target.value === '') {
//             isFieldValid = false;
//         }

//         if (e.target.name === 'startDate' || e.target.name === 'endDate') {
//             if (e.target.value === '') isFieldValid = false;
//         }

//         // Update UserDestinationData state
//         if (isFieldValid) {
//             const newUserDestinationInfo = { ...userDestinationData }
//             newUserDestinationInfo[e.target.name] = e.target.value;
//             setUserDestinationData(newUserDestinationInfo);
//         }
//     }

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
                                    <Form.Control
                                        name="origin"
                                        placeholder="DHAKA"
                                        required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control
                                        name="destination"
                                        placeholder={areaName}
                                        defaultValue={areaName}
                                        required />
                                </Form.Group>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>From</Form.Label>
                                        <br />
                                        <DatePicker
                                            name="startDate"
                                            className="form-control"
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>To</Form.Label>
                                        <br />
                                        <DatePicker
                                            name="endDate"
                                            className="form-control mr-auto"
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            required 
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Link to={`/listings/${areaName}`}>
                                    <Button
                                        className="w-100 mt-3"
                                        variant="warning"
                                        type="submit">
                                            Start Booking
                                    </Button>
                                </Link>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default Booking;