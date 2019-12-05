import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'react-iscroll';
import DefaultImg from '../public/defaultImg';

class NewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newlist: this.props.data,
            title: this.props.title,
            downurl: ''
        };
        this.download = this.download.bind(this);
    }

    download(event,i) {
        let durl = this.state.newlist[i].more.download;
        this.props.handleDownload(durl);
        event.preventDefault();
    }

    render() {
        let newlist = this.state.newlist;
        return (
            <div>
                <div className="block">
                    <div className="catalog">
                        <div className="row">
                            <div className="col b-title">{this.state.title}</div>
                            <div className="col title-more"><i className="fa"></i></div>
                        </div>
                    </div>
                    <ReactIScroll iScroll={iScroll} className="inner" options={{ eventPassthrough: true, scrollX: true, scrollY: false }}>
                    <ul className="list"><li>
                    {newlist.length>0 && newlist.map((apk, i) => (
                        <Link className="apkls" to={`/item/${apk.id}`} key={apk.id}>
                            <div ><DefaultImg src={apk.more.cover} /></div>
                            <div className="apkmore">
                                <h1>{apk.title}</h1>
                                <h5>{apk.more.apk_size}</h5>
                            </div>
                            <button className="download" onClick={(e) => { this.download(e, i)}} >下载</button>
                        </Link>
                    ))}
                    </li></ul>
                    </ReactIScroll>
                </div>
            </div>
        );
    }
}

export default NewList;
