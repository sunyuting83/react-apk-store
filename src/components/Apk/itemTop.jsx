import React, { Component } from 'react';

class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: this.props.data,
            title: this.props.title,
            created_at: this.props.date,
            count: this.props.count
        };
    }

    render() {
        let apk = this.state.top;
        return (
            <section className="bgcolor-fff">
                {apk && (
                    <div className="item">
                        <div className="item-img"><img src={apk.cover} alt={this.state.title} /></div>
                        <div>
                            <h1>{this.state.title}</h1>
                            <h5>
                                <span>{this.state.count}人下载</span>
                                <span>{apk.apk_size}</span>
                            </h5>
                            <h5>{this.state.created_at}更新</h5>
                        </div>
                    </div>
                )}
            </section>
        );
    }
}

export default Top;
