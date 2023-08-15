import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";


import CoinDetails from "./Pages/CoinDetails";
import CoinSummary from "./Pages/CoinSummary";


const App = () => {
    return (
        <div className="">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={CoinSummary} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;