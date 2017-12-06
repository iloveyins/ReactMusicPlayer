import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Player from './page/player'
import MusicList from './page/musiclist'
import { MUSIC_LIST } from './config/musiclist'

let duration = null;

let Root = React.createClass({
  getInitialState(){
      return {
         musiclist : MUSIC_LIST,
         currentMusciItem : MUSIC_LIST[0]
      }
  },
  componentDidMount(){
      $("#player").jPlayer({
        ready:function(){
          $(this).jPlayer('setMedia',{
            mp3:'http://sc1.111ttt.com/2017/1/11/11/304112003137.mp3'
          }).jPlayer('play');
        },
        supplied:'mp3',
        wmode:'window'
      });
  },
  componentWillMount(){

  },
  render(){
    return (
      <div className="h100">
          <Header />
          {/* <Player currentMusciItem = { this.state.currentMusciItem }></Player> */}
          <MusicList musiclist = { this.state.musiclist }></MusicList>
          <Footer></Footer>
      </div>
    );
  }
});

export default Root;



