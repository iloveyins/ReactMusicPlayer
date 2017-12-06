import React from 'react'
import './musicListItem.less'

let MusciListItem = React.createClass({
    render(){
        let musicItem = this.props.musicItem;
        return (
            <li className="music-li">
                <p><strong>{musicItem.title}</strong> - {musicItem.author}</p>
                <p></p>
            </li>
        )
    }
});

export default MusciListItem;