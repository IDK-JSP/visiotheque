import React, {Profiler} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./component/MynavBar";
import {BrowserRouter, Route, Routes} from "react-router";
import Profile from "../src/pages/Profile"
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Discover from "./pages/Decouvrir";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                    <NavBar/>
                <Routes>
                    <Route path="/MoviesDetails/:id" element={<MovieDetails/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Discover" element={<Discover/>}/>
                </Routes>


        </BrowserRouter>
</div>
)
    ;
}

export default App;
