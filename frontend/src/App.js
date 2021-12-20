import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar"
import MoviesList from "./components/movies-list.component";
import EditMovies from "./components/edit-movies.component";
import CreateMovies from "./components/create-movies.component";
import CreateUser from "./components/create-user.component";
import "./App.css"

function App() {
  //just see how the const backend url is sent to all the components 
  const BACKEND_URL = "https://react-movie-db-123.herokuapp.com"
  //const BACKEND_URL ="http://localhost:5000"
  return (
    <Router>
      <div >
        <Navbar />
        <br />
        <div className="container">
          <Switch>
            {/* if i was sending the backend_url from here it was breaking, so i sent from where this component was called to link  */}
           <Route path="/edit/:id"  component={EditMovies} />
           
            <Route path="/create" component={()=><CreateMovies backend_url={BACKEND_URL}/>}/>
            <Route path="/user"  component={()=><CreateUser backend_url={BACKEND_URL}/>} />
            <Route path="/" >
              <MoviesList backend_url={BACKEND_URL} />
            </Route>
          </Switch>
          {/* note in this page two ways of passing props to component is shown in MoviesList and CreateMovies */}

        </div>

      </div>
    </Router>
  );
}

export default App;
