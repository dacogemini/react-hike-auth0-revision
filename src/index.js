import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from '../src/App';
import TrailList from './components/TrailList.js';
import registerServiceWorker from './registerServiceWorker';

render((
<App />,
  <BrowserRouter>
    <div> 
        <Route exact path="/" component={App}  /> 
        <Route exact path="/trails" component={TrailList} /> 
    </div>
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
