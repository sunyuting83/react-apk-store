import React, { Component } from 'react';
import PropTypes from 'prop-types';
import creatHistory from 'history/createBrowserHistory';
import { Link } from 'react-router-dom';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as act_list from "../../actions/index";

const history = creatHistory();

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.clearInput = this.clearInput.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    clearInput() {
        this.props.act_list_data({
            cid: false,
            data: [],
            page: 1,
            scrollTop: 0
        });
    }

    goBack() {
        this.clearInput();
        history.goBack()
    }

    render() {
        return (
            <header className="packup">
                <div className="item-header">
                    <div onClick={this.goBack} className="back"><i className="fa fa-angle-left"></i></div>
                    <h1 className="item-nav">{this.props.title}</h1>
                    <Link to='/search' className="search"><i className="fa fa-search"></i></Link>
                </div>
            </header>
        );
    }
}

function bindact(dispatch) {
    return bindActionCreators(act_list, dispatch)
}

export default connect(mapstate, bindact)(Header);
