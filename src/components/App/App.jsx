import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Comments from '../Comments/Comments.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Support from '../Support/Support.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Review from '../Review/Review.jsx';
import SubmissionComplete from '../SubmissionComplete/SubmissionComplete.jsx';
import Admin from '../Admin/Admin.jsx';

function App() {

  return (
    <Router>
      <div className='App'>

        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route path="/" exact>
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
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/complete">
          <SubmissionComplete />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>

      </div>
    </Router>
  );
}

export default App;
