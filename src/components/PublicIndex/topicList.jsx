import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultImg from '../public/defaultImg';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as index_act from "../../actions/index";

class TopicList extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            topic: data,
            scrollTop: this.props.height,
            type: this.props.type
        };
        this.download = this.download.bind(this);
        this.setHeight = this.setHeight.bind(this);
    }

    setHeight(event) {
        // 设置首页高度到 redux
        if(this.state.type === 'soft') {
            this.props.act_soft_height(this.state.scrollTop);
        }else {
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
                {this.state.topic && this.state.topic.length > 0 &&
                    this.state.topic.map((item, index) => (
                        <div className="block" key={item.id}>
                            <div className="catalog">
                                <div className="row">
                                    <div className="col b-title">{item.title}</div>
                                    <Link to={{
                                        pathname: `/list/${item.id}`,
                                        state: { type: 'topic', title: item.title }
                                    }} className="col title-more"><i className="fa fa-angle-right"></i></Link>
                                </div>
                            </div>
                            {
                                item.apks.length>0 && item.apks.map((apk, i) => (
                                <Link to={`/item/${apk.id}`} className="row apkls" key={apk.id}  onClick={this.setHeight}>
                                    <div className="col col-20"><DefaultImg src={apk.more.cover} /></div>
                                    <div className="col col-66 apkmore">
                                        <h1>{apk.title}</h1>
                                        <div>
                                            <span>{apk.apk_count}人下载</span>
                                            <span>{apk.more.apk_size}</span>
                                        </div>
                                        <h3>{apk.more.intro}</h3>
                                    </div>
                                    <button className="col download" onClick={(e) => { this.download(e, apk.id)}} >下载</button>
                                </Link>
                                ))
                            }
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

export default connect(mapstate, bindact)(TopicList);
