import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './App';
import './index.css';

var routePages = () => {
    var route = window.location.hash.substr(1);
    ReactDOM.render(<App route={route} />, document.getElementById('root'));
}

$(window).on('hashchange', routePages);
routePages();
