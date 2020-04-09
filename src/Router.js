import React from "react";
import { Switch, Route, Redirect } from "react-router"
import cookie from "cookie"
import Login from "./containers/Login"
import Recipes from "./containers/Recipes";
import Groceries from "./containers/Groceries"
import RecipeInfo from "./containers/RecipeInfo"
import Signup from "./containers/Signup"

// Write checkAuth function here
export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => checkAuth() 
        ? <Component {...props} /> 
        : <Redirect to="/login" />
      }
    />
  )
}

const Router = () => {
  return (
    <Switch>
     <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      {/* <Route path="/users" component={Signup} /> */}
      <Route path="/groceries" component={Groceries} />
      <ProtectedRoute exact path="/recipes" component={Recipes} />
      <ProtectedRoute exact path="/recipeinfo" component={RecipeInfo} />
      {/*  <Route path="/business/:name" component={Business} /> */}
    </Switch>
  );
};

export default Router;
