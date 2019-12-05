import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pace from 'react-pace-progress';
import { get } from '../public/httpServer';
import Tabs from '../public/Tabs';
import Header from '../public/searchHeader';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as act_classify from "../../actions/index";

class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            active: 1,
            data: []
        };
        this.changeClassify = this.changeClassify.bind(this);
        this.setActiveID = this.setActiveID.bind(this);
    }

    getData() {
        get('classify').then((data) => {
            this.setState({
                isLoading: false,
                data: data
            })
        }).catch((err) => {
            console.log(err)
        });
    }

    changeClassify (id) {
        this.setState({
            active: id
        })
    }
    setActiveID(id) {
        // 设置首页高度到 redux
        this.props.act_classify_id(id);
    }

    componentDidMount() {
        this.getData();
        this.setState({
            active: this.props.red_classify_id
        });
    }

    render() {
        let data = this.state.data;
        return (
            <div>
                {this.state.isLoading ?
                    <Pace color="#34affb" height={3} />
                    :
                    <div>
                        {data && (<Header />)}
                        <section className="content bgcolor-fff">
                            <div className="block row classify">
                            {data && data.length > 0 && data.map((item, index) => (
                                <div className={`col col-50 ${item.id === this.state.active ? 'active' : ''}`} key={index} onClick={() => {this.changeClassify(item.id)}}>
                                    <i className={`fa ${item.classname === '软件'? 'fa-tasks' : 'fa-gamepad' } `}></i>
                                    <h1>{item.classname}</h1>
                                </div>
                            ))}
                                <div className={`c-tab-ink-bar ${data[1].id === this.state.active ? 'active' : ''}`}>
                                    <div className="c-tab-bar-inner"></div>
                                </div>
                            </div>
                            <div className="block">
                                {data && data.length > 0 && data.map((bigitem, index) => (
                                    
                                    bigitem.id === this.state.active && (
                                        <div className='row row-wrap sm-classify' key={index}>
                                        {bigitem.classify.map((item, i) => (
                                            <Link to={{
                                                pathname: `/list/${item.id}`,
                                                state: { type: 'classlist', title: item.classname}
                                            }} className="col col-25" key={i}
                                            onClick={() => {this.setActiveID(bigitem.id)}}>
                                                <i className="fa fa-gg"></i>
                                                {item.classname}
                                            </Link>
                                        ))}
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>
                        <Tabs />
                    </div>
                }
            </div>
        )
    }
}


function bindact(dispatch) {
    return bindActionCreators(act_classify, dispatch)
}

export default connect(mapstate, bindact)(Classify);
// export default Classify;