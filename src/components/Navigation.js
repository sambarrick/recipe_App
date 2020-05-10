import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { checkAuth } from "../Router";
import { useAuth0 } from '../contexts/auth0-context';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(5)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <AppBar position="relative" className="nav-bar-color">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title} id="fwr-header">
             <Link to="/recipes">Friends With Recipes</Link> 
          </Typography>
          <ul className="nav-list">
           {/*   <li className="nav-list-item">
            {!checkAuth() ? <Link to="/login">Login</Link> 
            : <Link to="/recipes"></Link>} 
  </li> */}
            <li>
            {!isLoading && !user && (
              <div>
                <h3 onClick={loginWithRedirect} className="login-btn-navigation">
                  Login
                </h3>
              </div>
            )}
            </li>
            {!isLoading && user && (
              <div>
              <h3
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="logout"
                  >
                    Logout
              </h3>
                </div>
            
            )}
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  )
}