import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './labLayout.scss';

export default class LabLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadAni: false
        }
    }

    componentDidMount() {
        setTimeout(function() { this.setState({loadAni: true}); }.bind(this), 100);
    }

    render(){

        const aniClassName = this.state.loadAni === true ? 'labItem ani' : 'labItem';
        const childElements = this.props.jsonDate.map(function(element, index, array){

            let bioPath, i;
            if (module.hot) {
                bioPath = `/lab/${element.link}`;
            } else {
                bioPath = `/potal/lab/${element.link}`;
            }

            const library =  element.library.split(',').map(function(element, index, array){
                return (
                    <span key={index}>{element}</span>
                )
            })

            return (
                <div key={index} className={aniClassName}>
                    <Link to={bioPath}><img src={element.src} /></Link>
                    <div className="titleBox">
                        <h3><Link to={bioPath}>{element.name}</Link></h3>
                        <span>{element.date}</span>
                    </div>
                    <div className="desc">{element.desc}</div>
                    <div className="library">{library}</div>
                </div>
            );
        });

        return (
            <div className="labBox">
                <div className="labList">
                    {childElements}
                </div>
            </div>
        )
    }
}