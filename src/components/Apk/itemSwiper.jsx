import React, { Component } from 'react';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class ItemSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            show: this.props.show
        };
        this.hideSwiper = this.hideSwiper.bind(this);
    }

    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: false,
            direction: 'horizontal',
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.state.show) {
            this.setState({
                show: nextProps.show
            })
        }
    }

    hideSwiper() {
        this.props.handleSwiper(false);
    }

    render() {
        let swipe = this.state.data;
        return (
            <div className={`item-swiper ${this.state.show ? 'active' : ''}`} onClick={this.hideSwiper}>
                {swipe && swipe.length > 0 && (
                    <div className='swiper-container'>
                        <div className='swiper-wrapper'>
                            {
                                swipe.length > 0 && swipe.map((s, i) => (
                                    <div key={i} className="swiper-slide"><img src={s} className="img-100" alt={i} /></div>
                                ))
                            }
                        </div>
                    </div>
                )}
                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default ItemSwiper;
