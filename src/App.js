import './App.css';
import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ExerciseList from './ExerciseList/ExerciseList';
import Exercise from './Exercise/Exercise.js';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import ExerciseForm from './ExerciseForm/ExerciseForm';
import MealList from './MealsList/MealList';
import Meal from './Meal/Meal';
import MealForm from './MealForm/MealForm';
import BodyCompositionList from './BodyCompositionList/BodyCompositionList';

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
            <Link to='/body-composition'>Body composition</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Log in</Link>
          </nav>
        </header>

        <main>
          <Route exact path='/'>
            <LandingPage />
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
        </main>
      </Router>
    </div>
  );
}

export default App;
