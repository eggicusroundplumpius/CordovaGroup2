// Timeline.js

import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class Timeline extends React.Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        <Timeline {...this.props} />
    }
}