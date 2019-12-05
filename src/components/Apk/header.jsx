import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from '../public/back';

class Header extends Component {
    render() {
        return (
            <header className="packup">
                <div className="item-header">
                    <Back />
                    <Link to='/' className="item-nav">精选</Link>
                    <Link to='/soft' className="item-nav">软件</Link>
                    <Link to='/game' className="item-nav">游戏</Link>
                    <Link to='/classify' className="item-nav">分类</Link>
                    <Link to='/search' className="search"><i className="fa fa-search"></i></Link>
                </div>
            </header>
        );
    }
}

export default Header;
