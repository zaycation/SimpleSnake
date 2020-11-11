/**
 * /* eslint-disable eqeqeq
 *
 * @format
 */

/* eslint-disable default-case */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StickyNav from './components/Navbar';
import HomePage from './pages/HopePage/HomePage';
import About from './pages/About/About';
import DevContent from './pages/DevLogs/DevLogs';
import Bitcoin from './pages/BTC/Bitcoin';
import Xmr from './pages/XMR/xmr';

const App = () => {
	return (
		<>
			<StickyNav />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/about' component={About} />
				<Route path='/devLog' component={DevContent} />
				<Route path='/xmr' component={Xmr} />
				<Route path='/btc' component={Bitcoin} />
			</Switch>
		</>
	);
};

export default App;
