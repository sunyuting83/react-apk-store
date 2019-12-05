import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class indexSwiper extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            swiper: data
        }
    }

    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: true
            },
            direction: 'horizontal',
            spaceBetween: 15,
            slidesPerView:1.1,
            loopedSlides: 2
        })
    }

    render() {
        let swiper = this.state.swiper;
        return (
            <div>
                {swiper && swiper.length > 0 && (
                    <div className="swiper">
                        <div className='banner'>
                            <div className='swiper-container'>
                                <div className='swiper-wrapper'>
                                    {
                                    swiper.length > 0 && swiper.map((s, i) => (
                                        <Link to={`/item/${s.apks[0].id}`} key={s.id} className="swiper-slide"><img src={s.more} className="img-100" alt={s.title} /></Link>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default indexSwiper;
