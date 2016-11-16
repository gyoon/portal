import React, { Component } from 'react';
import LabLayout from '../../components/LabLayout';

import './lab.scss';

import ironman from './resource/ironman.gif';

export default class Lab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: [
                {
                    "name": "Iron Man",
                    "link": "webGl",
                    "date": "2016.11.20",
                    "src":  ironman,
                    "desc": "Produced iron man paper art model using webGl",
                    "library": "javascript,react,three,react-three-renderer"
                },
                {
                    "name": "cube",
                    "link": "cube",
                    "date": "2016.11.20",
                    "src":  "",
                    "desc": "Produced iron man paper art model using webGl",
                    "library": "javascript,react,three,react-three-renderer"
                },
            ]
        }

    }

	render() {
		return (
			<div className="labContainer">
			    <h2>Lab</h2>
                <LabLayout jsonDate={this.state.item} />
            </div>
		)
	}
}
