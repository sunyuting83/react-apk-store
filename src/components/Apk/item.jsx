import React, { Component } from 'react';
import { get } from '../public/httpServer';
import Header from './header';
import Top from './itemTop';
import Down from './itemDown';
import InfoImg from './itemInfoImg';
import Info from './itemInfo';
import Tags from './itemTags';
import NewList from './newList';
import Bottom from './itemBottom';
import BootLine from '../public/bootline';
import ItemSwiper from './itemSwiper';
import Pace from 'react-pace-progress';

class Apks extends Component {
    constructor(props) {
        super(props);
        let id  = this.props.match.params.id;
        this.state = {
            isLoading: true,
            id: id,
            btshow: false,
            swshow: false
        };
        this._onScrollEvent = this._onScrollEvent.bind(this);
        this.handleSwiper = this.handleSwiper.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
    }

    componentWillMount() {
        this.setState({
            isLoading: true
        });
    }

    getData(id) {
        if (!id) id = this.state.id;
        let parms = { id: id};
        get('item', parms).then((data) => {
            this.setState({
                isLoading: false,
                data: data
            });
            document.title = this.state.data.title;
        }).catch((err) => {
            console.log(err)
        });
    }

    _onScrollEvent() {
        if (this._container.scrollTop >= 283) {
            this.setState({
                btshow: true
            })
        }else {
            this.setState({
                btshow: false
            })
        }
    }

    handleSwiper(v) {
        this.setState({ swshow: v });
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

    componentWillReceiveProps(nextProps, nextState) {
        let nextid = nextProps.match.params.id;
        if (nextid !== this.state.id) {
            this.setState({
                isLoading: true,
                btshow: false,
                id: nextid
            });
            // console.log(this.state.id);
            this.getData(nextid);
        }
    }
    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
            {this.state.isLoading ?
            <Pace color="#34affb" height={3} />
            :
            <div>
                <Header />
                <section ref={c => this._container = c} className="content" onScrollCapture={() => this._onScrollEvent()}>
                       
                    {this.state.data && (
                        <div>
                            <Top data={this.state.data.more} title={this.state.data.title} date={this.state.data.created_at} count={this.state.data.apk_count} />
                            <Down data={this.state.id} handleDownload={this.handleDownload} />
                            <InfoImg data={this.state.data.more.infoimg} handleSwiper={this.handleSwiper} />
                            <Info data={this.state.data.more.intromore} />
                            <Tags data={this.state.data.tags} />
                            <NewList data={this.state.data.newlist} title="最新的不容错过" handleDownload={this.handleDownload} />
                            <NewList data={this.state.data.hotlist} title="热到发紫的应用" handleDownload={this.handleDownload} />
                            <BootLine />
                        </div>
                    )}
                </section>
                <iframe ref="frame" src="" title="download" style={{ display: 'none' }}></iframe>
                {this.state.btshow && (
                    <Bottom btshow={this.state.btshow} data={this.state.data.more} title={this.state.data.title} id={this.state.id} handleDownload={this.handleDownload} />
                )}
                {this.state.swshow && (
                    <ItemSwiper data={this.state.data.more.infoimg} show={this.state.swshow} handleSwiper={this.handleSwiper} />
                )}
            </div>
            }
            </div>
        );
    }
}

export default Apks;
