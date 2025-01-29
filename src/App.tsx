import React, {createContext, useState} from 'react';
import './css/App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import Profile from "../src/pages/Profile"
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Discover from "./pages/Decouvrir";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Logged from "./layout/Logged";
import NotLogged from "./layout/NotLogged";
import MaListe from "./pages/MaListe";
import PeopleDetails from "./pages/PeopleDetails";
import Category from "./pages/Category";

export const LogContext = createContext<LogContextProps | undefined>(undefined);

interface LogContextProps {
    isLogged: boolean;
    setIsLogged: any;
}

function App() {
    const [isLogged, setIsLogged] = useState(true);
    return (
        <div className="App">
            <BrowserRouter>
                <LogContext.Provider value={{isLogged, setIsLogged}}>
                    <Routes>
                        {isLogged ? <Route element={<Logged/>}>
                                <Route path="/Connexion" element={<Connexion/>}/>
                                <Route path="/Inscription" element={<Inscription/>}/>
                                <Route path="/MoviesDetails/:id" element={<MovieDetails/>}/>
                                <Route path="/PeopleDetails/:id" element={<PeopleDetails/>}/>
                                <Route path="/Category/:id" element={<Category/>}/>
                                <Route path="/Home" element={<Home/>}/>
                                <Route path="/Profile" element={<Profile/>}/>
                                <Route path="/Discover" element={<Discover/>}/>
                                <Route path="/MaListe" element={<MaListe/>}/>
                                <Route path="*" element={<Navigate to="/home" replace/>}/>


                            </Route>
                            :
                            <Route element={<NotLogged/>}>
                                <Route path="/Connexion" element={<Connexion/>}/>
                                <Route path="/Inscription" element={<Inscription/>}/>
                                <Route path="/MoviesDetails/:id" element={<MovieDetails/>}/>
                                <Route path="/PeopleDetails/:id" element={<PeopleDetails/>}/>
                                <Route path="/Category/:id" element={<Category/>}/>
                                <Route path="/Home" element={<Home/>}/>
                                <Route path="/Profile" element={<Profile/>}/>
                                <Route path="/Discover" element={<Discover/>}/>
                                <Route path="*" element={<Navigate to="/Connexion" replace/>}/>
                            </Route>
                        }
                    </Routes>
                </LogContext.Provider>
            </BrowserRouter>
        </div>
    )
        ;
}

export default App;
