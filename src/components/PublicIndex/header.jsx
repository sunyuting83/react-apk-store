import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/apklogo.png';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as index_act from "../../actions/index";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        };
        this.setHeight = this.setHeight.bind(this);
    }

    setHeight() {
        // 设置首页高度到 redux
        this.props.act_index_height(this.state.scrollTop);
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
            <header className="packup">
                <div className="item-header">
                    <div className="item-nav logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <Link to='/search' className="searchInput" onClick={this.setHeight}>
                        <div className="searchI">
                            <i className="fa fa-search"></i>
                            <span>24小时热搜</span>
                        </div>
                    </Link>
                </div>
            </header>
        );
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(Header);
