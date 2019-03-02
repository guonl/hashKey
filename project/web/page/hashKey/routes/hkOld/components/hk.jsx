import React, { Component } from 'react'
import { hashHistory } from 'react-router'

class HKOld extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        hashHistory.push("/digital-asset-summit-2019")
    }

    render() {        
        return (
            <div></div>
        )
    }
}

module.exports = HKOld;