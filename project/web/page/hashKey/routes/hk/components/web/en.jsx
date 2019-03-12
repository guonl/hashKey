import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { Row, Col } from 'antd';
import { WrapperFrame } from './styled'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'

const speakersList = require("./speakersEN.json");
const bannerImg = require("web-hashKey-imgs/hk/web/bannerContent.png");
const aboutTextImg = require("web-hashKey-imgs/hk/web/en/hashkey003-1.png");
const aboutFullTextImg = require("web-hashKey-imgs/hk/web/en/hashkey003-3.png");
const aboutOrgImg = require("web-hashKey-imgs/hk/web/en/hashkey003-2.png");
const addressImg = require("web-hashKey-imgs/hk/web/en/hashkey004.png");
const ticketImg = require("web-hashKey-imgs/hk/web/en/hashkey007.png");
const buyImg = require("web-hashKey-imgs/hk/web/en/hashkey006.png");
const agendaTitleImg = require("web-hashKey-imgs/hk/web/en/hashkey008-1.png");
const agendaAMImg = require("web-hashKey-imgs/hk/web/en/hashkey008-2.png");
const agendaPMImg = require("web-hashKey-imgs/hk/web/en/hashkey008-3.png");
const agendaSPImg = require("web-hashKey-imgs/hk/web/en/hashkey008-4.png");
const partnerImg = require("web-hashKey-imgs/hk/web/en/hashkey010.png");
const previousVIPImg = require("web-hashKey-imgs/hk/web/en/jiabin_eg.png");
const infoImg1 = require("web-hashKey-imgs/hk/web/en/en_01.png");
const infoImg2 = require("web-hashKey-imgs/hk/web/en/en_02.png");
const infoImg3 = require("web-hashKey-imgs/hk/web/en/en_03.png");
const infoImg4 = require("web-hashKey-imgs/hk/web/en/en_04.png");
const infoImg5 = require("web-hashKey-imgs/hk/web/en/en_05.png");
const infoImg6 = require("web-hashKey-imgs/hk/web/en/en_06.png");
const previousPartnerImg = require("web-hashKey-imgs/hk/web/en/pervious_english.png")
const GMBtn = require("web-hashKey-imgs/hk/web/en/gmBtn.png");
const trans = require("web-hashKey-imgs/hk/web/en/transEN.png");
const showBtn = require("web-hashKey-imgs/hk/web/show.png");
const hideBtn = require("web-hashKey-imgs/hk/web/hide.png");

@observer
class WebEN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMoreAbout: false,
            agendAM: true
        }
    }

    componentWillMount() {
        speakersList.map((item, index) => {
            this.state[`speaker${index}`] = false;
        })
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
    }

    showSpeakerDesc(index) {
        let key = `speaker${index}`;
        this.setState({ [key]: true })
    }

    hideSpeakerDesc(index) {
        let key = `speaker${index}`;
        this.setState({ [key]: false })
    }

    render() {
        return (
            <WrapperFrame>
                <Row className="bannerFrame" type="flex" justify="center" align="middle">
                    <div className="langChange">
                        <a href="javascript:;" className="" onClick={() => hashHistory.push("/")}>Home</a>
                        <a href="javascript:;" className={LocaleStore.currentLocales == "en" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "en") }}>En</a>
                        <a href="javascript:;" className={LocaleStore.currentLocales == "gk" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "gk") }}>繁體</a>
                        <a href="javascript:;" className={LocaleStore.currentLocales == "cn" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "cn") }}>简体</a>
                    </div>
                    <Col span={24}>
                        <a href="javascript:;" onClick={() => hashHistory.push("/")} className="bannerImg">
                            <img src={bannerImg} />
                        </a>
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
                        <a href="http://www.google.com/maps/place/Four+Seasons+Hotel+Hong+Kong/@22.2864926,114.1547181,17z/data=!3m1!4b1!4m5!3m4!1s0x340400624dd6b0cd:0xe5bfdd50dd6263fd!8m2!3d22.2864877!4d114.1569068" className="gmBtn" target="_blank">
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
                    <Col span={18}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <img src={agendaTitleImg} className="title" />
                        </div>
                        <Row className="switchTime">
                            <a href="javascript:" className={this.state.agendAM ? "focus" : ""} onClick={() => { this.setState({ agendAM: true }) }}>AM</a>
                            <a href="javascript:" className={this.state.agendAM ? "" : "focus"} onClick={() => { this.setState({ agendAM: false }) }}>PM</a>
                        </Row>
                        {this.state.agendAM ?
                            <img src={agendaAMImg} className="agend" /> : <img src={agendaPMImg} className="agend" />
                        }
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <a href="http://yc6ckxr9302voyau.mikecrm.com/0r87hIa" className="apply">
                                <img src={agendaSPImg} />
                            </a>
                        </div>
                        <Row type="flex" justify="space-between" className="speakerFrame">
                            {speakersList.map((item, index) => {
                                return (<Col key={index} span={5} onMouseEnter={this.showSpeakerDesc.bind(this, index)} onMouseLeave={this.hideSpeakerDesc.bind(this, index)}> {
                                    index < 45 ? !this.state[`speaker${index}`] ?
                                        <Row type="flex" justify="center" className="eachSpeaker">
                                            <Col span={22} style={{ width: 200 }}>
                                                {index < 45 ? <img src={require(`web-hashKey-imgs/hk/web/en/speaker_eh/${item.name}.png`)} className="avator" />
                                                    : null}
                                            </Col>
                                            <Col span={22}>
                                                <Row className="name">{item.name}</Row>
                                                <Row type="flex" justify="center"><div className="shortLine"></div></Row>
                                                <Row className="info">{item.position}</Row>
                                            </Col>
                                        </Row> :
                                        <Row className="eachSpeakerDesc">
                                            <Row type="flex" className="name">
                                                <div className="label"></div>
                                                <div className="text">{item.name}</div>
                                            </Row>
                                            <Row type="flex" justify="center"><Col span={21}>{item.desc}</Col></Row>
                                        </Row> : null}
                                </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
                <Row className="partnerFrame" type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <img src={partnerImg} />
                    </Col>
                </Row>
                <Row className="infoFrame" type="flex" justify="center" align="middle">
                    <Col span={16}>
                        <Row className="first">
                            <img src={infoImg1} />
                            <div className="link" onClick={() => location.href = "http://www.blockchainlabs.org/week2018/index_en.html"}></div>
                        </Row>
                        <Row type="flex" justify="space-between">
                            <Col span={5}>
                                <img src={infoImg2} className="outerLink" />
                            </Col>
                            <Col span={5}>
                                <a href="http://www.blockchainlabs.org/summit2016/index_en.html">
                                    <img src={infoImg3} className="outerLink" />
                                </a>
                            </Col>
                            <Col span={5}>
                                <a href="http://www.blockchainlabs.org/summit2017/index_en.html">
                                    <img src={infoImg4} className="outerLink" />
                                </a>
                            </Col>
                            <Col span={5}>
                                <a href="http://www.blockchainlabs.org/week2018/index_en.html">
                                    <img src={infoImg5} className="outerLink" />
                                </a>
                            </Col>
                        </Row>
                        <img src={previousVIPImg} style={{ width: '100%', marginTop: 50 }} />
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
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-Limited-461036224433414/" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperFrame>
        )
    }
}

module.exports = WebEN;