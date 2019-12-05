import React, { Component } from 'react';

class Down extends Component {
    constructor(props) {
        super(props);
        this.state = {
            down: this.props.data
        };
        this.download = this.download.bind(this);
    }

    download() {
        this.props.handleDownload(this.state.down);
    }

    render() {
        let download = this.state.down;
        return (
            <section className="item-dl">
                {download && (
                    <button className="item-download" onClick={this.download}>
                        <i className="fa fa-download"></i>
                        <div>立即下载</div>
                    </button>
                )}
            </section>
        );
    }
}

export default Down;
