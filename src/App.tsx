import React, {Profiler, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./component/MynavBar";
import {BrowserRouter, Route, Routes} from "react-router";
import Profile from "../src/pages/Profile"
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Discover from "./pages/Decouvrir";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Logged from "./layout/Logged";
import NotLogged from "./layout/NotLogged";
import MaListe from "./pages/MaListe";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {isLogged ? <Route element={<Logged/>}>
                        <Route path="/Connexion" element={<Connexion/>}/>
                        <Route path="/Inscription" element={<Inscription/>}/>
                        <Route path="/MoviesDetails/:id" element={<MovieDetails/>}/>
                        <Route path="/Home" element={<Home/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Discover" element={<Discover/>}/>
                        <Route path="/MaListe" element={<MaListe/>}/>
                    </Route>
                    :
                        <Route element={<NotLogged/>}>
                            <Route path="/Connexion" element={<Connexion/>}/>
                            <Route path="/Inscription" element={<Inscription/>}/>
                            <Route path="/MoviesDetails/:id" element={<MovieDetails/>}/>
                            <Route path="/Home" element={<Home/>}/>
                            <Route path="/Profile" element={<Profile/>}/>
                            <Route path="/Discover" element={<Discover/>}/>
                            <Route path="/MaListe" element={<Connexion/>}/>
                        </Route>
                    }
                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
