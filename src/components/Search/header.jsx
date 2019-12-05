import React, { Component } from 'react';
import PropTypes from 'prop-types';
import creatHistory from 'history/createBrowserHistory';
import Suggestions from './Suggestions';
import { get } from '../public/httpServer';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as act_search from "../../actions/index";

const history = creatHistory();
class Header extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: [],
            hides: true,
            first: {}
        };
        this.clearInput = this.clearInput.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    getInfo () {
        let param = {
            key: this.state.query
        };
        get('searchkey', param).then((data) => {
            this.setState({
                first: data.first,
                results: data.list,
                hides: true
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    clearInput () {
        // 清除搜索词
        this.search.value = '';
        let data = {
            query: '',
            results: [],
            hides: false,
            first: {}
        };
        this.setState(data);
        this.props.handleSearchKey(false);
        this.props.act_search_key(data);
        this.props.act_search_data({
            key: false,
            data: [],
            page: 1,
            scrollTop: 0
        });
        this.search.focus()
    }

    handleInputChange () {
        // 监听输入字符
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 0) {
                if (this.state.query.length % 1 === 0) {
                    this.getInfo()
                }
            } else if (!this.state.query) {
                this.setState({
                    query: '',
                    results: [],
                    hides: false
                })
            }
        });
    }

    onKeyup(e) {
        // 监听回车
        if (e.keyCode === 13) {
            this.handleSubmit();
        }
    }

    handleSubmit () {
        // 提交 获得数据
        let data = {
            query: this.state.query,
            results: [],
            hides: false,
            first: {}
        };
        this.setState(data);
        this.props.act_search_key(data);
        this.props.handleSearchKey(this.state.query);
    }

    goBack() {
        this.clearInput();
        history.goBack()
    }

    componentDidMount() {
        /**  这里有巨坑。必须设置超时才能获得ref
        * @this._container content的DOM
        * @this.props.red_index_height redux里保存的高度
        */
        let data = this.props.red_search_key;
        // console.log(data);
        if (data.query.length > 0) {
            this.search.value = data.query;
            this.setState(data);
        };
        this.search.focus()

    }

    render() {
        return (
            <header className="packup">
                <div className="item-header">
                    <div onClick={this.goBack} className="back"><i className="fa fa-angle-left"></i></div>
                    <div className="searchInput">
                        <div className="searchI">
                            <i className="fa fa-search"></i>
                            {this.state.query && this.state.query.length >= 1 ? <i onClick={this.clearInput} className="fa fa-times-circle"></i> : null}
                            <input 
                                placeholder="24小时热搜"
                                ref={input => this.search = input}
                                onChange={this.handleInputChange}
                                onKeyUp={this.onKeyup} />
                        </div>
                    </div>
                    {this.state.query && this.state.query.length >= 1?
                        <button onClick={this.handleSubmit} className="search-btn">搜索</button>
                        :
                        <div onClick={this.goBack} className="search-back">取消</div>
                    }
                    <Suggestions first={this.state.first} results={this.state.results} hd={this.state.hides} query={this.state.query} />
                </div>
            </header>
        );
    }
}

function bindact(dispatch) {
    return bindActionCreators(act_search, dispatch)
}

export default connect(mapstate, bindact)(Header);
