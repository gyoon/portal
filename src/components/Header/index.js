import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './header.scss';

export default class Header extends Component {
  render() {

      let indexPath
      if (module.hot) {
          indexPath = '/';
      } else {
          indexPath = '/portal/';
      }

      return (
  		<div className="blog-header">
            <h1>
                <Link className="blog-nav-item transition" to={indexPath}>Gyoon</Link>
            </h1>
  		</div>
  	)
  }
}
