import React from 'react'

let MusciListItem = React.createClass({
    render(){
        let musicItem = this.props.musicItem;
        return (
            <li>
                <p><strong>{musicItem.title}</strong>-{musicItem.author}</p>
                <p></p>
            </li>
        )
    }
});

export default MusciListItem;