import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import Detail from './components/Detail';
import { useEffect, useState } from 'react';

function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:6813/', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry Dogs App</h1>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/dogs' component={DogCreate}/>
        <Route exact path='/dogs/:id' component={Detail}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
