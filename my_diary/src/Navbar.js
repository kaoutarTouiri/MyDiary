import React from 'react'
import { Link } from 'react-router-dom'

import SignLinks from './SignIn'
import SignOut from './SignOut'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div class="container">
                <Link to="/" className="brand-logo"> MyDiary</Link>
                <SignLinks/>
                <SignOut/>
            </div>
        </nav>
        )
                }

export default Navbar