<<<<<<< HEAD
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
=======
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {AppBar, Toolbar,IconButton, Typography, Button  } from '@material-ui/core'
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909

import MenuIcon from "@material-ui/icons/Menu";

<<<<<<< HEAD
const Header = (props) => {
  return (
=======
const Header  = (props) => {
    return (
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography style={{ flexGrow: 1 }} variant="h6">
          <span role="img" aria-label="popcorn">
            🍿
          </span>
          <Link to="/">Movie List</Link>
          <span role="img" aria-label="television">
            📺
          </span>
        </Typography>
        {props.user && <span>{props.user.userName}</span>}
        {props.user && (
          <span>
            <IconButton color="inherit">
              <Link to="/settings">
                <SettingsIcon />
              </Link>
            </IconButton>
<<<<<<< HEAD
            <Button onClick={props.onLogout} color="inherit">
              Logout
            </Button>
          </span>
        )}
      </Toolbar>
=======
            <Typography
            style = {{flexGrow : 1,}}
             variant="h6">
               <span role="img" aria-label="popcorn">🍿</span> Movie List <span role="img" aria-label="television">📺</span>
            </Typography>
            {props.user && <span>{props.user.userName}</span>}
            {props.user && <Button onClick={props.onLogout} color="inherit">Logout</Button>}            
        </Toolbar>
>>>>>>> 93d568eb09bd0f5cb15041fc1284aba5e17bf909
    </AppBar>
  );
};

export default Header;
