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

class App extends React.Component {
  getLogOut() {
    window.location = '/';
    TokenService.clearAuthToken();
  }
  getNavBar() {
    if (TokenService.hasToken()) {
      return (
        <>
          <Link to='/'>Home</Link>
          <Link to='/meals'>Meals</Link>
          <Link to='/exercises'>Exercises</Link>
          <Link to='/body-composition'>Body composition</Link>
          <Link to='' onClick={this.getLogOut}>
            Log Out
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log in</Link>
        </>
      );
    }
  }
  getHomeRoute() {
    if (TokenService.hasToken()) {
      return <Chart />;
    } else return <LandingPage />;
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <header>
            <h1> Fit Journal </h1>
            <nav>{this.getNavBar()}</nav>
          </header>

          <main>
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
