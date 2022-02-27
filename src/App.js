import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./common/main.scss";
import Details from "./components/details/Details";
import List from "./components/list/List";

const AppRouter = () => {
    return (
        <div id="app-wrapper">
            <Router>
                <Routes>
                    <Route exact path="/" element={<List />} />
                    <Route path="/movie-detail/:id" element={<Details />} />
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;
