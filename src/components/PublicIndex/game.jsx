import React, { Component } from 'react';
import Pace from 'react-pace-progress';
import { get } from '../public/httpServer';
import Tabs from '../public/Tabs';
import AdImg from './adimg';
import TopicList from './topicList';
import Must from './must';
import Ranking from './ranking';
import BootLine from '../public/bootline';
import Header from '../public/searchHeader';
// redux 开始
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { mapstate } from "../../reducers/data";
import * as game_act from "../../actions/index";


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            scrollTop: 0,
            type: ''
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
    }

    componentWillMount() {
        let type = this.props.location.state.type;
        this.setState({
            type: type
        });
    }

    getData() {
        let type = this.state.type;
        get(type).then((data) => {
            this.setState({
                isLoading: false,
                data: data
            })
        }).catch((err) => {
            console.log(err)
        });
        
    }

    handleScroll() {
        let scrollTop = this._container.scrollTop;
        this.setState({
            scrollTop: scrollTop
        })
    }

    handleDownload(id) {
        let downEl = this.refs.frame;
        let param = {
            id: id
        };
        get('download', param).then((data) => {
            if (data) {
                downEl.src = data;
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        this.getData();
        /**  这里有巨坑。必须设置超时才能获得ref
        * @this._container content的DOM
        * @this.props.red_index_height redux里保存的高度
        */
        setTimeout(function () {
            let scroll = this._container,
                h = this.props.red_game_height;
            if (h === undefined) h = 0;
            if (scroll !== undefined) {
                scroll.scrollTop = h;
            }
        }.bind(this), 100)
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                {this.state.isLoading ?
                <Pace color="#34affb" height={3} />
                :
                <div>
                    {data && (<Header height={this.state.scrollTop} />)}
                    {data && (
                    <section className="content" ref={c => this._container = c} onScrollCapture={() => this.handleScroll()}>
                        <AdImg data={data.ad} />
                        <Ranking data={data.rank} height={this.state.scrollTop} type={this.state.type} />
                        <Must data={data.choice} handleDownload={this.handleDownload} height={this.state.scrollTop} type={this.state.type} />
                        <TopicList data={data.topic} handleDownload={this.handleDownload} height={this.state.scrollTop} type={this.state.type} />
                        <BootLine />
                        <iframe ref="frame" src="" title="download" style={{ display: 'none' }}></iframe>
                    </section>
                    )}
                    <Tabs />
                </div>
                }
            </div>
        );
    }
}


function bindact(dispatch) {
    return bindActionCreators(game_act, dispatch)
}


export default connect(mapstate, bindact)(Game);

// export default Index;
