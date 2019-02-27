import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { observer } from 'mobx-react';
import WebEN from './web/en.jsx'
// import WebCN from './web/cn.jsx';
import WebGK from './web/gk.jsx';
import MobileEN from './mobile/en.jsx'
// import MobileCN from './mobile/cn.jsx'
import MobileGK from './mobile/gk.jsx'
import LocaleStore from 'web-hashKey-mobx/locale'

@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            innerWidth: window.innerWidth,
        }
    }

    componentDidMount() {
        let that = this;
        window.onresize = function() {
            that.setState({innerWidth: window.innerWidth});
        }
    }

    getWebPage() {
        switch(LocaleStore.currentLocales) {
            case "en":
                return <WebEN></WebEN>;
                break;
            // case "cn": 
            //     return <WebCN></WebCN>;
            //     break;
            case "gk": 
                return <WebGK></WebGK>;
                break;
            default:
                return <WebEN></WebEN>;
        }
    }

    getMobilePage() {
        switch(LocaleStore.currentLocales) {
            case "en":
                return <MobileEN></MobileEN>;
                break;
            // case "cn": 
            //     return <MobileCN></MobileCN>;
            //     break;
            case "gk": 
                return <MobileGK></MobileGK>;
                break;
            default:
                return <MobileEN></MobileEN>;
        }
    }
    render() {        
        return (
            <Row>
                {this.state.innerWidth > 999 ?
                    this.getWebPage() : this.getMobilePage()
                }
            </Row>
        )
    }
}

module.exports = Home;