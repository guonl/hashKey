import React, { Component } from 'react'
import { Row, Col, Carousel, Popover } from 'antd';
import { WrapperWebView } from './styled'
import { hashHistory } from 'react-router'
const logo = require("web-hashKey-imgs/home/web/hashkeyLogo.png");
const banner01 = require("web-hashKey-imgs/home/web/en/banner_01eg.png");
const banner02 = require("web-hashKey-imgs/home/web/banner_02.png");
const banner03 = require("web-hashKey-imgs/home/web/en/banner_03eg.png");

class WebEN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenu: "about"
        };
        ["goToHref", "goToHK"].forEach(m => this[m] = this[m].bind(this))
    }

    goToHref(key) {
        let that = this;
        document.getElementById(key).scrollIntoView();
        setTimeout(() => {
            that.setState({ activeMenu: key });
        }, 100)
    }

    goToHK() {
        location.hash = `#/hk`;
    }

    componentDidMount() {
        var that = this;
        window.onscroll = function () {
            if (innerWidth <= 999 || location.hash.split("#")[1].split("?")[0] != "/") {
                return false;
            } else {
                let activeMenu = that.getCurrentActive()
                that.setState({ activeMenu });
            }
        }
    }

    getCurrentActive() {
        var currentPos = window.innerHeight + window.scrollY;
        var key = ["about", "assets", "team", "offerings", "parteners", "contact"];
        var result;
        var posList = [];
        for (var i = 0; i < key.length; i++) {
            if (i == key.length - 1) {
                result = "contact";
            } else {
                var currentDom = document.getElementById(key[i]);
                var nextDom = document.getElementById(key[i + 1]);
                if ((currentPos > currentDom.offsetTop + currentDom.clientHeight / 2) && (currentPos < nextDom.offsetTop + nextDom.clientHeight / 2)) {
                    result = key[i];
                    break;
                }
            }
            var currentDom = document.getElementById(key[i]);
            var nextDom = document.getElementById(key[i + 1]);
        }
        return result;
    }

    // renderPartnersList() {
    //     var dom = [];
    //     for (var i = 0; i < 8; i++) {
    //         var img = require(`web-hashKey-imgs/home/web/en/partners${i + 1}.png`);
    //         dom.push(
    //             <Col key={i} span={5}><img src={img} style={{ width: '100%', marginBottom: 50 }} /></Col>
    //         )
    //     }
    //     return dom;
    // }

    render() {
        return (
            <WrapperWebView>
                <Row className="headerMenu" type="flex" justify="center">
                    <Col span={20}>
                        <Col span={6} className="title">
                            <img className="logo" src={logo} />
                        </Col>
                        <Col span={14}>
                            <Row type="flex" justify="end" className="menuList">
                                <div className={this.state.activeMenu == "about" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "about")}>About</div>
                                <div className="eachMenu" onClick={() => this.goToHK.call(this)}>Summit</div>
                                <div className={this.state.activeMenu == "assets" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "assets")}>Our Vision</div>
                                <div className={this.state.activeMenu == "team" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "team")}>Team</div>
                                <div className={this.state.activeMenu == "offerings" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "offerings")}>Offerings</div>
                                <div className={this.state.activeMenu == "parteners" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "parteners")}>Partners</div>
                                <div className={this.state.activeMenu == "contact" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "contact")}>Contact Us</div>
                            </Row>
                        </Col>
                    </Col>
                </Row>
                <Row id="about" className="aboutFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <Carousel autoplay>
                            <img src={banner01} />
                            <img src={banner02} />
                            <img src={banner03} />
                        </Carousel>
                    </Col>
                </Row>
                <Row id="assets" className="assetsFrame" type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <Row className="ourVision">Our Vision</Row>
                        <Row className="text">We believe that distributed ledgers, blockchain technology, and digital tokens will revolutionize how value is created, captured, and distributed across multiple asset classes through greater efficiency, lower costs, and increased liquidity.</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="ourFocus">Our Focus</Row>
                        <Row className="focusContent">
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_01.png")} /></Row>
                                <Row className="text">Asset Management</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_02.png")} /></Row>
                                <Row className="text">Trading Platforms</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_03.png")} /></Row>
                                <Row className="text">Venture Capital</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_04.png")} /></Row>
                                <Row className="text">Community Engagement</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_05.png")} /></Row>
                                <Row className="text">Regulatory Outreach</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_00.png")} /></Row>
                                <Row className="text">University Research Sponsorship</Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="team" className="teamFrame" type="flex" justify="center">
                    <Col span={16}>
                        <Row className="title">Core Team</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="member" type="flex" justify="center">
                            <Col span={16}>
                                <Row type="flex" justify="space-around" className="member">
                                    <Popover content={
                                        <div>fsdsdf</div>
                                    }>
                                        <Col span={12}>
                                            <Col span={8}><img className="avator" src={require("web-hashKey-imgs/home/web/gw_06.png")} /></Col>
                                            <Col offset={1} span={14}>
                                                <Row className="name">Xiao Feng</Row>
                                                <Row className="position">Chairman</Row>
                                                <Row className="position"> HashKey Group</Row>
                                            </Col>
                                        </Col>
                                    </Popover>
                                </Row>
                            </Col>
                        </Row>
                        {/* <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                        <Row>
                            <Col span={6} className="eachMember">
                                <Row><img className="avator" src={require("web-hashKey-imgs/home/web/en/dengc.png")} /></Row>
                                <Row className="name">Deng Chao</Row>
                                <Row className="position">CEO, HashKey Capital</Row>
                                <Row className="desc">Former senior manager at Bosera Asset Management, China Wanxiang Holding, DataYes. Holds Responsible Officer qualification in HK, early founding employee at Wanxiang Blockchain.</Row>
                            </Col>
                            <Col span={6} offset={3} className="eachMember">
                                <Row><img className="avator" src={require("web-hashKey-imgs/home/web/en/simon.png")} /></Row>
                                <Row className="name">Simon AuYeung</Row>
                                <Row className="position"> COO, Trading Platforms</Row>
                                <Row className="desc">17+ years experience, former head of compliance and senior manager in Ant Financial, RBC Wealth Management, RBS, HSBC, BNP Paribas. Former manager in Hong Kong SFC. HKUST, CUHK, Tsinghua degrees</Row>
                            </Col>
                            <Col span={6} offset={3} className="eachMember">
                                <Row><img className="avator" src={require("web-hashKey-imgs/home/web/en/ben.png")} /></Row>
                                <Row className="name">Ben El-Baz</Row>
                                <Row className="position"> CSO, HashKey Pro</Row>
                                <Row className="desc">Stanford GSB, co-founded Stanford's largest student-led blockchain group. +10 years executive experience in high-tech startups in both Silicon Valley and China, started career as derivatives trader and analyst.</Row>
                            </Col>
                        </Row> */}
                    </Col>
                </Row>
                {/* <Row id="parteners" className="partnersFrame" type="flex" justify="center">
                    <Col span={16}>
                        <Row className="title">Partners</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="partnersList" type="flex" justify="space-between">
                            {this.renderPartnersList()}
                        </Row>
                        <Row>
                            <Col span={5} style={{ marginRight: '5.555%' }}><img src={require("web-hashKey-imgs/home/web/en/partners9.png")} style={{ width: '100%', marginBottom: 50 }} /></Col>
                            <Col span={5}><img src={require("web-hashKey-imgs/home/web/en/partners10.png")} style={{ width: '100%', marginBottom: 50 }} /></Col>
                        </Row>
                    </Col>
                </Row> */}
                {/* <Row id="contact" className="contactFrame" type="flex" justify="center" align="middle">
                    <Col span={18}>
                        <Row className="title">Contact</Row>
                        <Row className="text">Address: Unit 614-615, Core D, Cyberport 3, Hong Kong SAR</Row>
                        <Row className="text">Email: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => {location.href="https://pro.hashkey.com"}}>HaskKey Pro: https://pro.hashkey.com</Row>
                        <Row className="text hashquark" onClick={() => {location.href="https://www.hashquark.io"}}>HaskQuark: https://www.hashquark.io</Row>
                    </Col>
                </Row> */}
            </WrapperWebView >
        )
    }
}

module.exports = WebEN;