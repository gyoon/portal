import THREE from 'three';
import React from 'react';
import ReactDOM from 'react-dom';
import React3 from 'react-three-renderer';
import SettingsAction from '../settings_action';
import OrbitControls from '../OrbitControls';
import World from './world.react';
import Minecraft from './minecraft.react';

import texHead from './textures/head.png';
import texBody from './textures/body.png';
import texArm from './textures/arm.png';
import texLeg from './textures/leg.png';
/* scene graph */

class SceneComponent extends React.Component {

    static displayName = 'Scene3D';

    constructor(props) {
        super(props);
        this._mouseUpListener = this._onMouseUp.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        return !nextProps.sliderBusy;
    }

    componentWillReceiveProps(){
    }

    componentDidMount(){
        this._canvas = ReactDOM.findDOMNode(this.refs.react3);
        this._camera = this.refs.camera;
        this._canvas.addEventListener('mouseup', this._mouseUpListener, false);
        this._controls = new THREE.OrbitControls(this._camera, this._canvas);
    }

    componentWillUnmount(){
        this._canvas.removeEventListener('mouseup', this._mouseUpListener, false);
        this._controls.dispose();
    }

    _onMouseUp(e){
        SettingsAction.updateCamera({
            position: this._camera.position,
            quaternion: this._camera.quaternion
        });
    }

    render() {

        const width = window.innerWidth;
        const height = window.innerHeight;

        let scene = (
            <React3
                ref="react3"
                mainCamera="camera"
                width={width}
                height={height}
                antialias
                shadowMapEnabled={true}
                clearColor={0xffffff}
            >
                <resources>
                    <texture
                        resourceId="textureHead"
                        url={texHead}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        anisotropy={16}
                    />
                    <texture
                        resourceId="textureBody"
                        url={texBody}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        anisotropy={16}
                    />
                    <texture
                        resourceId="textureArm"
                        url={texArm}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        anisotropy={16}
                    />
                    <texture
                        resourceId="textureLeg"
                        url={texLeg}
                        wrapS={THREE.RepeatWrapping}
                        wrapT={THREE.RepeatWrapping}
                        anisotropy={16}
                    />
                    <meshLambertMaterial
                        resourceId="head"
                        side={THREE.DoubleSide}
                    >
                        <textureResource
                            resourceId="textureHead"
                        />
                    </meshLambertMaterial>
                    <meshLambertMaterial
                        resourceId="body"
                        side={THREE.DoubleSide}
                    >
                        <textureResource
                            resourceId="textureBody"
                        />
                    </meshLambertMaterial>
                    <meshLambertMaterial
                        resourceId="leftArm"
                        side={THREE.DoubleSide}
                    >
                        <textureResource
                            resourceId="textureArm"
                        />
                    </meshLambertMaterial>
                    <meshLambertMaterial
                        resourceId="rightArm"
                        side={THREE.DoubleSide}
                    >
                        <textureResource
                            resourceId="textureArm"
                        />
                    </meshLambertMaterial>
                    <meshLambertMaterial
                        resourceId="leftLeg"
                        side={THREE.DoubleSide}
                    >
                        <textureResource
                            resourceId="textureLeg"
                        />
                    </meshLambertMaterial>
                    <meshLambertMaterial
                        resourceId="rightLeg"
                        side={THREE.DoubleSide}
                    >
                        <textureResource
                            resourceId="textureLeg"
                        />
                    </meshLambertMaterial>
                </resources>
                <scene
                    ref="scene"
                >
                    <perspectiveCamera
                        ref="camera"
                        name="camera"
                        fov={50}
                        aspect={width / height}
                        near={1}
                        far={1000}
                        position={this.props.cameraPosition}
                        quaternion={this.props.cameraQuaternion}
                    />

                    <ambientLight
                        color={new THREE.Color(0x333333)}
                    />

                    <directionalLight
                        color={new THREE.Color(0x333333)}
                        intensity={5.5}
                        position={new THREE.Vector3(0, 0, 60)}
                        castShadow

                        shadowMapWidth={1024}
                        shadowMapHeight={1024}

                        shadowCameraLeft={-20}
                        shadowCameraRight={20}
                        shadowCameraTop={20}
                        shadowCameraBottom={-20}

                        shadowCameraFar={3 * 20}
                        shadowCameraNear={20}

                        position={new THREE.Vector3(0, 0, 20)}
                        lookAt={new THREE.Vector3(0, 0, 0)}
                    />

          {this.props.children}

                </scene>
            </React3>

        );
        return scene;
    }
}

SceneComponent.propTypes = {};

export default SceneComponent;