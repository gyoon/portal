import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import NavBar from '../components/NavBar';
import Bio from '../components/Bio';
import Lab from '../components/Lab';
import Photo from '../components/Photo';
import Tumblr from '../components/Tumblr';

import Home from '../components/Home';
import ReactTutPart1 from '../components/Blogs/BlogReactTutorial/PartOne';
import About from '../components/About';
import Projects from '../components/Projects';
import Tired from '../components/Projects/Tired';
import BackOffice from '../components/Projects/BackOffice';
import SWEChan from '../components/Projects/SWEChan';
import Contact from '../components/Contact';

import FilterSideBar from '../containers/FilterSideBar';

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
        <Route path='lab' title='App - Lab' component={Lab} />
        <Route path='photo' title='App - Photo' component={Photo} />
        <Route path='tumblr' title='App - Tumblr' component={Tumblr} />

		<Route path='reactTutPart1' title='App - React Tutorial Chapter 1' component={ReactTutPart1} />
		<Route path='about' title='App - About' component={About} />
		<Route path='projects' title='App - Projects' component={Projects} />
		<Route path='projects/projectTired' title='App - Projects - Tired' component={Tired} />
		<Route path='projects/backOffice' title='App - Projects - BackOffice' component={BackOffice} />
		<Route path='projects/sweChan' title='App - Projects - SWEChan' component={SWEChan} />
		<Route path='contact' title='App - Contact' component={Contact} />
		<Route path='*' title='404: Not Found' component={NotFound} />
	</Route>
);

export default routes;
