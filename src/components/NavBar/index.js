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
      this.menuActive = this.menuActive.bind(this)
      this.state = {
          showSideBar: false,
          isActive: 'active'
      }
    }

    hideSideBar() {
        this.setState({ showSideBar: false });
    }

    showSideBar() {
        this.setState({ showSideBar: true });
    }

    menuActive() {
        this.setState({isActive: this.state.isActive === 'active' ? '' : 'active' });
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

        let pathname = location.pathname;

		return (
			<div>
                <div className="headerContainer">
                    <Header />
                    <nav className="navMenu">
                        <ul>
                            <li><Link className={pathname === bioPath ? 'active' : ''} onClick={this.menuActive} to={bioPath}>Bio</Link></li>
                            <li><Link className={pathname === projectsPath ? 'active' : ''} onClick={this.menuActive} to={projectsPath}>Projects</Link></li>
                            <li><Link className={pathname === labPath ? 'active' : ''} onClick={this.menuActive} to={labPath}>Lab</Link></li>
                            <li><Link className={pathname === photoPath ? 'active' : ''} onClick={this.menuActive} to={photoPath}>Photo</Link></li>
                            <li><Link className={pathname === blogsPath ? 'active' : ''} onClick={this.menuActive} to={blogsPath}>Blogs</Link></li>
                            <li><Link className={pathname === tumblrPath ? 'active' : ''} onClick={this.menuActive} to={tumblrPath}>Tumblr</Link></li>
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
