import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { Row, Col } from 'antd';
import { WrapperFrame } from './styled'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'

const bannerImg = require("web-hashKey-imgs/hk/mobile/fh_ch000.png");
const langChangeBG = require("web-hashKey-imgs/hk/mobile/more.png");
const closeModalBG = require("web-hashKey-imgs/hk/mobile/close.png");
const aboutTextImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch002.png");
const aboutOrgImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch003.png");
const addressImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch004.png");
const ticketImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch005.png");
const agendaAMImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch006.png");
const agendaPMImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch007.png");
const partnerImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch008.png");
const infoImg1 = require("web-hashKey-imgs/hk/mobile/gk/fh_ch009.png");
const infoImg2 = require("web-hashKey-imgs/hk/mobile/gk/07_02ch.png");
const infoImg3 = require("web-hashKey-imgs/hk/mobile/gk/07_03ch.png");
const infoImg4 = require("web-hashKey-imgs/hk/mobile/gk/07_04ch.png");
const infoImg5 = require("web-hashKey-imgs/hk/mobile/gk/07_05ch.png");
const speakerList = require("web-hashKey-imgs/hk/mobile/gk/benjie_ch.png");
const previousVIP = require("web-hashKey-imgs/hk/mobile/gk/wangjie_shouji_ch.png");
const previousPartnerImg = require("web-hashKey-imgs/hk/mobile/gk/fh_ch010.png");
const trans = require("web-hashKey-imgs/hk/mobile/gk/fh_ch011.png");
const showBtn = require("web-hashKey-imgs/hk/web/show.png");
const hideBtn = require("web-hashKey-imgs/hk/web/hide.png");

@observer
class MobileGK extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agendAM: true,
            langChangeModal: false
        };
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    render() {

        return (
            <WrapperFrame>
                {this.state.langChangeModal ?
                    <Row className="langChangeModal">
                        <a href="javascript:;" className="close" onClick={() => this.setState({ langChangeModal: false })}>
                            <img src={closeModalBG} />
                        </a>
                        <Row type="flex" justify="center" className="langFrame">
                            <div className="title">语言</div>
                            <div span={10} className={LocaleStore.currentLocales == "en" ? "ops selected" : "ops"} onClick={() => LocaleStore.changeLocaleConfig("en")}>En</div>
                            <div span={10} className={LocaleStore.currentLocales == "gk" ? "ops selected" : "ops"} onClick={() => LocaleStore.changeLocaleConfig("gk")}>繁体中文</div>
                            <div span={10} className={LocaleStore.currentLocales == "cn" ? "ops selected" : "ops"} onClick={() => LocaleStore.changeLocaleConfig("cn")}>简体中文</div>
                        </Row>
                    </Row> : null
                }
                <Row className="bannerFrame" type="flex" justify="center" align="middle">
                    <div className="langChange">
                        <a href="javascript:;" className="" onClick={() => this.setState({ langChangeModal: true })}><img src={langChangeBG} /></a>
                    </div>
                    <Col span={24}>
                        <a href="javascript:;" onClick={() => hashHistory.push("/")} className="bannerImg">
                            <img src={bannerImg} />
                        </a>
                    </Col>
                </Row>
                <Row className="aboutFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <img src={aboutTextImg} />
                        <img src={aboutOrgImg} />
                    </Col>
                </Row>
                <Row className="addressFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <img src={addressImg} className="content" />
                        <a href="http://www.google.cn/maps/place/Four+Seasons+Hotel+Hong+Kong/@22.2864926,114.1547181,17z/data=!3m1!4b1!4m5!3m4!1s0x340400624dd6b0cd:0xe5bfdd50dd6263fd!8m2!3d22.2864877!4d114.1569068" className="gmBtn" target="_blank">Google地圖</a>
                    </Col>
                </Row>
                <Row className="ticketFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <img className="content" src={ticketImg} />
                        <a href="https://www.eventbrite.com/e/the-1st-hashkey-international-digital-asset-summit-2019-tickets-53577873863">立即購買</a>
                    </Col>
                </Row>
                <Row className="agendaFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <div className="switchTime">
                            <a href="javascript:" className={this.state.agendAM ? "focus" : ""} onClick={() => { this.setState({ agendAM: true }) }}>AM</a>
                            <a href="javascript:" className={this.state.agendAM ? "" : "focus"} onClick={() => { this.setState({ agendAM: false }) }}>PM</a>
                        </div>
                        {this.state.agendAM ?
                            <img src={agendaAMImg} className="agend" /> : <img src={agendaPMImg} className="agend" />
                        }
                        <a href="http://vyr5r8zs2p3jhaqh.mikecrm.com/foUjQZQ" className="apply">申請成為演講嘉賓</a>
                        <img src={speakerList} style={{ width: '100%' }} />
                    </Col>
                </Row>
                <Row className="partnerFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <img src={partnerImg} />
                    </Col>
                </Row>
                <Row className="infoFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <img src={infoImg1} className="first" />
                        <Row type="flex" justify="space-around">
                            <Col span={10}>
                                <img src={infoImg2} className="outerLink" />
                            </Col>
                            <Col span={10}>
                                <a href="http://www.blockchainlabs.org/summit2016/index_cn.html">
                                    <img src={infoImg3} className="outerLink" />
                                </a>
                            </Col>
                            <Col span={10}>
                                <a href="http://www.blockchainlabs.org/summit2017/index_cn.html?again4">
                                    <img src={infoImg4} className="outerLink" />
                                </a>
                            </Col>
                            <Col span={10}>
                                <a href="http://www.blockchainlabs.org/week2018/index_cn.html">
                                    <img src={infoImg5} className="outerLink" />
                                </a>
                            </Col>
                        </Row>
                        <img src={previousVIP} className="second" />
                        <img src={previousPartnerImg} className="second" />
                    </Col>
                </Row>
                <Row className="transFrame" type="flex" justify="center" align="middle">
                    <Col span={24}>
                        <img src={trans} />
                    </Col>
                </Row>
                <Row id="contact" className="contactFrame" type="flex" justify="center" align="middle">
                    <Col span={18}>
                        <Row className="title">聯絡我們</Row>
                        <Row className="text">地址：香港數碼港道100號3座D區6樓614-615室</Row>
                        <Row className="text">電郵: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-Limited-461036224433414/" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperFrame>
        )
    }
}

module.exports = MobileGK;