import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './SignUp/SignUp';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <h1> Fit Journal </h1>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/meals'>Meals</Link>
            <Link to='/exercises'>Exercises</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/signup'>Log in</Link>
          </nav>
        </header>

        <main>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
