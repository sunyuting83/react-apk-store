import React, { Component } from 'react';
import Pace from 'react-pace-progress';
import Header from './header';
import List from './list';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as act_list from "../../actions/index";


class ListData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            listHeight: 0,
            list: [],
            cid: this.props.match.params.id,
            type: this.props.location.state.type,
            title: this.props.location.state.title,
            page: 1
        };
    }

    componentWillMount() {
        this.setState({
            isLoading: false
        });
        // this.getData();
    }


    render() {
        const { cid, type } = this.state;
        return (
            <div>
                {this.state.isLoading ?
                    <Pace color="#34affb" height={3} />
                    :
                    <div>
                        <Header title={this.state.title} />
                        {type && (
                            <List data={cid} type={type} />
                        )}
                    </div>
                }
            </div>
        );
    }
}


function bindact(dispatch) {
    return bindActionCreators(act_list, dispatch)
}

export default connect(mapstate, bindact)(ListData);
// export default Search;
