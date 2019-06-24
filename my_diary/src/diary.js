import React, { Component } from 'react';
import Navbar from './Navbar';
import Dash from './Dashboard';

import { BrowserRouter as Router } from "react-router-dom";

class Diary extends Component {
	render(){
	    return(
    <Router>
        <div>
            <Navbar />
        </div>
        <div class="container">
            <Dash />
        </div>
    </Router>
	    )
    }
}

export default Diary;