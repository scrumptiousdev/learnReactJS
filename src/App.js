import React, { Component } from 'react';
import Home from './components/homepage';
import About from './components/about/aboutpage';
import Header from './components/common/header';
import './App.css';

class App extends Component {
    render() {
        var Child;
        
        switch(this.props.route) {
            case 'about': Child = About; break;
            default: Child = Home;
        }
        
        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
}

export default App;
