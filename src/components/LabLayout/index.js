import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './labLayout.scss';

export default class LabLayout extends Component {

    render(){
        const childElements = this.props.jsonDate.map(function(element, index){

            let bioPath;
            if (module.hot) {
                bioPath = `/lab/${element.url}`;
            } else {
                bioPath = `/potal/lab/${element.url}`;
            }

            return (
                <div key={index} className="labItem">
                    <h3>{element.date}</h3>
                    <Link to={bioPath}>{element.url}</Link>
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