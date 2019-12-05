import React, { Component } from 'react';
import Pace from 'react-pace-progress';
import Header from './header';
import HotKey from './hotKey';
import List from './list';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as act_search from "../../actions/index";


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            listHeight: 0,
            list: [],
            key: false,
            page: 1
        };
        this.handleDownload = this.handleDownload.bind(this);
        this.handleSearchKey = this.handleSearchKey.bind(this);
    }

    componentWillMount() {
        this.setState({
            isLoading: false
        });

        this.props.act_search_data({
            key: false,
            data: [],
            page: 1,
            scrollTop: 0
        });
    }


    handleSearchKey(key) {
        this.setState({
            key: key
        });
    }

    handleDownload(d) {
        let downEl = this.refs.frame;
        downEl.src = d;
    }

    componentDidMount() {
        let redux = this.props.red_search_data;
        if (redux.key !== '')
            this.setState({
                key: redux.key,
                listHeight: redux.scrollTop,
                list: redux.data,
                page: redux.page
            });
        // console.log(
        //     redux.key,
        //     redux.scrollTop,
        //     redux.data,
        //     redux.page);
        /**  这里有巨坑。必须设置超时才能获得ref
        * @this._container content的DOM
        * @this.props.red_index_height redux里保存的高度
        */
        setTimeout(function () {
            let scroll = this._container,
                h = this.props.red_index_height;
            if (h === undefined) h = 0;
            if (scroll !== undefined) {
                scroll.scrollTop = h;
            }
        }.bind(this), 200)
    }

    render() {
        const { key, listHeight, list, page} = this.state;
        return (
            <div>
                {this.state.isLoading ?
                <Pace color="#34affb" height={3} />
                :
                <div>
                    <Header handleSearchKey={this.handleSearchKey} />
                    {key && key.length > 0 ?
                    <List data={key} listHeight={listHeight} list={list} page={page} type={'search'} />
                    :
                    <HotKey handleSearchKey={this.handleSearchKey} />
                    }
                </div>
                }
            </div>
        );
    }
}


function bindact(dispatch) {
    return bindActionCreators(act_search, dispatch)
}

export default connect(mapstate, bindact)(Search);
// export default Search;
