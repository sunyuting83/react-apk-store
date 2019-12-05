import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdImg extends Component {
    constructor(props) {
        super(props);
        let data = this.props.data;
        this.state = {
            img: data
        }
    }
    
    render() {
        let img = this.state.img;
        return (
            <div>
                {img &&  (
                    <div className="swiper adimg">
                        <Link to={`/item/${img.id}`}><img src={img.img} className="img-100" alt={img.id} /></Link>
                    </div>
                )}
            </div>
        );
    }
}

export default AdImg;
