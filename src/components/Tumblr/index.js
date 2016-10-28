import React, { Component } from 'react';
import axios from 'axios';
import jsonp from 'jsonp';
import Masonry from 'react-masonry-component';
import tumblrAPI from './tumblrList.json';
import './tumblr.scss';

let masonryOptions = {
    transitionDuration: 0
};

{
    /*const urlData = 'http://api.tumblr.com/v2/blog/conrad-woo.tumblr.com/posts?' +
     //'tag=region&' +
     //'tag=italy&' +
     'api_key=tiR2XYIkXPsuYbtvDIQGR1k5iC4YBRdKxSvlZZW2jNzcxkoRtb&' +
     'callback=JSON_CALLBACK';*/
}

export default class Tumblr extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    componentDidMount() {

        {//
            /*jsonp(urlData, null, function (err, data) {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(data.response.posts)
                }
            });*/
        }
        axios.get(tumblrAPI)
            .then(res => {
                this.setState({item: res.data.response.posts})

            });
    }

	render(){
        console.log(this.state.item)
        var childElements = this.state.item.map(function(element, index){
            return (
                <li className="image-element-class" key={index}>
                    <img width="100px" src={element.photos[0].original_size.url} />
                </li>
            );
        });

		return (
			<div className="tumblrContainer">
			    <h2>Tumblr</h2>

                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'ul'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                >
                    {childElements}
                </Masonry>

            </div>
		)
	}
}
