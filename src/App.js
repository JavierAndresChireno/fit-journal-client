import './App.css';
import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import ExerciseList from './ExerciseList/ExerciseList';
import Exercise from './Exercise/Exercise.js';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';
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
        </main>
      </Router>
    </div>
  );
}

export default App;
