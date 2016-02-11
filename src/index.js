'use strict';
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';


import App from './container/app/App';
import Home from './container/home/Home.js';
import About from './container/about/About.js';


ReactDOM.render(
        <Router>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
            </Route>

        </Router>,
    document.getElementById('root')
);
