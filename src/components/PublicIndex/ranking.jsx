import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as index_act from "../../actions/index";

class Ranking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: this.props.height,
            rank: this.props.data,
            type: this.props.type
        };
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

    componentWillReceiveProps(nextProps) {
        let h = nextProps.height; //接受首页滚动的高度
        if (h === undefined) h = 0; //如果没有高度，就是0
        // 设置state
        this.setState({
            scrollTop: h
        });
    }

    render() {
        let rank = this.state.rank;
        return (
            <div className="block">
                <div className="row rank">
                {rank.length>0 && rank.map((rank, i) => (
                    <Link className="col col-33" to={{
                        pathname: `/list/${rank.id}`,
                        state: {
                            type: 'topic', title: rank.title
                        }}} key={i} onClick={this.setHeight}>
                        <i className={`fa ${rank.more}`}></i>
                        <span>{rank.title}</span>
                    </Link>
                ))}
                </div>
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}

export default connect(mapstate, bindact)(Ranking);
