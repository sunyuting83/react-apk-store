import React, { Component } from 'react';
import { get } from '../public/httpServer';

class HotKey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soft: [],
            game: []
        };
        this.pushKey = this.pushKey.bind(this);
    }
    pushKey(key) {
        this.props.handleSearchKey(key);
    }

    getData() {
        get('getkey').then((data) => {
            if (data) {
                this.setState({
                    soft: data.soft,
                    game: data.game
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.getData();

    }

    render() {
        let {soft, game} = this.state;
        return (
            <section className="content bgcolor-fff">
                <div className="bt-block">
                    <div>
                        <h1>软件热词</h1>
                        <div className="tagls">
                            {soft && soft.length > 0 && soft.map((item, i) => (
                                <span key={i} onClick={() => { this.pushKey(item) }}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1>游戏热词</h1>
                        <div className="tagls">
                            {game && game.length > 0 && game.map((item, i) => (
                                <span key={i} onClick={() => { this.pushKey(item) }}>{item}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HotKey;
