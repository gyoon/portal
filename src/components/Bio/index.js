import React, { Component } from 'react';
import axios from 'axios';
import historyAPI from './historyList.json';
import Timeline from '../TimelineUi';
import './bio.scss';

export default class Bio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeHistory: []
        }
    }

    componentDidMount() {
        axios.get(historyAPI)
            .then(res => {
                this.setState({timeHistory: res.data.posts})
            });

    }

	render(){
		return (
			<div className="bioContainer">
                <Timeline jsonDate={this.state.timeHistory} />
            </div>
		)
	}
}
