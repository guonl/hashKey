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
                            <div span={10} className={LocaleStore.currentLocales == "gk" ? "ops selected" : "ops"} onClick={() => LocaleStore.changeLocaleConfig("gk")}>繁體中文</div>
                            <div span={10} className={LocaleStore.currentLocales == "cn" ? "ops selected" : "ops"} onClick={() => LocaleStore.changeLocaleConfig("cn")}>简体中文</div>
                            <div span={10} className="ops" onClick={() => hashHistory.push("/digital-asset-summit-2019")}>峰會</div>
                        </Row>
                    </Row> : null
                }
                <Row className="bannerFrame">
                    <div className="langChange">
                        <a href="javascript:;" className="" onClick={() => this.setState({ langChangeModal: true })}><img src={langChangeBG} /></a>
                    </div>
                    <Carousel autoplay>
                        <img src={banner01} className="banner" />
                        <a href="javascript:;" onClick={() => hashHistory.push("/digital-asset-summit-2019")} className="banner">
                            <img src={banner02} className="banner" />
                        </a>
                        {/* <img src={banner03} className="banner" /> */}
                    </Carousel>
                </Row>
                <Row className="imgFrame"><img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_01ch.png")} /></Row>
                <Row className="imgFrame"><img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_02ch.png")} /></Row>
                {/* <Row className="imgFrame offerings">
                    <a href="javascript:;" className="btn" onClick={() => hashHistory.push("/prdDetail")}>详细介绍</a>
                    <img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_03ch.png")} />
                </Row> */}
                <Row className="imgFrame"><img src={require("web-hashKey-imgs/home/mobile/gk/gw_m_04ch.png")} /></Row>
                <Row className="contactFrame" type="flex" justify="center" align="middle">
                    <Col span={18}>
                    <Row className="title">聯繫我們</Row>
                        <Row className="text">地址: 香港數碼港道100號3座D区6樓614-615室</Row>
                        <Row className="text">郵箱: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-Limited-461036224433414/" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperMobileFrame>
        )
    }
}

module.exports = MobileEN;