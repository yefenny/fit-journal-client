import './App.css';
import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ExerciseList from './ExerciseList/ExerciseList';
import Exercise from './Exercise/Exercise.js';
import TokenService from './Services/TokenService';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import ExerciseForm from './ExerciseForm/ExerciseForm';
import MealList from './MealsList/MealList';
import Meal from './Meal/Meal';
import MealForm from './MealForm/MealForm';
import BodyCompositionList from './BodyCompositionList/BodyCompositionList';
import BodyComposition from './BodyComposition/BodyComposition';
import BodyCompositionForm from './BodyCompositionForm/BodyCompositionForm';
import Chart from './Chart/Chart';
import menuImg from './images/menu.svg';
class App extends React.Component {
  state = {
    hideNav: true
  };
  getLogOut = () => {
    window.location = '/';
    TokenService.clearAuthToken();
  };
  getNavBar = () => {
    if (TokenService.hasToken()) {
      return (
        <ul>
          <li>
            <Link to='/' onClick={this.handleToglle}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/meals' onClick={this.handleToglle}>
              Meals
            </Link>
          </li>
          <li>
            <Link to='/exercises' onClick={this.handleToglle}>
              Exercises
            </Link>
          </li>
          <li>
            <Link to='/body-composition' onClick={this.handleToglle}>
              Body composition
            </Link>
          </li>
          <li>
            <Link to='' onClick={this.getLogOut}>
              Log Out
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            {' '}
            <Link to='/' onClick={this.handleToglle}>
              Home
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/signup' onClick={this.handleToglle}>
              Sign Up
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/login' onClick={this.handleToglle}>
              Log in
            </Link>
          </li>
        </ul>
      );
    }
  };
  getHomeRoute() {
    if (TokenService.hasToken()) {
      return <Chart />;
    } else return <LandingPage />;
  }
  handleToglle = () => {
    let value = !this.state.hideNav;
    this.setState({
      hideNav: value
    });
  };
  render() {
    const { hideNav } = this.state;

    return (
      <div className='App '>
        <Router>
          <header>
            <div className='title-menu'>
              <h1> FIT JOURNAL </h1>
              <button className='toggle-menu' onClick={this.handleToglle}>
                <img src={menuImg} alt='' />
              </button>
            </div>
            <nav className={hideNav ? 'hide-nav nav-bar' : 'nav-bar'}>
              {this.getNavBar()}
            </nav>{' '}
          </header>

          <main className='app-container'>
            <Route exact path='/'>
              {this.getHomeRoute()}
            </Route>
            <Route path='/signup'>
              <SignUp />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/exercises'>
              <ExerciseList />
            </Route>
            <Route path='/exercise/:id' component={Exercise} />
            <Route path='/new/exercise' component={ExerciseForm} />
            <Route path='/edit/exercise/:id' component={ExerciseForm} />
            <Route path='/meals' component={MealList} />
            <Route path='/meal/:id' exact component={Meal} />
            <Route path='/new/meal' exact component={MealForm} />
            <Route path='/edit/meal/:id' exact component={MealForm} />
            <Route
              path='/body-composition'
              exact
              component={BodyCompositionList}
            />
            <Route
              path='/body-composition/:id'
              exact
              component={BodyComposition}
            />
            <Route
              path='/new/body-composition'
              exact
              component={BodyCompositionForm}
            />
            <Route
              path='/edit/body-composition/:id'
              exact
              component={BodyCompositionForm}
            />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
