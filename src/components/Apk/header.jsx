import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Back from '../public/back';

class Header extends Component {
    render() {
        return (
            <header className="packup">
                <div className="item-header">
                    <Back />
                    <NavLink to='/' className="item-nav">精选</NavLink>
                    <NavLink to={{
                            pathname: `/soft`,
                            state: {type: 'soft'}
                        }} className="item-nav">
                        软件
                    </NavLink>
                    <NavLink to={{
                            pathname: `/game`,
                            state: { type: 'game' }
                        }} className="item-nav">
                        游戏
                    </NavLink>
                    <NavLink to='/classify' className="item-nav">分类</NavLink>
                    <NavLink to='/search' className="search"><i className="fa fa-search"></i></NavLink>
                </div>
            </header>
        );
    }
}

export default Header;
