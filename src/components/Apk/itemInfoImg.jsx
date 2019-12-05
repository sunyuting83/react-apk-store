import React, { Component } from 'react';
import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'react-iscroll';

class InfoImg extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            imgls: data
        };
        this.showSwiper = this.showSwiper.bind(this);
    }


    showSwiper() {
        this.props.handleSwiper(true);
    }

    render() {
        let imgls = this.state.imgls;
        return (
            <ReactIScroll iScroll={iScroll} className="inner" options={{ eventPassthrough: true, scrollX: true, scrollY: false }} onClick={this.showSwiper}>
                <ul className="list">
                    <li>
                        {imgls && imgls.length > 0 && imgls.map((img, i) => (
                            <div className="item-infoImg" key={i}>
                                <img src={img} alt={i} className="img-100" />
                            </div>
                        ))}
                    </li>
                </ul>
            </ReactIScroll>
        );
    }
}

export default InfoImg;
