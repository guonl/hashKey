import React, { Component } from 'react'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'

@observer
class PrdDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerWidth: window.innerWidth,
        }
    };

    componentDidMount() {
        let that = this;
        window.onresize = function() {
            that.setState({innerWidth: window.innerWidth});
        }
    }

    render() {
        let img;
        if(this.state.innerWidth > 999) {
            if(LocaleStore.currentLocales == "en") {
                img = require("web-hashKey-imgs/prdDetail/web/en/offerings_eg.png");
            } else if(LocaleStore.currentLocales == "gk") {
                img = require("web-hashKey-imgs/prdDetail/web/gk/offerings_ch.png");
            }
        } else {
            if(LocaleStore.currentLocales == "en") {
                img = require("web-hashKey-imgs/prdDetail/mobile/en/m_b_offeringeg.png");
            } else if(LocaleStore.currentLocales == "gk") {
                img = require("web-hashKey-imgs/prdDetail/mobile/gk/m_b_offeringch.png");
            }
        }
        return (
            <img src={img} style={{width: '100%'}}/>
        )
    }
}

module.exports = PrdDetail;