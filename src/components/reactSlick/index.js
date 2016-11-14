import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';
import './reactSlick.scss';

export default class reactSlick extends Component {

    render(){

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };

        const childElements = this.props.jsonDate.map(function(element, index){
            return (
                <Slider {...settings} key={index}>
                    <div>
                        <h3>{element.date}</h3>
                    </div>
                </Slider>
            );
        });

        return (
            <div>
                {childElements}
            </div>
        )
    }
}