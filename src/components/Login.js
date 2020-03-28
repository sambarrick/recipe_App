import React, { Component } from "react";
import {TextField, Button, Container} from "@material-ui/core";
import { Link } from 'react-router-dom';

class App extends Component {
    state = {
      username: "",
      password: "",
      loggedIn: false
    }
  
    handleTextChange = e => {
      const state = { ...this.state };
      state[e.target.name] = e.target.value;
      this.setState(state);
    }

    login = e => {
      e.preventDefault();
      // set cookie here
      document.cookie = "loggedIn=true;max-age=60*10000";
     window.location.replace("/home");
    }
  
    render() {
      return (
        <div className="App">
          <Container maxWidth="sm">
            <form className="login-form" onSubmit={this.login}>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.username}
                name="username"
                label="Username"
                type="text" />
                <br />
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.password}
                name="password"
                label="Password"
                type="password" />
                <br />
              <Button className="login-button"
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                // onClick. Since this is a class based component, props are
                // passed automatically but you need to reference "this"
                // to make it work
                >Login</Button>
            </form>
          
        
          
          <form className="signup-form">
                <h6 className="no-account">Don't have an account?</h6>
                <Link to="/signup"><Button className="signup-button"
                variant="contained"
                color="secondary"
                fullWidth
                >
                Signup</Button></Link>
                </form>
                </Container>
        </div>
      );
    }
  }
  
  export default App;