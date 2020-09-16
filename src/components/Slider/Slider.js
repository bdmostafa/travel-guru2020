import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Row, Col, Container } from 'react-bootstrap';
import coxsBazar from '../../images/Image/Rectangle 1.png';
import sreemangal from '../../images/Image/Sreemongol.png';
import sundarbans from '../../images/Image/sundorbon.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';
import areaData from '../../DataStore/AreaData';

function Item({item: {areaName, description, img}}) {
    const [sliderImage, setSliderImage] = useState([coxsBazar, sreemangal, sundarbans]);
    // useEffect executes when map img is changed and update state 
    useEffect(()=> {
        if(img === sreemangal) {
            setSliderImage([ sreemangal, coxsBazar, sundarbans])
        }
        if(img === sundarbans) {
            setSliderImage([sundarbans, sreemangal, coxsBazar])
        }
    }, [img])

    return (
        <Container style={{ backgroundColor: 'transparent', color: 'white', marginTop: '100px' }}>
            <Row>
                <Col style={{ maxWidth: '25%' }}>
                    <h2>{areaName}</h2>
                    <p>{description}</p>
                    <Button variant="warning" className="CheckButton font-weight-bold">
                        <Link to={`/area/${areaName}`}>
                        Booking <ArrowRightAltIcon />
                        </Link>
                    </Button>
                </Col>
                <Col className="slider-right" style={{ width: '75%' }}>
                    <img className="active" src={sliderImage[0]} alt="" />
                    <img src={sliderImage[1]} alt="" />
                    <img src={sliderImage[2]} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

const Slider = () => {
    return (
        <Carousel>
            {
                areaData.map((item, idx) => <Item key={idx} item={item} />)
            }
        </Carousel>
    );
};

export default Slider;