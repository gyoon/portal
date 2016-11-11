import React, { Component } from 'react';
import THREE from 'three';
import App from './app.react';

import './lab.scss';

export default class Lab extends Component {
	render(){
		return (
			<div className="labContainer">
			    <h2>Lab</h2>
                <App />
            </div>
		)
	}
}
