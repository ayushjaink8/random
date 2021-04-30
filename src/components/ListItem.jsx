import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        // props = properties
        var items = this.props.items;
        //console.log(items);
        console.log(this.props);

        return (
            <div>
                {items.map((t) => <li key={t}>{t}</li>)}
            </div>
        )
    }
}
