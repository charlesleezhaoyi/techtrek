import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import CharlesPage from '../pages/CharlesPage';
import ShaunPage from '../pages/ShaunPage';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
import "../App.css";

Amplify.configure(awsconfig);

function App(){
    return (
        <div className = "Auth">
            <AmplifySignOut />
            <div>
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/CharlesPage' component={CharlesPage} />
                        <Route exact path='/ShaunPage' component={ShaunPage} />
                    </Switch>
                </div>
            </Router>
            </div>
        </div>
    );
};

export default withAuthenticator(App);