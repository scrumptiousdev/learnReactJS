import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img className="logo" src="img/pluralsight-logo.png" />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
