import React, { Component } from 'react'
import { Row, Col, Carousel, Popover } from 'antd';
import { WrapperWebView } from './styled'
import { hashHistory } from 'react-router'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'
const logo = require("web-hashKey-imgs/home/web/hashkeyLogo.png");
const banner01 = require("web-hashKey-imgs/home/web/cn/banner_01jt.png");
const banner02 = require("web-hashKey-imgs/home/web/banner_02.png");
const banner03 = require("web-hashKey-imgs/home/web/cn/banner_03jt.png");

@observer
class WebCN extends React.Component {
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
                                <div className={this.state.activeMenu == "about" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "about")}>关于我们</div>
                                <div className="eachMenu" onClick={() => this.goToHK.call(this)}>峰会</div>
                                <div className={this.state.activeMenu == "assets" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "assets")}>我们的愿景</div>
                                <div className={this.state.activeMenu == "team" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "team")}>团队</div>
                                <div className={this.state.activeMenu == "offerings" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "offerings")}>产品</div>
                                <div className={this.state.activeMenu == "parteners" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "parteners")}>合作伙伴</div>
                                <div className={this.state.activeMenu == "contact" ? "eachMenu active" : "eachMenu"} onClick={() => this.goToHref.call(this, "contact")}>联络我们</div>
                            </Row>
                        </Col>
                        <Col span={8} style={{textAlign: 'right'}}>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "en" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "en") }}>En</a>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "gk" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "gk") }}>繁體</a>
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
                        <Row className="ourVision">我们的愿景</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="text">我们坚信，分布式账本、区块链技术和数字货币将彻底改变多个资产类别的价值创造、获取和分配方式，提高效率、降低成本和增加流动性。</Row>
                        <Row className="ourFocus">关注领域</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="focusContent">
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_01.png")} /></Row>
                                <Row className="text">资产管理</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_02.png")} /></Row>
                                <Row className="text">交易平台</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_03.png")} /></Row>
                                <Row className="text">风险投资</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_04.png")} /></Row>
                                <Row className="text">社区参与</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_05.png")} /></Row>
                                <Row className="text">监管交流</Row>
                            </Col>
                            <Col span={8}>
                                <Row><img src={require("web-hashKey-imgs/home/web/gw_00.png")} /></Row>
                                <Row className="text">大学研究赞助</Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row id="team" className="teamFrame" type="flex" justify="center">
                    <Col lg={22} xl={16} style={{ maxWidth: 900 }}>
                        <Row className="title">核心团队</Row>
                        <Row type="flex" justify="center"><Col className="line"></Col></Row>
                        <Row className="member" type="flex" justify="center">
                            <Col span={24}>
                                <Row type="flex" justify="space-around" className="member">
                                    <Col span={6}></Col>
                                    <Popover placement="top" content={
                                        <div>中国万向控股有限公司副董事长兼执行董事，上海万向区块链股份公司董事长兼总经理。在证券和资产管理行业有超过25年的相关丰富经验。</div>
                                    }>
                                        <Col span={6} style={{textAlign: 'center'}}>
                                            <Col span={24}><img className="avator" src={require("web-hashKey-imgs/home/web/gw_06.png")} /></Col>
                                            <Col span={24}>
                                                <Row className="name">肖风</Row>
                                                <Row className="position">HashKey Group董事长</Row>
                                            </Col>
                                        </Col>
                                    </Popover>
                                    <Popover placement="top" content={
                                        <div>20年以上投资银行经验，曾服务于瑞银集团投资银行伦敦、东京、北京及香港。领导过百项大型融资和并购业务项目，并于衍生与另类私募产品市场开拓了大量创新业务及核心盈利模式。英国伦敦大学帝国学院计算机科学硕士</div>
                                    }>
                                        <Col span={6} style={{ textAlign: 'center' }}>
                                            <Col span={24}><img className="avator" src={require("web-hashKey-imgs/home/web/gw_07.png")} /></Col>
                                            <Col span={24}>
                                                <Row className="name">李启泰</Row>
                                                <Row className="position">HashKey Group 行政总裁</Row>
                                            </Col>
                                        </Col>
                                    </Popover>
                                    <Col span={6}></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-around" className="member">
                            <Popover placement="top" content={
                                <div>万向区块链早期成员。曾于博时基金、中国万向控股及通联数据任职。拥有10年以上资产管理及金融科技从业经验。</div>
                            }>
                                <Col span={6} className="eachMember" style={{ textAlign: 'left' }}>
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_08.png")} /></Row>
                                    <Row className="name">邓超</Row>
                                    <Row className="position">HashKey Capital首席执行官</Row>
                                </Col>
                            </Popover>
                            <Popover placement="top" content={
                                <div>具有20年以上全球市场投资经验，曾任法国巴黎银行资产管理部大中华区主管及总经理。现为一名活跃于金融科技、生物科技和消费科技领域的天使投资者。</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_09.png")} /></Row>
                                    <Row className="name">郑丹枫 CFA</Row>
                                    <Row className="position">HashKey Pro首席执行官</Row>
                                </Col>
                            </Popover>
                            <Popover placement="top" content={
                                <div>具有12年以上相关从业经验及多年区块链和云计算产品经验，并拥有多项技术专利，创建了区块链创新BaaS平台并服务著名企业客户；区块链社区KOL，专注区块链背后的技术研究和产品模式演进。曾在通联数据担任金融云端和智能投研负责人。</div>
                            }>
                                <Col span={6} className="eachMember">
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_10.png")} /></Row>
                                    <Row className="name">李晨</Row>
                                    <Row className="position">HashQuark首席执行官</Row>
                                </Col>
                            </Popover>
                            <Col span={6} className="eachMember" style={{ textAlign: 'right' }}>
                                <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_11.png")} /></Row>
                                <Row className="name">段玺</Row>
                                <Row className="position">Tokyo Hash首席执行官</Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-between" className="member">
                            <Col span={6}></Col>
                            <Popover placement="top" content={
                                <div>毕业于斯坦福商学院，并为斯坦福大学最大的学生区块链组织联合创始人。具有10年以上硅谷和中国高科技初创企业高管经验，职业生涯从衍生品交易员和分析师开始。</div>
                            }>
                                <Col span={6} className="eachMember" style={{ textAlign: 'center' }}>
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_12.png")} /></Row>
                                    <Row className="name">Ben EI-Baz</Row>
                                    <Row className="position">HashKey Pro首席战略官</Row>
                                </Col>
                            </Popover>
                            <Popover placement="top" content={
                                <div>具有17年以上工作经验，曾任蚂蚁金服东北亚合规主管；于加皇财富管理、汇丰银行、法巴银行、香港证监会、摩根士丹利等大机构担任要职。</div>
                            }>
                                <Col span={6} className="eachMember" style={{ textAlign: 'center' }}>
                                    <Row><img className="avator" src={require("web-hashKey-imgs/home/web/gw_13.png")} /></Row>
                                    <Row className="name">欧阳健男</Row>
                                    <Row className="position">HashKey Pro首席运营官</Row>
                                </Col>
                            </Popover>
                            <Col span={6}></Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={24} className="longLine"></Col></Row>
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
                                <Row className="text">安全可靠的数字资产交易平台</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashKey Capital</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">面向合格和专业投资者的区块链投资基金</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">HashQuark</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">存币即挖矿</Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center"><Col span={1} className="longLine"></Col></Row>
                        <Row type="flex" justify="space-between" className="eachItem">
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">Tokyo Hash</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">您在日本当地的商业伙伴</Row>
                            </Col>
                            <Col xl={6} lg={7}>
                                <Row className="subTitle">Axonomy</Row>
                                <Row type="flex" justify="center"><Col span={2} className="shortLine"></Col></Row>
                                <Row className="text">分布式商业加速器</Row>
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
                        <Row className="title">合作伙伴</Row>
                        <Row type="flex" justify="center"><Col className="shortLine" span={1}></Col></Row>
                        <Row className="partnersList" type="flex" justify="space-between">
                            {this.renderPartnersList()}
                        </Row>
                    </Col>
                </Row>
                <Row id="contact" className="contactFrame" type="flex" justify="center" align="middle">
                    <Col span={18} style={{ maxWidth: 900 }}>
                        <Row className="title">联系我們</Row>
                        <Row className="text">地址: 香港数码港道100号3座D区6楼614-615室</Row>
                        <Row className="text">邮箱: contact@hashkey.com</Row>
                        <Row className="text hashkey" onClick={() => { location.href = "https://www.facebook.com/HashKey-Group-Limited-461036224433414/" }}>Facebook</Row>
                        <Row className="text hashquark" onClick={() => { location.href = "https://twitter.com/HashKeyGroup" }}>Twitter</Row>
                    </Col>
                </Row>
            </WrapperWebView >
        )
    }
}

module.exports = WebCN;