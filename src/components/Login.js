import React, { Component } from "react";
import {TextField, Button, Container, Typography, Grid, TableBody, TableCell, TableRow} from "@material-ui/core";
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import Signup from './Signup'

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
      document.cookie = "loggedIn=true;max-age=60*5000";
     window.location.replace("/recipes");
    }
  
    render() {
      return (
          <Container className="App" maxWidth="md">
            <form className="login-form" onSubmit={this.login}>
            <Avatar className="avatar">
 <LockOutlinedIcon />
 </Avatar>
 <br/>
            <Typography className="paper" component="h1" variant="h5">
          Sign in
        </Typography>
        <br />
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.username}
                variant="outlined"
                name="username"
                label="Username"
                type="text" />
                <br />
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.password}
                variant="outlined"
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
                <br />
                <Grid container>
                       <Grid item xs className="forgot-password">
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                       <Grid item className="no-password">
                         <Link to="/signup" variant="body2">
                           No account? Sign Up
                         </Link>
                       </Grid>
             </Grid>
            </form>
                </Container>
      );
    }
  }
  
  export default App;

// import React, { Component } from "react";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';


// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="/users" variant="body2">
//                 Don't have an account? Sign Up
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//       </Box>
//     </Container>
//   );
// }