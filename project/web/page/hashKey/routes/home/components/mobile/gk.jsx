import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { hashHistory } from 'react-router';

class MobileGK extends React.Component {
    constructor(props) {
        super(props);
    }

    goToHk(i) {
        if(i==2) {hashHistory.push("/hk")}        
    }

    renderMobilePage() {
        var dom = [];
        for(var i = 0;i<7;i++) {
            var img = require(`web-hashKey-imgs/home/mobile/mobike${i+1}.png`);
            dom.push(
                <Row key={i} onClick={this.goToHk.bind(this, i)}>
                    <img src={img} style={{width: '100%'}} />
                </Row>
            )
        }
        return dom;
    }

    render() {
        return (
            <Row>{this.renderMobilePage()}</Row>
        )
    }
}

module.exports = MobileGK;