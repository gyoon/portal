import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Home from '../view/Home';
import Bio from '../view/Bio';
import Projects from '../view/Projects';
import Lab from '../view/Lab';
import Photo from '../view/Photo';
import Blogs from '../view/Blogs';
import Tumblr from '../view/Tumblr';

import NavBar from '../containers/NavBar';

const NotFound = () => <h4>Not Found :( </h4>;

let hotPath = '/'

if (module.hot) {
    hotPath = '/'
} else {
    hotPath = '/portal'
}


export const routes = (
	<Route path={hotPath} title='App' component={NavBar}>
		<IndexRoute component={Home} />
        <Route path='bio' title='App - Bio' component={Bio} />
        <Route path='projects' title='App - Projects' component={Projects} />
        <Route path='lab' title='App - Lab' component={Lab} />
        <Route path='photo' title='App - Photo' component={Photo} />
        <Route path='blogs' title='App - Blog' component={Blogs} />
        <Route path='tumblr' title='App - Tumblr' component={Tumblr} />
		<Route path='*' title='404: Not Found' component={NotFound} />
	</Route>
);

export default routes;
