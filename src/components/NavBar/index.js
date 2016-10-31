import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../Header';
import SideBar from '../SideBar';
import Footer from '../Footer';

import './navbar.scss';


export default class NavBar extends Component {

    constructor() {
      super()
      this.hideSideBar = this.hideSideBar.bind(this)
      this.showSideBar = this.showSideBar.bind(this)
      this.state = { showSideBar: false}
    }

    hideSideBar() {
      this.setState({ showSideBar: false });
    }

    showSideBar() {
      this.setState({ showSideBar: true });
    }

    render() {

        let bioPath, projectsPath,labPath, photoPath, tumblrPath, blogsPath;
        if (module.hot) {
            bioPath = '/bio';
            projectsPath = '/projects';
            labPath = '/lab';
            photoPath = "/photo";
            tumblrPath = "/tumblr";
            blogsPath = "/blogs";
        } else {
            bioPath = '/portal/bio';
            projectsPath = '/portal/projects';
            labPath = '/portal/lab';
            photoPath = "/portal/photo";
            tumblrPath = "/portal/tumblr";
            blogsPath = "/portal/blogs";
        }

		return (
			<div>
                <div className="headerContainer">
                    <Header />
                    <nav className="navMenu">
                        <ul>
                            <li><Link className="blog-nav-item transition" to={bioPath}>Bio</Link></li>
                            <li><Link className="blog-nav-item transition" to={projectsPath}>Projects</Link></li>
                            <li><Link className="blog-nav-item transition" to={labPath}>Lab</Link></li>
                            <li><Link className="blog-nav-item transition" to={photoPath}>Photo</Link></li>
                            <li><Link className="blog-nav-item transition" to={blogsPath}>Blogs</Link></li>
                            <li><Link className="blog-nav-item transition" to={tumblrPath}>Tumblr</Link></li>
                        {
                        //<li><IndexLink className="blog-nav-item transition" onClick={this.showSideBar} to="/portal">Home</IndexLink></li>
                        //<li><Link className="blog-nav-item transition" onClick={this.showSideBar} to="/portal/about">About</Link></li>
                        //<li><Link className="blog-nav-item transition" onClick={this.showSideBar} to="/portal/projects">Projects</Link></li>
                        //<li><Link className="blog-nav-item transition" onClick={this.showSideBar} to="/portal/contact">Contact</Link></li>

                            }

                        </ul>
                    </nav>
                </div>
            <div className="container">
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={50}
                        >
                            {this.props.children && React.cloneElement(
                                this.props.children, {
                                    key: this.props.location.pathname,
                                    onHideSideBar: this.hideSideBar,
                                    onShowSideBar: this.showSideBar
                            })}
                    </ReactCSSTransitionGroup>
                    { this.state.showSideBar ? <SideBar /> : null }
            </div>
			<Footer />
			</div>
		)
	}
}
