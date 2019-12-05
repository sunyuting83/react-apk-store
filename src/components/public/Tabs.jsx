import React from 'react';
import {NavLink} from 'react-router-dom';

// const TabsData = [
// 	{
// 		'link': '/',
// 		'icon': 'icon icon-home',
// 		'exact' : 'exact'
// 	},
// 	{
// 		'link': '/list/6',
// 		'icon': 'icon icon-class',
// 		'exact' : ''
// 	},
// 	{
// 		'link': '/tags',
// 		'icon': 'icon icon-tags',
// 		'exact' : 'exact'
// 	}
// ];
//
// const TabsStyle = TabsData.map((tabs,i) =>
// 	<NavLink exact to={tabs.link}  className="col col-33" activeClassName="active" key={i}>
// 		<span className={tabs.icon}></span>
// 	</NavLink>
// );

const Nav = (props) => {
    return (
		<nav className="bar-tab row">
			<NavLink exact to='/' className="col" activeClassName="active">
                <i className='fa fa-adn'></i>
                <span>精选</span>
			</NavLink>
            <NavLink to={{
                    pathname: `/soft`,
                    state: {type: 'soft'}
                }} className="col" activeClassName="active">
                <i className='fa fa-eercast'></i>
                <span>软件</span>
			</NavLink>
            <NavLink to={{
                    pathname: `/game`,
                    state: { type: 'game' }
                }} className="col" activeClassName="active">
                <i className='fa fa-grav'></i>
                <span>游戏</span>
            </NavLink>
            <NavLink to='/classify' className="col" activeClassName="active">
                <i className='fa fa-buysellads'></i>
                <span>分类</span>
            </NavLink>
		</nav>
	);
};

export default Nav;
