import React from "react"
import {Route, Switch} from "react-router";
import App from "./App";
import Login from "./components/Login";
import {BrowserRouter} from "react-router-dom";
import SignUp from "./components/SignUp";


class AppRouter extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Switch>
                        <Route exact path= "/" component={App}></Route>
                        <Route exact path= "/login" component={Login}></Route>
                        <Route exact path= "/signup" component={SignUp}></Route>
                    </Switch>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;