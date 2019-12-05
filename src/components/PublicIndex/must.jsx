import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'react-iscroll';
import DefaultImg from '../public/defaultImg';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as index_act from "../../actions/index";

class mustList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            must: this.props.data,
            scrollTop: this.props.height,
            downurl: '',
            type: this.props.type
        };
        this.download = this.download.bind(this);
        this.setHeight = this.setHeight.bind(this);
    }

    setHeight(event) {
        // 设置首页高度到 redux
        if (this.state.type === 'soft') {
            this.props.act_soft_height(this.state.scrollTop);
        } else {
            this.props.act_game_height(this.state.scrollTop);
        }
    }

    download(event, id) {
        this.props.handleDownload(id);
        event.preventDefault();
    }

    componentWillReceiveProps(nextProps) {
        let h = nextProps.height; //接受首页滚动的高度
        if (h === undefined) h = 0; //如果没有高度，就是0
        // 设置state
        this.setState({
            scrollTop: h
        });
    }

    render() {
        return (
            <div>
                {this.state.must && this.state.must.length > 0 &&
                    this.state.must.map((item, index) => (
                        <div className="block" key={item.id}>
                            <div className="catalog">
                                <div className="row">
                                    <div className="col b-title">{item.title}</div>
                                    <div className="col title-more"><i className="fa"></i></div>
                                </div>
                            </div>
                            <ReactIScroll iScroll={iScroll} className="inner" options={{ eventPassthrough: true, scrollX: true, scrollY: false }}>
                            <ul className="list"><li>
                            {item.apks.length>0 && item.apks.map((apk, i) => (
                                <Link className="apkls" to={{
                                        pathname: `/item/${apk.id}`,
                                        state: {id:apk.id}
                                    }} key={apk.id} onClick={this.setHeight}>
                                    <div ><DefaultImg src={apk.more.cover} /></div>
                                    <div className="apkmore">
                                        <h1>{apk.title}</h1>
                                        <h5>{apk.more.apk_size}</h5>
                                    </div>
                                    <button className="download" onClick={(e) => { this.download(e, apk.id)}} >下载</button>
                                </Link>
                            ))}
                            </li></ul>
                            </ReactIScroll>
                        </div>
                    ))
                }
            </div>
        );
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(mustList);
