import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import './mansonry.scss';

let masonryOptions = {
    transitionDuration: 0
};

export default class Mansonry extends Component {
	render(){
        const childElements = this.props.jsonDate.map(function(element, index){
            const captionText = element.caption.replace(/(<([^>]+)>)/gi, "");
            const Taglist = element.tags.join(', ');
            const dateView = element.date.substring(0, 10)
            return (
                <div className="gyoonCard" key={index}>
                    <div className="image">
                        <img src={element.photos[0].alt_sizes[2].url} />
                    </div>
                    <div className="content">
                        <a className="header">{element.blog_name}</a>
                        <div className="meta">
                            <span className="date">{element.type}</span>
                        </div>
                        <div className="description">
                            {captionText}
                        </div>
                    </div>
                    <div className="extra content">
                        <span>{Taglist}</span>
                        <span>{dateView}</span>
                    </div>
                </div>
            );
        });

		return (
            <Masonry
                onImagesLoaded={this.handleImagesLoaded}
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>
		)
	}
}
