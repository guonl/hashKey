import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd';
import { hashHistory } from 'react-router';
import { WrapperMobileFrame } from './styled';
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'
const banner01 = require("web-hashKey-imgs/home/mobile/gk/m_b_01ch.png");
const banner02 = require("web-hashKey-imgs/home/mobile/m_b_02.png");
const banner03 = require("web-hashKey-imgs/home/mobile/gk/m_b_03ch.png");
const langChangeBG = require("web-hashKey-imgs/home/mobile/more.png");
const closeModalBG = require("web-hashKey-imgs/home/mobile/close.png");

@observer
class MobileEN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langChangeModal: false
        }
    }

    render() {
        return (
            <WrapperMobileFrame>
                {this.state.langChangeModal ?
                    <Row className="langChangeModal">
                        <a href="javascript:;" className="close" onClick={() => this.setState({ langChangeModal: false })}>
                            <img src={closeModalBG} />
                        </a>
                        <Row type="flex" justify="center" className="langFrame">
                            <div className="title">语言</div>
                            <div span={10} className={LocaleStore.currentLocales == "en" ? "ops selected" : "ops"} onClick={() => LocaleStore.changeLocaleConfig("en")}>En</div>
                            <div span={10} className={LocaleStore.currentLocales == "gk" ? "ops selected" : "ops"} onClick={() => LocaleStore.changeLocaleConfig("gk")}>繁体中文</div>
                        </Row>
                    </Row> : null
                }
                <Row className="bannerFrame">
                    <div className="langChange">
                        <a href="javascript:;" className="" onClick={() => this.setState({ langChangeModal: true })}><img src={langChangeBG} /></a>
                    </div>
                    <Carousel autoplay>
                        <img src={banner01} />
                        <img src={banner02} />
                        <img src={banner03} />
                    </Carousel>
                </Row>
                <Row className="imgFrame"><img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_01ch.png")} /></Row>
                <Row className="imgFrame"><img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_02ch.png")} /></Row>
                <Row className="imgFrame offerings">
                    <a href="javascript:;" className="btn" onClick={() => hashHistory.push("/prdDetail")}>详细介绍</a>
                    <img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_03ch.png")} />
                </Row>
                <Row className="imgFrame"><img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_04ch.png")} /></Row>
                <Row className="contactFrame" type="flex" justify="center" align="middle">
                    <Col span={18}>
                        <Row className="title">Contact Us</Row>
                        <Row className="text">Address: Unit 614 - 15, Level 6, Core D, Cyberport 3, 100 Cyberport Road, Hong Kong</Row>
                        <Row className="text">Email: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-830631077275937/?modal=admin_todo_tour" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperMobileFrame>
        )
    }
}

module.exports = MobileEN;