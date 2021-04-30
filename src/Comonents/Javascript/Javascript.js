import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import variable from './Images/variable.png';
import datatype from './Images/datatype.jpg';
import operators from './Images/operators.jpg';
import ifelse from './Images/ifelse.png';
import switchcase from './Images/switchcase.gif';
import loop from './Images/loop.png';

import array from './Images/array.png';
import func from './Images/func.png';
import string from './Images/string.jpg';
import objects from './Images/objects.jpg';

import './Javascript.css'
import { Link } from 'react-router-dom';
const Javascript = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>

                <Row>
                    <Col className="mb-5" lg={4} md={6} sm={6} xs={12}>
                        <Link to='/variable'>
                            <div className="align">
                            <img src={variable} className="topic-img img-fluid" alt=""/>
                            </div>
                        </Link>
                    </Col>

                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                            <img src={datatype} className="topic-img img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>

                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                            <img src={operators} className="topic-img img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>

                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                        <img src={ifelse} className="topic-img brd-img img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>

                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                        <img src={switchcase} className="topic-img brd-img img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>
                    
                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                        <img src={loop} className="topic-img brd-img img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>
                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                            <div className="align">
                            <img src={array} className="topic-img img-fluid" alt=""/>
                            </div>
                        </Link>
                    </Col>
                    
                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                        <img src={func} className="topic-img  img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>

                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                        <img src={string} className="topic-img  img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>

                    <Col className="mb-5" lg={4}  md={6} sm={6} xs={12}>
                        <Link>
                        <div className="align">
                        <img src={objects} className="topic-img  img-fluid" alt=""/>
                        </div>
                        </Link>
                    </Col>

                </Row>
                
            </Container>
        </div>
    );
};

export default Javascript;