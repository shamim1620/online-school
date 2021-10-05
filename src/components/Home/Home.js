
import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import Item from '../Item/Item';
import './Home.css'


const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./data.JSON')
            .then(Response => Response.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='course-section'>
            <div className="container">
                <div className="top-banner d-flex">
                    <div>
                        <h1>Learn from Online School and build your Career</h1>

                    </div>
                    <div>
                        <img src="" alt=""></img>

                    </div>

                </div>
                <div >
                    <Row xs={1} md={3} className="g-4">
                        {
                            courses.slice(0, 6).map(course => <Item course={course}></Item>)
                        }
                    </Row>
                </div>
            </div>

        </div>
    );
};

export default Home;