import React, { Component } from 'react';

class Dashboard extends Component{
    // className="dashboard container"

    constructor() {
        super();
        //this.storage = firebase.storage();


        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            userInput: '',
            items: []
        };
    }


    handleClick = (event) => {
        console.log('this is:', this);
        event.preventDefault();
        var x = document.getElementById("story")
        this.state.items.push(x.value);
        this.setState({
            userInput: ''
        });
        ; 
        //console.log(this.state.items)
    }

        deleteStory(item) {
            // no event 
            // pass the item to indexOf
            const array = this.state.items;
            const index = array.indexOf(item);
            array.splice(index, 1);
            this.setState({
                items: array
            });
        }

        renderStories() {
            console.log("render" ,this.state.items)
            return this.state.items.map((item) => {
                return (
                    <div className="list-group-item" key={item}>
                        {item} | <button onClick={this.deleteStory.bind(this, item)}>X</button>
                    </div>    
            );
    });
    }

    render(){
        return (
            //value={this.state.userInput}
                <div class="container">
                   
                    <label for="story">What did you do today? </label>
                    <textarea id="story" placeholder="Type your text here."  className="form-control mb-2"> </textarea>
                    <div class="container">
                        <button onClick={this.handleClick}>Save</button>
                    </div>
                    <div className="list-group">
                        {this.renderStories()}
                    </div>
                </div>
        )
                    }

   
}
export default Dashboard