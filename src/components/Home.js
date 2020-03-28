import React from 'react'
import { checkAuth } from "../Router";


const Home = (props) => {
        return (
            <div>
            <div className="loggedin-header">
            {checkAuth() && 
                <h1>Welcome {props.user.username}</h1>
            }
                </div>
            </div>
        )
    }


export default Home;