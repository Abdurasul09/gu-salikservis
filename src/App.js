import React, {lazy} from "react";
import Hero from "./components/Main/Hero/Hero";
import {Route, Routes} from "react-router-dom";
import Partfolio from "./pages/partfolio";
import Home from "./components/Main/Home";

function App() {
    // const Landing = lazy(() => import('./landing'))
    // const AboutPage = lazy(() => import('./about-page'))
    return (
        <div>
            <Routes>
                {/*<Route path="/" exact element={<Landing/>}/>*/}
                {/*<Route path="/about" exact element={<AboutPage/>}/>*/}
                <Route path="/pages/partfolio" exact element={<Partfolio/>}/>
            </Routes>
            <Home/>

        </div>
    );
}

export default App;
