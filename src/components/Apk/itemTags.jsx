import React, { Component } from 'react';
import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from 'react-iscroll';
import { Link } from 'react-router-dom';

class Tags extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            show: true,
            tags: data
        };
    }
    toggle() {
        this.setState({ show: !this.state.show })
    }
    render() {
        let tags = this.state.tags;
        return (
            <section className="block padding-b15">
                {tags && (
                    <ReactIScroll iScroll={iScroll} className="inner" options={{ eventPassthrough: true, scrollX: true, scrollY: false }}>
                        <ul className="list">
                            <li>
                                {
                                    tags && tags.length > 0 &&
                                    tags.map((item, index) => (
                                        <Link to={{
                                            pathname: `/list/${item.id}`,
                                            state: { type: 'tag', title: item.tag }
                                        }} className="tag" key={index}>{item.tag}</Link>
                                    ))
                                }
                            </li>
                        </ul>
                    </ReactIScroll>
                )}
            </section>
        );
    }
}

export default Tags;
