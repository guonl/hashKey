import React, { Component } from 'react'
import { observer } from 'mobx-react';
import LocaleStore from 'web-hashKey-mobx/locale'
const img01 = require("web-hashKey-imgs/prdDetail/mobile/cn/m_b_offeringjt.png");

@observer
class MobileGK extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        LocaleStore.currentLocales;
        return (
            <img src={img01} style={{width: '100%'}} />
        )
    }
}

module.exports = MobileGK