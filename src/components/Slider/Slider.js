import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Row, Col, Container } from 'react-bootstrap';
import coxsBazar from '../../images/Image/Rectangle 1.png';


let items = [
    {
        name: "COX'S BAZAR",
        description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...",
        img: coxsBazar
    },
    {
        name: "COX'S BAZAR",
        description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...",
        img: coxsBazar
    },
    {
        name: "COX'S BAZAR",
        description: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...",
        img: coxsBazar
    },
]

function Item(props) {
    return (

        <Container style={{ backgroundColor: 'transparent', color: 'white', marginTop: '100px' }}>
            <Row>
                <Col style={{ maxWidth: '25%' }}>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                    <Button variant="warning" className="CheckButton font-weight-bold">
                        Booking!
                    </Button>
                </Col>
                <Col className="slider-right" style={{ width: '75%' }}>
                    <img className="active" src={props.item.img} alt="" />
                    <img src={props.item.img} alt="" />
                    <img src={props.item.img} alt="" />
                </Col>
            </Row>
        </Container>

    )
}

const Slider = () => {
    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    );
};

export default Slider;