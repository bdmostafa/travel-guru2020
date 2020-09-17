import React, { useContext } from 'react';
import Header2 from '../Header/Header2';
import { Container, Row, Col } from 'react-bootstrap';
import suitesData from '../../DataStore/SuitesData';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';
import WifiIcon from '@material-ui/icons/Wifi';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';


const Listings = () => {
    // Get user name to pass as props on Header2 component when signed in
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { areaName } = useParams();

    // Filter specific area from listings data store that a user intends to stay in
    const filteredSuites = suitesData.filter(suite => suite.area === areaName);

    return (
        <div>
            <Container>
                <Header2 user={loggedInUser.name} />
                <hr className="hr-header" />
                <div className="d flex">
                    <p>176 stays Sep 19-25 guests</p>
                    <h4 className="font-weight-bold">Stay in {areaName}</h4>
                </div>
                <Row>
                    <Col className="w-50" >
                        {
                            filteredSuites.map(suite =>
                                <Row key={suite.id}>
                                    <Col className="w-50" md={6} xs={12}>
                                        <img className="w-100" src={suite.img} alt="" /> <br />
                                    </Col>
                                    <Col className="w-50" md={6} xs={12}>
                                        <h5 className="font-weight-bold"> {suite.name} </h5>
                                        <p>{suite.features}</p>
                                        {/* <p>{suite.info}</p> */}
                                        <p>
                                            <WifiIcon style={{ color: "green" }} /> Wifi
                                            <LocalTaxiIcon style={{ color: "mediumblue" }} /> Free Parking
                                            <RoomServiceIcon style={{ color: "darkblue" }} /> Room Service
                                            <ChildFriendlyIcon style={{ color: "blueviolet" }} /> Child Friendly
                                        </p>
                                        <p>
                                            <StarIcon style={{ color: 'orange' }} />
                                            <span className="font-weight-bold"> {' '} {suite.feedback}</span>
                                            <span className="font-weight-bold">{' '} ${suite.rate}/</span>night
                                            <span>{' '}{suite.total}</span>
                                        </p>
                                    </Col>
                                </Row>

                            )
                        }
                    </Col>
                    <Col className="w-50">
                        <img className="w-100" src="https://i.ibb.co/sKj6zBG/acf-google-map-field-interface.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Listings;