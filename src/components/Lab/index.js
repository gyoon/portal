import React, { Component } from 'react';
import THREE from 'three';
import SettingsStore from './settings_store';
import Scene3D from './three/scene.react';
import Minecraft from './three/minecraft.react';
import World from './three/world.react';
import Controls from './controls.react';
import Stats from './stats.react';
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
