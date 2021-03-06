import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { hashHistory } from 'react-router';
import { WrapperFrame } from './styled'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'
const logo = require("web-hashKey-imgs/home/web/hashkeyLogo.png");
const img01 = require("web-hashKey-imgs/prdDetail/web/en/offerings2_01.png");
const img02 = require("web-hashKey-imgs/prdDetail/web/en/offerings2_02.png");
const img03 = require("web-hashKey-imgs/prdDetail/web/en/offerings2_03.png");
const img04 = require("web-hashKey-imgs/prdDetail/web/en/offerings2_04.png");
const img05 = require("web-hashKey-imgs/prdDetail/web/en/offerings2_05.png");
const img06 = require("web-hashKey-imgs/prdDetail/web/en/offerings2_06.png");
const img07 = require("web-hashKey-imgs/prdDetail/web/en/offerings2_07.png");

@observer
class WebEN extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        LocaleStore.currentLocales;
        return (
            <WrapperFrame>
                <Row className="headerMenu" type="flex" justify="center">
                    <Col span={22}>
                        <Col span={16} className="title">
                            <img className="logo" src={logo} onClick={() => hashHistory.push("/")}/>
                        </Col>
                        <Col span={8}>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "en" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "en") }}>En</a>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "gk" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "gk") }}>繁體</a>
                            <a href="javascript:;" className={LocaleStore.currentLocales == "cn" ? "selected" : ""} onClick={() => { LocaleStore.changeLocaleConfig.call(this, "cn") }}>简体</a>
                        </Col>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="contentFrame">
                    <Col span={20} style={{ maxWidth: 1280 }}>
                        <img src={img01} className="title en" />
                        <a href="https://pro.hashkey.com">
                            <img src={img02} />
                        </a>
                        <a href="javascript:;">
                            <img src={img03} />
                        </a>
                        <a href="https://www.hashquark.io">
                            <img src={img04} />
                        </a>
                        <a href="https://hub.hashkey.com">
                            <img src={img05} />
                        </a>
                        <a href="https://www.tokyohash.co.jp">
                            <img src={img06} />
                        </a>
                        <a href="https://www.axonomy.pro/#/">
                            <img src={img07} />
                        </a>
                    </Col>
                </Row>
            </WrapperFrame>
        )
    }
}

module.exports = WebEN