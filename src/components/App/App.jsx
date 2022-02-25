import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Comments from '../Comments/Comments.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Support from '../Support/Support.jsx';
import Understanding from '../Understanding/Understanding.jsx';

function App() {

  // remove nav bar when done with project
  return (
    <Router>
      <ul>
        <li>
          <Link to='/feeling'>Feeling</Link>
        </li>
        <li>
          <Link to='/understanding'>Understanding</Link>
        </li>
        <li>
          <Link to='/support'>Support</Link>
        </li>
        <li>
          <Link to='/comments'>Comments</Link>
        </li>
      </ul>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route path="/feeling" exact>
          <Feeling />
        </Route>
        <Route path="/understanding">
          <Understanding />
        </Route>
        <Route path="/support" exact>
          <Support />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>

      </div>
    </Router>
  );
}

export default App;
