import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import checkAuth from '../Router'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="relative" className="nav-bar-color">
        <Toolbar>
          <IconButton color="inherit">
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
             <Link to="/home">Friends With Recipes</Link> 
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              {/* <Link to="/listings">Listings</Link> */}
            </li>
            <li className="nav-list-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}
