import React, { Component } from 'react'
import ListItem from "./ListItem"
export default class List extends Component {
    state={
        vegetables : ['Potato', "Tomato","Brl"],
        fruits : ['Apple', "Grapes","Orange"]
    }
    render() {
        // console.log(this.state);
        var {vegetables,fruits} = this.state;
        // var ListItem = require('./ListItem');
        //var fruits = this.state.fruits;
        return (
            <div>
                <ul>
                    <header>Vegetables</header>
                    {vegetables.map((i)=> <li key={i}>{i}</li>)}
                    <ListItem items={vegetables}/>
                </ul>
                <ul>
                    <header>Fruits</header>
                   {fruits.map((f)=> <li key={f}>{f}</li>)}
                </ul>
            </div>
        )
    }
}
