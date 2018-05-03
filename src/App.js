// App.js is a React ES6 Class Component
//! The App component is only the declaration, Not the usage.
//! <App /> is the usage
// App.js also is a component declaration:
// after you have declared a component, you can 
// use it as element everywhere in your application.
// It will produce an instance of your component

import React, { Component } from 'react';
import Featured from './components/Featured.js';
import TrailList from './components/TrailList.js';
import './App.css';

class App extends Component {
  // render() is what the element returns.
  // This is the virtual DOM
  render() {
    const title = 'HAPPY TRAILS!';

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{title}</h1>
        </header>
            <div className="App-intro">
              <div className='ui unstackable items'>
              <Featured />
              </div>
            </div>
            <div className='image'>
          
            </div>
                </div>
    );
  }
}
export default App;
