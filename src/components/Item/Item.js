import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Item.css';

const Item = (props) => {
    const { title, teacher, price, image } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="course-img" variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>{teacher}</p>
                            <p>{price}</p>
                        </Card.Text>
                        <Button variant="primary">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Item;