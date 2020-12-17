/** @format */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/movies/:title/:id' component={MovieForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Redirect exact from='/' to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
