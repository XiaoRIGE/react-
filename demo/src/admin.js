import React, { Component } from 'react'

import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/home'

export default class Admin extends Component {
    render() {
        return (
            <Row className="container">
                <Col className="nav-left" span={3}>
                    <NavLeft ></NavLeft>
                </Col>
                <Col className="main" span={21}>
                    <Header></Header>
                    <Row className="content">
                        <Home>
                            {this.props.children}
                        </Home>
                    </Row>

                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
};
