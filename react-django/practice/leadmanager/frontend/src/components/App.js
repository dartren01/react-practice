import React, { Component } from 'react';
import React, { render } from 'react-dom';

class App extends Component {
    render() {
        return <h1>React App</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))