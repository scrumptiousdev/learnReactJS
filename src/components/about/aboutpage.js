import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div>
            <h1>About</h1>
            <p>
                This application uses the following technologies:
            </p>
            <ul>
                <li>React</li>
                <li>React DOM</li>
                <li>React Router</li>
                <li>Flux</li>
                <li>Node</li>
                <li>Bootstrap</li>
            </ul>
        </div>
    );
  }
}

export default About;
