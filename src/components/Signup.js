import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'
import { Link } from "react-router-dom";


class Signup extends Component {
    state = {
        open: false,
        first_name: '',
        last_name: '',
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
                first_name: '',
                last_name: ''
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
                                    value={this.state.first_name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                    <TextField 
                                    id="lastname" 
                                    placeholder="Last Name" 
                                    value={this.state.last_name} 
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
