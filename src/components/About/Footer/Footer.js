import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className=" bg-dark text-white py-2">
            <div className="container py-4">
                <Row >
                    <Col lg="4">
                        <h3><i className="fas fa-graduation-cap"></i> OnlineSchool</h3>
                        <br />
                        <h3><i className="fab fa-facebook-square p-2"></i>  <i class="fab fa-instagram-square p-2"></i>  <i className="fab fa-linkedin p-2"></i>   <i className="fab fa-youtube-square p-2"></i></h3>
                        <h6>Email: <a href="cse.shamimahmed@gmail.com" target="_blank">shamimahmed@gmail.com </a></h6>
                        <h6>Call: +8801786009537</h6>
                        <br></br>
                        <button className=" google-button bg-dark text-white"><i class="fab fa-google-play "></i>GET IT ON <br />Google Play</button>
                    </Col>
                    <Col xs lg="3">
                        <h3>Popular courses</h3>
                        <br />
                        <h6>Web Development</h6>
                        <h6>Android Development</h6>
                        <h6>Python and Machine Learning</h6>
                        <h6>English Spoken</h6>
                        <h6>Facebook Marketing</h6>

                    </Col>
                    <Col xs lg="5" className="text-info">
                        <h4>Our mission is to provide a free, world-class education to anyone, anywhere.</h4>
                        <br />
                        <p><span className="text-primary"> Online School</span> is a nonprofit organization. Donate or volunteer today!</p>

                    </Col>
                </Row>
            </div>
            <hr></hr>
            <footer className="text-center"><i class="far fa-copyright"></i>2021 Online School </footer>
        </div>
    );
};

export default Footer;