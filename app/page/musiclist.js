import React from 'react';
import MusicListItem from '../components/musicListItem'
let MusicList = React.createClass({
    render(){
        let listEle= null;
        listEle = this.props.musiclist.map((item)=>{
            return(
            <MusicListItem
                key = {item.id}
                musicItem ={item}
            ></MusicListItem>
            )
        });
        return (
            <ul>
                {listEle}
            </ul>
        )
    }
 
});

export default MusicList;
