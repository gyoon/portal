import React, { Component, PropTypes } from 'react';
import './timeline.scss';

export default class Timeline extends Component {


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
        var aniClassName = this.state.loadAni === true ? 'timelineBox ani' : 'timelineBox';
        const childElements = this.props.jsonDate.map(function(element, index){
            if(element.type == "y"){
                return (
                    <li className={aniClassName} key={index}>
                        <div className="timelineDate bigDate"><div className="big">{element.date}</div></div>
                        <p className="timelineTitle">
                        {element.title}
                            <span className="timelineText">
                            {element.text}
                            </span>
                        </p>
                    </li>
                );
            } else if(element.type == "c") {
                return (
                    <li className={aniClassName} key={index}>
                        <div className="timelineDate">{element.date}</div>
                        <p className="timelineTitle company">
                            {element.title}
                            <span className="timelineText">
                                {element.text}
                            </span>
                        </p>
                    </li>
                )
            } else {
                return (
                    <li className={aniClassName} key={index}>
                        <div className="timelineDate">{element.date}</div>
                        <p className="timelineTitle">
                            {element.title}
                            <span className="timelineText">
                                {element.text}
                            </span>
                        </p>
                    </li>
                )
            }
        });

        return (
            <ul className="gyoonTimeline">
                {childElements}
            </ul>
        )
    }
}