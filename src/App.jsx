import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import './App.css';

import Header from "./Components/Header";
import CoinDetails from "./Pages/CoinDetails";
import CoinSummary from "./Pages/CoinSummary";
import {WatchListContextProvider} from "./Context/CoinWatchList"

const App = () => {
    return (
        <div className="">
            <WatchListContextProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" Component={CoinSummary} />
                    </Routes>
                </BrowserRouter>
            </WatchListContextProvider>
        </div>
    )
}

export default App;