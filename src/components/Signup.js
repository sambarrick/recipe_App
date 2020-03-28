import React, { Component } from "react";
import {TextField, Button, Container} from "@material-ui/core";
// import { render } from '@testing-library/react';

class App extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
      }

    handleTextChange = e => {
        const state = { ...this.state };
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    render() {
      return (
        <div className="signup-form">
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
                </form>
                </Container>
        </div>
    )
      }
}

export default App
