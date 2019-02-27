import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { WrapperWebView } from './styled'
import { hashHistory } from 'react-router'
// const logo = require("web-hashKey-imgs/home/web/en/logo.png");
// const bannerImg = require("web-hashKey-imgs/hk/web/cn/hash001.png");

class WebView extends React.Component {
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
        var key = ["about", "assets", "team", "parteners", "contact"];
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
asds
            </WrapperWebView>
        )
    }
}

module.exports = WebView;