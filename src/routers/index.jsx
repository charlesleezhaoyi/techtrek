import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import CharlesPage from '../pages/CharlesPage';
import ShaunPage from '../pages/ShaunPage';
// import { AdminDashboardPage, AdminBlogPage, AdminResumePage } from '../pagesAdmin'

import "../App.css";

export default () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/CharlesPage' component={CharlesPage} />
                    <Route exact path='/ShaunPage' component={ShaunPage} />
                </Switch>
            </div>
        </Router>
    );
};