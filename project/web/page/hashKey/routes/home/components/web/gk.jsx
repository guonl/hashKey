import React, { Component } from 'react'
import { Row, Col, Carousel, Popover } from 'antd';
import { WrapperWebView } from './styled'
import { hashHistory } from 'react-router'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'
const logo = require("web-hashKey-imgs/home/web/hashkeyLogo.png");
const banner01 = require("web-hashKey-imgs/home/web/gk/banner_01ch.png");
const banner02 = require("web-hashKey-imgs/home/web/banner_02.png");
const banner03 = require("web-hashKey-imgs/home/web/gk/banner_03ch.png");

@observer
class WebGK extends React.Component {
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
                    <Col span={22}>
                        <Col span={4} className="title">
                            <img className="logo" src={logo} />
                        </Col>
                        <Col span={14}>
                            <Row type="flex" justify="end" className="menuList">
                                <div className={this.state.activeMenu == "about" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "about")}>關於我們</div>
                                <div className="eachMenu" onClick={() => this.goToHK.call(this)}>峰會</div>
                                <div className={this.state.activeMenu == "assets" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "assets")}>我們的願景</div>
                                <div className={this.state.activeMenu == "team" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "team")}>團隊</div>
                                <div className={this.state.activeMenu == "offerings" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "offerings")}>產品</div>
                                <div className={this.state.activeMenu == "parteners" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "parteners")}>合作夥伴</div>
                                <div className={this.state.activeMenu == "contact" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "contact")}>聯絡我們</div>
                            </Row>
                        </Col>
                        <Col span={6}>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "en" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "en") }}>En</a>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "gk" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "gk") }}>中文</a>
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
                    <Col lg={22} xl={16} style={{ maxWidth: 900 }}>
                        <Row className="ourVision">我們的願景</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="text">我們堅信，分布式賬本、區塊鏈技術和數碼貨幣將徹底改變多個資產類別的價值創造、獲取和分配方式，提高效率、降低成本和增加流動性。</Row>
                        <Row className="ourFocus">關注領域</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="focusContent">
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_01.png")} /></Row>
                                <Row className="text">資產管理</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_02.png")} /></Row>
                                <Row className="text">交易平台</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_03.png")} /></Row>
                                <Row className="text">風險投資</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_04.png")} /></Row>
                                <Row className="text">社區參與</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_05.png")} /></Row>
                                <Row className="text">監管交流</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_00.png")} /></Row>
                                <Row className="text">大學研究贊助</Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="team" className="teamFrame" type="flex" justify="center">
                    <Col lg={22} xl={16} style={{ maxWidth: 900 }}>
                        <Row className="title">核心團隊</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="member" type="flex" justify="center">
                            <Col span={22}>
                                <Row type="flex" justify="space-around" className="member">
                                    <Popover content={
                                        <div>中國萬向控股有限公司副董事長兼執行董事，上海萬向區塊鏈股份公司董事長兼總經理。在證券和資產管理行業有超過25年的相關豐富經驗。</div>
                                    }>
                                        <Col span={10}>
                                            <Col span={8}><img className="avator" src={require("web-hashKey-imgs/home/web/gw_06.png")} /></Col>
                                            <Col offset={1} span={14}>
                                                <Row className="name">肖風</Row>
                                                <Row className="position">HashKey Group董事長</Row>
                                            </Col>
                                        </Col>
                                    </Popover>
                                    <Popover content={
                                        <div>20年以上投資銀行經驗，服務於瑞銀集團投資銀行倫敦，東京，北京及香港，前瑞銀證券董事會成員。 領導過百項大型融資和併購業務項目，並於衍生與另類私募產品市場開拓了大量創新業務及核心盈利模式。英國倫敦大學帝國學院計算機科學碩士。</div>
                                    }>
                                        <Col span={10} offset={4}>
                                            <Col span={8}><img className="avator" src={require("web-hashKey-imgs/home/web/gw_07.png")} /></Col>
                                            <Col offset={1} span={14}>
                                                <Row className="name">李啟泰</Row>
                                                <Row className="position">HashKey Group 行政總裁</Row>
                                            </Col>
                                        </Col>
                                    </Popover>
                                </Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-around" className="member">
                            <Popover content={
                                <div>萬向區塊鏈早期成員。曾於博時基金、中國萬向控股及通聯數據任職。擁有10年以上資產管理及金融科技從業經驗。</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_08.png")} /></Row>
                                    <Row className="name">鄧超</Row>
                                    <Row className="position">HashKey Capital首席執行官</Row>
                                </Col>
                            </Popover>
                            <Popover content={
                                <div>具有20年以上全球市場投資經驗，曾任法國巴黎銀行資產管理部大中華區主管及總經理。現為一名活躍於金融科技、生物科技和消費科技領域的天使投資者。</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_09.png")} /></Row>
                                    <Row className="name">鄭丹楓 CFA</Row>
                                    <Row className="position">HashKey Pro首席執行官</Row>
                                </Col>
                            </Popover>
                            <Popover content={
                                <div>具有12年以上相關從業經驗及多年區塊鏈和雲計算产品經驗，並擁有多項技術專利，創建了區塊鏈創新BaaS平台並服務著名企業客户；區塊鏈社區KOL，專注區塊鏈背後的技術研究和產品模式演進。曾在通聯數據擔任金融雲端和智能投研負責人。</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_10.png")} /></Row>
                                    <Row className="name">李晨</Row>
                                    <Row className="position">HashQuark首席執行官</Row>
                                </Col>
                            </Popover>
                            <Col span={6} className="eachMember">
                                <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_11.png")} /></Row>
                                <Row className="name">段璽</Row>
                                <Row className="position">Tokyo Hash首席執行官</Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-around" className="member">
                            <Popover content={
                                <div>畢業於斯坦福商學院，並為斯坦福大學最大的學生區塊鏈組織聯合創始人。具有10年以上矽谷和中國高科技初創企業高管經驗，職業生涯從衍生品交易員和分析師開始。</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_12.png")} /></Row>
                                    <Row className="name">Ben EL-Baz</Row>
                                    <Row className="position">HashKey Pro首席戰略官</Row>
                                </Col>
                            </Popover>
                            <Popover content={
                                <div>具有17年以上工作經驗，曾任螞蟻金服東北亞合規主管；於加皇財富管理、滙豐銀行、法巴銀行、香港證監會、摩根士丹利等大機構擔任要職。</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_13.png")} /></Row>
                                    <Row className="name">歐陽健男</Row>
                                    <Row className="position">HashKey Pro首席運營官</Row>
                                </Col>
                            </Popover>
                        </Row>
                        <Row type="flex" justify="center"><Col span={1} className="longLine"></Col></Row>
                    </Col>
                </Row>
                <Row id="offerings" className="offeringsFrame" type="flex" align="middle" justify="center">
                    <Col lg={22} xl={16} style={{ maxWidth: 900 }}>
                        <Row className="title">产品</Row>
                        <Row type="flex" justify="center" style={{ marginBottom: 35 }}><Col span={1} className="shortLine"></Col></Row>
                        <Row type="flex" justify="space-between" className="eachItem">
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashKey Pro</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">安全可靠的數碼資產交易平台</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashKey Capital</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">面向合格和專業投資者的區塊鏈投資基金</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashQuark</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">存幣即挖礦</Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={1} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-between" className="eachItem">
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">Tokyo Hash</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">您在日本當地的商業夥伴</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">Axonomy</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">分布式商業加速器</Row>
                            </Col>
                            <Col xl={6} lg={7}></Col>
                        </Row>
                    </Col>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <a href="javascript:;" className="learnMore" onClick={() => hashHistory.push("/prdDetail")}>详细介绍</a>
                    </Col>
                </Row>
                <Row id="parteners" className="partnersFrame" type="flex" justify="center">
                    <Col span={16} style={{ maxWidth: 900 }}>
                        <Row className="title">合作夥伴</Row>
                        <Row type="flex" justify="center"><Col className="shortLine" span={1}></Col></Row>
                        <Row className="partnersList" type="flex" justify="space-between">
                            {this.renderPartnersList()}
                        </Row>
                    </Col>
                </Row>
                <Row id="contact" className="contactFrame" type="flex" justify="center" align="middle">
                    <Col span={18} style={{ maxWidth: 900 }}>
                        <Row className="title">聯絡我們</Row>
                        <Row className="text">地址：香港數碼港道100號3座D區6樓614-615室</Row>
                        <Row className="text">電郵: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-830631077275937/?modal=admin_todo_tour" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperWebView >
        )
    }
}

module.exports = WebGK;