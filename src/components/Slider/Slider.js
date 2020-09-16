import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Row, Col, Container } from 'react-bootstrap';
import coxsBazar from '../../images/Image/Rectangle 1.png';
import sreemangal from '../../images/Image/Sreemongol.png';
import sundarbans from '../../images/Image/sundorbon.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


let items = [
    {
        name: "COX'S BAZAR",
        description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...",
        img: coxsBazar
    },
    {
        name: "SREEMANGAL",
        description: "Madhobpur Lake is one of the main tourist attractions in the area, and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh. It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.",
        img: sreemangal
    },
    {
        name: "SUNDARBANS",
        description: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh",
        img: sundarbans
    },
]

function Item({item: {name, description, img}}) {
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
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Button variant="warning" className="CheckButton font-weight-bold">
                        Booking <ArrowRightAltIcon />
                        <Redirect to={`/${name}`} />
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
                items.map((item, idx) => <Item key={idx} item={item} />)
            }
        </Carousel>
    );
};

export default Slider;