import React, { Component } from 'react';
import axios from 'axios';
import jsonp from 'jsonp';
import tumblrAPI from './tumblrList.json';
import './tumblr.scss';

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
                console.log(this.state.item)
            });
    }

	render(){
		return (
			<div className="tumblrContainer">
			    <h2>Tumblr</h2>
            </div>
		)
	}
}
