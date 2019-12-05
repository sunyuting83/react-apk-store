import React, { Component } from 'react';

class BootLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bottom: '我是有底线的！！'
        };
    }

    render() {
        return (
            <div className="last-block"><h2>{this.state.bottom}</h2></div>
        );
    }
}

export default BootLine;
