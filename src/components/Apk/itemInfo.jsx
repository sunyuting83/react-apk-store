import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            show: true,
            info: data
        };
    }
    toggle() {
        this.setState({ show: !this.state.show })
    }
    render() {
        let info = this.state.info;
        return (
            <section className="bgcolor-fff">
                {info && (
                    <div>
                        <div className="row">
                            <div className="col f11 text-left h99 padding-lr15 padding-t15" style={{ overflow: this.state.show ? 'hidden' : 'inherit', height: this.state.show ? '3.5rem' : 'auto' }}>
                                {
                                    info && info.length > 0 &&
                                    info.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="anniu f11" style={{ display: this.state.show ? 'none' : 'block' }} onClick={this.toggle.bind(this)}>
                            收起介绍 <i className="fa fa-angle-up"></i>
                        </div>
                        <div className="anniu f11" style={{ display: this.state.show ? 'block' : 'none' }} onClick={this.toggle.bind(this)}>
                            展开全部介绍 <i className="fa fa-angle-down"></i>
                        </div>
                    </div>
                )}
            </section>
        );
    }
}

export default Info;
