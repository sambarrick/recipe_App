import React from 'react'
import { checkAuth } from "../Router";
import { Link } from "react-router-dom";

const Home = (props) => {
        return (
            <div>
            <div className="loggedin-header">
            {checkAuth() && 
                <h1>Welcome (user name), what's cookin'</h1>
            }
                </div>
            </div>
        )
    }


export default Home;