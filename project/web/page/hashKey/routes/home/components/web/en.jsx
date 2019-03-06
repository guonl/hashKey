import React, { Component } from 'react'
import { Row, Col, Carousel, Popover } from 'antd';
import { WrapperWebView } from './styled'
import { hashHistory } from 'react-router'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'
const logo = require("web-hashKey-imgs/home/web/hashkeyLogo.png");
const banner01 = require("web-hashKey-imgs/home/web/en/banner_01eg.png");
const banner02 = require("web-hashKey-imgs/home/web/banner_02.png");
const banner03 = require("web-hashKey-imgs/home/web/en/banner_03eg.png");

@observer
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
        location.hash = `#/digital-asset-summit-2019`;
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

    renderPartnersList() {
        var dom = [];
        for (var i = 13; i < 22; i++) {
            var img = require(`web-hashKey-imgs/home/web/gw_${i + 1}.png`);
            dom.push(
                <Col key={i} span={5}><img src={img} style={{ width: '100%', marginBottom: 50 }} /></Col>
            )
        }
        return dom;
    }

    render() {
        return (
            <WrapperWebView>
                <Row className="headerMenu" type="flex" justify="center">
                    <Col span={23}>
                        <Col span={3} className="title">
                            <img className="logo" src={logo} />
                        </Col>
                        <Col span={13}>
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
                        <Col span={8} style={{textAlign: 'right'}}>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "en" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "en") }}>En</a>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "gk" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "gk") }}>繁体</a>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "cn" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "cn") }}>简体</a>
                        </Col>
                    </Col>
                </Row>
                <Row id="about" className="aboutFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <Carousel autoplay>
                            <img src={banner01} />
                            <a href="javascript:;" onClick={() => hashHistory.push("/digital-asset-summit-2019")} className="banner">
                                <img src={banner02} className="banner" />
                            </a>
                            <img src={banner03} />
                        </Carousel>
                    </Col>
                </Row>
                <Row id="assets" className="assetsFrame" type="flex" justify="center" align="middle">
                    <Col lg={22} xl={16} style={{ maxWidth: 900 }}>
                        <Row className="ourVision">Our Vision</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="text">We believe that distributed ledgers, blockchain technology, and digital tokens will revolutionize how value is created, captured, and distributed across multiple asset classes through greater efficiency, lower costs, and increased liquidity.</Row>
                        <Row className="ourFocus">Our Focus</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
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
                    <Col lg={22} xl={16} style={{ maxWidth: 900 }}>
                        <Row className="title">Core Team</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="member" type="flex" justify="center">
                            <Col span={24}>
                                <Row type="flex" justify="space-around" className="member">
                                    <Popover placement="top" content={
                                        <div>Vice Chairman and Executive Director of China Wanxiang Holding, Chairman and CEO of Wanxiang Blockchain, 25 years of experience in the securities and asset management industry.</div>
                                    }>
                                        <Col span={10}>
                                            <Col span={24}><img className="avator" src={require("web-hashKey-imgs/home/web/gw_06.png")} /></Col>
                                            <Col span={24}>
                                                <Row className="name">Xiao Feng</Row>
                                                <Row className="position">Chairman</Row>
                                                <Row className="position"> HashKey Group</Row>
                                            </Col>
                                        </Col>
                                    </Popover>
                                    <Popover placement="top" content={
                                        <div>Over 20 years of investment banking experience with UBS London, Tokyo, Beijing and Hong Kong.   Ex-board of directors of UBS Securities.  Led over 100 large capital-raising and M&A transactions; and pioneered a large number of new services and business models in the derivatives and alternative investment product markets.  MSc in Computer Science from Imperial College London.</div>
                                    }>
                                        <Col span={10} offset={4} style={{ textAlign: 'right' }}>
                                            <Col span={24}><img className="avator" src={require("web-hashKey-imgs/home/web/gw_07.png")} /></Col>
                                            <Col span={24}>
                                                <Row className="name">Michel Lee</Row>
                                                <Row className="position">Executive President,HashKey Group</Row>
                                            </Col>
                                        </Col>
                                    </Popover>
                                </Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-around" className="member">
                            <Popover placement="top" content={
                                <div>Former senior manager at Bosera Asset Management, China Wanxiang Holding, DataYes. 10+ years of experience in asset management and fintech, early founding employee at Wanxiang Blockchain.</div>
                            }>
                                <Col span={6} className="eachMember" style={{ textAlign: 'left' }}>
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_08.png")} /></Row>
                                    <Row className="name">Deng Chao</Row>
                                    <Row className="position">CEO, HashKey Capital</Row>
                                </Col>
                            </Popover>
                            <Popover placement="top" content={
                                <div>20+ years of experience in global investment markets; former MD, Head of Greater China, BNP Paribas Asset Management. Active angel investor in fintech, biotech and consumer tech.</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_09.png")} /></Row>
                                    <Row className="name">TF Cheng CFA</Row>
                                    <Row className="position">CEO HashKey Pro</Row>
                                </Col>
                            </Popover>
                            <Popover placement="top" content={
                                <div>12 years of experience, former head of financial cloud and intelligent investment research at DataYes. Holds several patents, creator of BaaS platform, blockchain technology specialist.</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_10.png")} /></Row>
                                    <Row className="name">Leo Li </Row>
                                    <Row className="position">CEO, HashQuark</Row>
                                </Col>
                            </Popover>
                            <Col span={6} className="eachMember" style={{ textAlign: 'right' }}>
                                <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_11.png")} /></Row>
                                <Row className="name">Andy Duan</Row>
                                <Row className="position">CEO, Tokyo Hash </Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-between" className="member">
                            <Popover placement="top" content={
                                <div>Stanford GSB, co-founder of Stanford's largest student-led blockchain group. 10+ years of executive experience in high-tech startups in both Silicon Valley and China. Started career as derivatives trader and analyst.</div>
                            }>
                                <Col span={6} className="eachMember" style={{ textAlign: 'left' }}>
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_12.png")} /></Row>
                                    <Row className="name">Ben EL-Baz</Row>
                                    <Row className="position">CSO, HashKey Pro</Row>
                                </Col>
                            </Popover>
                            <Popover placement="top" content={
                                <div>Simon has over 17 years of experience in the financial industry. He is the former North East Asia Head of Compliance at Ant Financial, and he has held senior positions at leading financial institutions including RBC Wealth Management, HSBC, BNP Paribas, SFC and Morgan Stanley.</div>
                            }>
                                <Col span={6} className="eachMember" style={{ textAlign: 'right' }}>
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_13.png")} /></Row>
                                    <Row className="name">Simon AuYeung</Row>
                                    <Row className="position">COO，HashKey Pro</Row>
                                </Col>
                            </Popover>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                    </Col>
                </Row>
                <Row id="offerings" className="offeringsFrame" type="flex" align="middle" justify="center">
                    <Col lg={20} xl={16} style={{ maxWidth: 900 }}>
                        <Row className="title">Offerings under HashKey Group</Row>
                        <Row type="flex" justify="center" style={{ marginBottom: 35 }}><Col span={1} className="shortLine"></Col></Row>
                        <Row type="flex" justify="space-between" className="eachItem">
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashKey Pro</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">A secure and trustworthy digital asset exchange platform</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashKey Capital</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">A leading blockchain investor and digital asset manager</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashQuark</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">Mining Made Easier</Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={1} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-between" className="eachItem">
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">Tokyo Hash</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">Your local business partner in Japan</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">Axonomy</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">Distributed Business Accelerator</Row>
                            </Col>
                            <Col xl={6} lg={7}></Col>
                        </Row>
                    </Col>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <a href="javascript:;" className="learnMore" onClick={() => hashHistory.push("/prdDetail")}>LEARN MORE</a>
                    </Col>
                </Row>
                <Row id="parteners" className="partnersFrame" type="flex" justify="center">
                    <Col span={16} style={{maxWidth: 900}}>
                        <Row className="title">Partners</Row>
                        <Row type="flex" justify="center"><Col className="shortLine" span={1}></Col></Row>
                        <Row className="partnersList" type="flex" justify="space-between">
                            {this.renderPartnersList()}
                        </Row>
                    </Col>
                </Row>
                <Row id="contact" className="contactFrame" type="flex" justify="center" align="middle">
                    <Col span={18} style={{ maxWidth: 900 }} >
                        <Row className="title">Contact</Row>
                        <Row className="text">Address: Unit 614 - 15, Level 6, Core D, Cyberport 3, 100 Cyberport Road, Hong Kong</Row>
                        <Row className="text">Email: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-Limited-461036224433414/" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperWebView >
        )
    }
}

module.exports = WebEN;