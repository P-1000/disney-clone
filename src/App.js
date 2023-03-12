import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Movie_Details from "./components/Movie_Details";
import HeroSlider from './components/HeroSlider';
import Login from './components/Login';
import MyAc from "./components/MyAc";
import SearchResults from "./components/SearchResults";
import Watchlist from "./components/Watchlist";


function App() {
  return (
    <div className="App">
        
        <Router>
        <Header/>
        <Switch>
          <Route path="/movie_details/:id/:media_type">
                   <Movie_Details />
          </Route>
          <Route path="/login">
                    <Login />
          </Route>
          <Route path="/profile" > 
                    <MyAc />
         </Route>
         <Route path="/search/:query">
              <SearchResults/>
         </Route>
         <Route path="/myWatchlist">
            <Watchlist/>
         </Route>
          <Route path="/" > 
                    <Home/>

         </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
