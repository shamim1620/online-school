import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Item from '../Item/Item';
import './Services.css';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(Response => Response.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="course-section">
            <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <Item course={course}></Item>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;