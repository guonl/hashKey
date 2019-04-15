import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { Row, Col } from 'antd';
import { WrapperFrame } from './styled'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'

const speakersList = require("./speakersCN.json");
const bannerImg = require("web-hashKey-imgs/hk/web/bannerContent.png");
const aboutTextImg = require("web-hashKey-imgs/hk/web/cn/jt_02_01ch.png");
const aboutFullTextImg = require("web-hashKey-imgs/hk/web/cn/jt_02_02ch.png");
const aboutOrgImg = require("web-hashKey-imgs/hk/web/cn/jt_02_03ch.png");
const addressImg = require("web-hashKey-imgs/hk/web/cn/jt_03_01ch.png");
const ticketImg = require("web-hashKey-imgs/hk/web/cn/jt_04_01ch.png");
const buyImg = require("web-hashKey-imgs/hk/web/cn/hash008.png");
const agendaTitleImg = require("web-hashKey-imgs/hk/web/cn/hash009-1.png");
const agendaAMImg = require("web-hashKey-imgs/hk/web/cn/hash009-2.png");
const agendaPMImg = require("web-hashKey-imgs/hk/web/cn/hash009-3.png");
const agendaSPImg = require("web-hashKey-imgs/hk/web/cn/hash009-4.png");
const previousVIPImg = require("web-hashKey-imgs/hk/web/cn/jiabin_jt.png");
const partnerImg = require("web-hashKey-imgs/hk/web/cn/jt_06_02ch.png");
const infoImg1 = require("web-hashKey-imgs/hk/web/cn/jt_07_01ch.png");
const infoImg2 = require("web-hashKey-imgs/hk/web/cn/jt_07_02ch.png");
const infoImg3 = require("web-hashKey-imgs/hk/web/cn/jt_07_03ch.png");
const infoImg4 = require("web-hashKey-imgs/hk/web/cn/jt_07_04ch.png");
const infoImg5 = require("web-hashKey-imgs/hk/web/cn/jt_07_05ch.png");
const previousPartnerImg = require("web-hashKey-imgs/hk/web/cn/jt_07_06ch.png");
const GMBtn = require("web-hashKey-imgs/hk/web/cn/gmBtn.png");
const trans = require("web-hashKey-imgs/hk/web/cn/jt_08_01ch.png");
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
                    <img className="title" src={ticketImg} />
                        <Row className="content" type="flex" justify="center">
                            <Col span={16}>
                                <div className="each">
                                    <a href="https://bihu.com/article/1706080493">HashKey 2019数字资产全球峰会：探讨数字资产托管的最佳实践</a>
                                </div>
                                <div className="each">
                                    <a href="https://bihu.com/article/1644676909">HashKey 2019数字资产全球峰会：专业研究与数据分析工具</a>
                                </div>
                                <div className="each">
                                    <a href="https://www.finanzen.net/nachricht/aktien/as-blockchain-breaks-through-barriers-the-hashkey-international-digital-asset-summit-2019-brings-the-industry-together-to-boost-invest-and-incubate-7264078">随着区块链技术的不断突破，HashKey 2019数字资产全球峰会聚集整个行业，带动行业的促进、投资与孵化</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="agendaFrame" type="flex" justify="center" align="middle">
                    <Col span={18}>
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
                        <Row type="flex" justify="space-between" className="speakerFrame">
                            {speakersList.map((item, index) => {
                                return (<Col key={index} span={5} onMouseEnter={this.showSpeakerDesc.bind(this, index)} onMouseLeave={this.hideSpeakerDesc.bind(this, index)}> {
                                    index < 48 ? !this.state[`speaker${index}`] ?
                                        <Row type="flex" justify="center" className="eachSpeaker">
                                            <Col span={22} style={{ width: 200 }}>
                                                {index < 48 ? <img src={require(`web-hashKey-imgs/hk/web/cn/speaker_ch/${item.name}.png`)} className="avator" />
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
                        <Row className="title">联系我们</Row>
                        <Row className="text">地址: 香港数码港道100号3座D区6楼614-615室</Row>
                        <Row className="text">邮箱: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-Limited-461036224433414/" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperFrame>
        )
    }
}

module.exports = WebCN;