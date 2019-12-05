import React, { Component } from 'react';

class Bottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            title: this.props.title,
            btshow: this.props.btshow,
            id: this.props.id
        };
        this.download = this.download.bind(this);
    }

    download() {
        this.props.handleDownload(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.btshow !== this.state.btshow) {
            this.setState({
                btshow: nextProps.btshow
            })
        }
    }

    render() {
        let apk = this.state.data;
        return (
            <div className={`row bootom-down ${this.state.btshow ? 'active' : ''}`}>
                <div className="col col-15"><img src={apk.cover} alt={this.state.title} /></div>
                <div className="col col-65">
                    <h1>{this.state.title}</h1>
                    <span>{apk.apk_size}</span>
                </div>
                <div className="col">
                    <button className="bt-down" onClick={this.download}>下载</button>
                </div>
            </div>
        );
    }
}

export default Bottom;
