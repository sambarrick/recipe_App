import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'


class Signup extends Component {
    state = {
        open: false,
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.usersTotal + 1
        delete payload.open
        this.props.addUser(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                password: ''
            })
        }
    }

    render() {
        return (
            <Fragment>
            <div style={{ textAlign: 'center' }}>
          
                <Button className="signup-button"
                    variant="contained"
                    fullWidth
                    onClick={this.toggleDialog}
                >
                    Signup
                </Button>
            </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Create an Account</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="firstname" 
                                    placeholder="First Name" 
                                    value={this.state.firstname} 
                                    onChange={this.handleTextChange} 
                                    required />
                                    <TextField 
                                    id="lastname" 
                                    placeholder="Last Name" 
                                    value={this.state.lastname} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="username" 
                                    placeholder="Username" 
                                    value={this.state.username} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="email" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <TextField 
                                    id="password" 
                                    placeholder="Password" 
                                    value={this.state.password} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button id="id-submit-button" variant="contained" type="submit">Create Account</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

    export default Signup
