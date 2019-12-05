import React, { Component } from 'react';

class HeaderLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        };
    }

    render() {
        return (
            <div className={`head-loading ${this.state.show ? 'transform' : ''}`}></div>
        );
    }
}

export default HeaderLoad;
