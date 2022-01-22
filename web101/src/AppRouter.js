import React from "react"
import {Route, Switch} from "react-router";
import App from "./App";
import Login from "./Login";
import {BrowserRouter} from "react-router-dom";


class AppRouter extends React.Component{

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Switch>
                        <Route exact path= "/" component={App}></Route>
                        <Route path= "/login" component={Login}></Route>
                    </Switch>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;