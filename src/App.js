import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Movie_Details from "./components/Movie_Details";
import HeroSlider from "./components/HeroSlider";
import Login from "./components/Login";
import MyAc from "./components/MyAc";
import SearchResults from "./components/SearchResults";
import Watchlist from "./components/Watchlist";
import MoviePage from "./components/MoviePage";
import Tv from "./components/Tv";
import FixedBottomNavigation from "./components/Bnav";
import Episodes from "./components/Episodes";
import Person from "./components/Person";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Stats from "./components/Stats";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GResults from "./components/GResults";
import NotFound from "./components/Notfound";
import DetailsPage from "./components/Pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={window.location.key}
            timeout={500}
            classNames="fade"
          >
            <Switch>
              <Route path="/movie_details/:id/:media_type">
                <Movie_Details />
              </Route>
              <Route path="/in/:type/:id">
               <DetailsPage />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/profile">
                <MyAc />
              </Route>
              <Route path="/search/:query">
                <SearchResults />
              </Route>
              <Route path="/myWatchlist">
                <Watchlist />
              </Route>
              <Route path="/MOVIES">
                <MoviePage />
              </Route>
              <Route path="/TV">
                <Tv />
              </Route>
              <Route path="/Episodes/:id/:sid/:name">
                <Episodes />
              </Route>
              <Route path="/Stats">
                <Stats />
              </Route>
              <Route path="/Genre/:id/:idt">
                <GResults />
              </Route>
              <Route path="/Persons/:id/:name">
                <Person />
              </Route>
              <Route path="/">
                <Home />
              </Route>
           
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <div className="lg:hidden z-50">
          <FixedBottomNavigation />
        </div>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
