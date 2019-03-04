import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { Row, Col } from 'antd';
import { WrapperFrame } from './styled'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'
const bannerImg = require("web-hashKey-imgs/hk/web/bannerContent.png");
const aboutTextImg = require("web-hashKey-imgs/hk/web/cn/hash002-1.png");
const aboutFullTextImg = require("web-hashKey-imgs/hk/web/cn/hash002-3.png");
const aboutOrgImg = require("web-hashKey-imgs/hk/web/cn/hash002-2.png");
const addressImg = require("web-hashKey-imgs/hk/web/cn/hash004.png");
const ticketImg = require("web-hashKey-imgs/hk/web/cn/hash006.png");
const buyImg = require("web-hashKey-imgs/hk/web/cn/hash008.png");
const agendaTitleImg = require("web-hashKey-imgs/hk/web/cn/hash009-1.png");
const agendaAMImg = require("web-hashKey-imgs/hk/web/cn/hash009-2.png");
const agendaPMImg = require("web-hashKey-imgs/hk/web/cn/hash009-3.png");
const agendaSPImg = require("web-hashKey-imgs/hk/web/cn/hash009-4.png");
const partnerImg = require("web-hashKey-imgs/hk/web/cn/hash0012.png");
const infoImg1 = require("web-hashKey-imgs/hk/web/cn/zw_01.png");
const infoImg2 = require("web-hashKey-imgs/hk/web/cn/zw_02.png");
const infoImg3 = require("web-hashKey-imgs/hk/web/cn/zw_03.png");
const infoImg4 = require("web-hashKey-imgs/hk/web/cn/zw_04.png");
const infoImg5 = require("web-hashKey-imgs/hk/web/cn/zw_05.png");
const infoImg6 = require("web-hashKey-imgs/hk/web/cn/zw_06.png");
const previousPartnerImg = require("web-hashKey-imgs/hk/web/cn/pervious_ch.png");
const GMBtn = require("web-hashKey-imgs/hk/web/cn/gmBtn.png");
const trans = require("web-hashKey-imgs/hk/web/cn/transCN.png");
const showBtn = require("web-hashKey-imgs/hk/web/show.png");
const hideBtn = require("web-hashKey-imgs/hk/web/hide.png");

@observer
class WebCN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreAbout: false,
            agendAM: true
        };
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    render() {

        return (
            <WrapperFrame>
                <Row className="bannerFrame" type="flex" justify="center" align="middle">
                    <div className="langChange">
                        <a href="javascript:;" className="" onClick={() => hashHistory.push("/")}>Home</a>
                        <a href="javascript:;" className={LocaleStore.currentLocales == "en" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "en") }}>En</a>
                        <a href="javascript:;" className={LocaleStore.currentLocales == "cn" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "cn") }}>中文</a>
                    </div>
                    <Col span={24}>
                        <img src={bannerImg} />
                    </Col>
                </Row>
                <Row className="aboutFrame" type="flex" justify="center" align="middle">
                    <Col span={16}>
                        {!this.state.showMoreAbout ?
                            <Row>
                                <img src={aboutTextImg} />
                                <a href="javascript:;" onClick={() => { this.setState({ showMoreAbout: true }) }} className="seeMore">
                                    <img src={showBtn} />
                                </a>
                            </Row> :
                            <Row>
                                <img src={aboutFullTextImg} />
                                <a href="javascript:;" onClick={() => { this.setState({ showMoreAbout: false }) }} className="seeMore">
                                    <img src={hideBtn} />
                                </a>
                            </Row>
                        }
                        <img src={aboutOrgImg} />
                    </Col>
                </Row>
                <Row className="addressFrame" type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <img src={addressImg} className="content" />
                        <a href="http://www.google.cn/maps/place/Four+Seasons+Hotel+Hong+Kong/@22.2864926,114.1547181,17z/data=!3m1!4b1!4m5!3m4!1s0x340400624dd6b0cd:0xe5bfdd50dd6263fd!8m2!3d22.2864877!4d114.1569068" className="gmBtn" target="_blank">
                            <img src={GMBtn} />
                        </a>
                    </Col>
                </Row>
                <Row className="ticketFrame" type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <img className="content" src={ticketImg} />
                        <a href="https://www.eventbrite.com/e/the-1st-hashkey-international-digital-asset-summit-2019-tickets-53577873863">
                            <img className="buyBtn" src={buyImg} />
                        </a>
                    </Col>
                </Row>
                <Row className="agendaFrame" type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <img src={agendaTitleImg} className="title" />
                        </div>
                        <Row className="switchTime">
                            <a href="javascript:" className={this.state.agendAM ? "focus" : ""} onClick={() => { this.setState({ agendAM: true }) }}>上午</a>
                            <a href="javascript:" className={this.state.agendAM ? "" : "focus"} onClick={() => { this.setState({ agendAM: false }) }}>下午</a>
                        </Row>
                        {this.state.agendAM ?
                            <img src={agendaAMImg} className="agend" /> : <img src={agendaPMImg} className="agend" />
                        }
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <a href="http://vyr5r8zs2p3jhaqh.mikecrm.com/foUjQZQ" className="apply">
                                <img src={agendaSPImg} />
                            </a>
                        </div>
                    </Col>
                </Row>
                    <Row className="partnerFrame" type="flex" justify="center" align="middle">
                        <Col span={16}>
                            <img src={partnerImg} />
                        </Col>
                    </Row>
                    <Row className="infoFrame" type="flex" justify="center" align="middle">
                        <Col span={16}>
                            <img src={infoImg1} className="first" />
                            <Row type="flex" justify="space-between">
                                <Col span={5}>
                                    <img src={infoImg2} className="outerLink" />
                                </Col>
                                <Col span={5}>
                                    <a href="http://www.blockchainlabs.org/summit2016/index_cn.html">
                                        <img src={infoImg3} className="outerLink" />
                                    </a>
                                </Col>
                                <Col span={5}>
                                    <a href="http://www.blockchainlabs.org/summit2017/index_cn.html?again4">
                                        <img src={infoImg4} className="outerLink" />
                                    </a>
                                </Col>
                                <Col span={5}>
                                    <a href="http://www.blockchainlabs.org/week2018/index_cn.html">
                                        <img src={infoImg5} className="outerLink" />
                                    </a>
                                </Col>
                            </Row>
                            <img src={previousPartnerImg} className="second" />
                        </Col>
                    </Row>
                    <Row className="transFrame" type="flex" justify="center" align="middle">
                        <Col span={16}>
                            <img src={trans} />
                        </Col>
                    </Row>
                    <Row id="contact" className="contactFrame" type="flex" justify="center" align="middle">
                        <Col span={18}>
                            <Row className="title">Contact Us</Row>
                            <Row className="text">Address: Unit 614 - 15, Level 6, Core D, Cyberport 3, 100 Cyberport Road, Hong Kong</Row>
                            <Row className="text">Email: contact@hashkey.com</Row>
                            <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-830631077275937/?modal=admin_todo_tour" }}>Facebook</Row>
                            <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                        </Col>
                    </Row>
            </WrapperFrame>
                )
            }
        }
        
module.exports = WebCN;