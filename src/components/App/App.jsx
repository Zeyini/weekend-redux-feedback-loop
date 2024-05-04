import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Comments from './Comments';
import Feeling from './Feeling';
import Supported from './Supported';
import Understanding from './Understanding';
import Feedback from '../Feedback';
import Thankyou from '../Thankyou';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
<Router>
      <Route exact path='/'>
      <Feeling />
      </Route>
 <Route exact path='/Understanding'>
      <Understanding />
      </Route>

      <Route exact path='/Supported'>
      <Supported />
      </Route>

      <Route exact path='/Comments'>
      <Comments />
      </Route>

      <Route exact path='/Feedback'>
      <Feedback />
      </Route>
      <Route exact path='/Thankyou'>
      <Thankyou />
      </Route>
      </Router>
    </div>
  );
}

export default App;
