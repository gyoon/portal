import React, { Component, PropTypes } from 'react';
import React3 from 'react-three-renderer';
import THREE from 'three';

import './cube.scss';

export default class Home extends Component {

    constructor(props, context) {
        super(props, context);

        this.cameraPosition = new THREE.Vector3(0, 0, 10);

        // construct the position vector here, because if we use 'new' within render,
        // React will think that things have changed when they have not.

        this.state = {
            cubeRotation: new THREE.Euler(),
        };

        const d = 20;

        this.lightPosition = new THREE.Vector3(d, d, d);
        this.lightTarget = new THREE.Vector3(0, 0, 0);

        this.fog = new THREE.Fog(0xe3e3e3, 10, 40);

        this._onAnimate = () => {
            // we will get this callback every frame

            // pretend cubeRotation is immutable.
            // this helps with updates and pure rendering.
            // React will be sure that the rotation has now updated.
            this.setState({
                cubeRotation: new THREE.Euler(
                    this.state.cubeRotation.x + 0.1,
                    this.state.cubeRotation.y + 0.1,
                    0
                ),
            });
        };
    }

	render(){

        const width = window.innerWidth;
        const height = window.innerHeight;

        const d = 20;

		return(
            <div className="labContainer">
                <h2>Home</h2>
                <React3
                    mainCamera="camera" // this points to the perspectiveCamera below
                    width={width}
                    height={height}
                    clearColor={this.fog.color}
                    onAnimate={this._onAnimate}
                    shadowMapEnabled
                >
                    <scene
                        fog={this.fog}
                    >
                        <perspectiveCamera
                            name="camera"
                            fov={75}
                            aspect={width / height}
                            near={0.5}
                            far={10000}
                            position={this.cameraPosition}
                        />
                        <ambientLight
                            color={0xffffff}
                        />
                        <directionalLight
                            color={0xffffff}
                            intensity={1.75}

                            castShadow

                            shadowMapWidth={100}
                            shadowMapHeight={100}

                            shadowCameraLeft={-d}
                            shadowCameraRight={d}
                            shadowCameraTop={d}
                            shadowCameraBottom={-d}

                            shadowCameraFar={3 * d}
                            shadowCameraNear={d}

                            position={this.lightPosition}
                            lookAt={this.lightTarget}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            rotation={this.state.cubeRotation}
                        >
                            <boxGeometry
                                width={1}
                                height={1}
                                depth={1}
                            />
                            <meshBasicMaterial
                                color={0x333333}
                            />
                        </mesh>
                    </scene>
                </React3>
            </div>
		)
	}
}
