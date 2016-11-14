import React, { Component } from 'react';
import axios from 'axios';
import labAPI from './labList.json';
import ReactSlick from '../../components/reactSlick';

import './lab.scss';

export default class Lab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    componentDidMount() {
        axios.get(labAPI)
            .then(res => {
                this.setState({item: res.data.response.posts})
            });
    }

	render(){
        console.log(this.state.item)
		return (
			<div className="labContainer">
			    <h2>Lab</h2>
                <ReactSlick jsonDate={this.state.item} />
            </div>
		)
	}
}
