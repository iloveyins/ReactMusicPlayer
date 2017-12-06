import React from 'react';
import Progerss from '../components/progress'
import Footer from '../components/footer'
import './player.less'

let duration = null;
let Player = React.createClass({
  getInitialState(){
      return {
        progress:0,
        volume:0,
        isPlay:true
      }
  },
  componentDidMount(){
      $('#player').bind($.jPlayer.event.timeupdate,(e)=>{
          duration = e.jPlayer.status.duration;
          this.setState({
            //progress:Math.round(e.jPlayer.status.currentTime)
            volume:e.jPlayer.options.volume, //获取当前音量
            progress:e.jPlayer.status.currentPercentAbsolute, //获取当前进度
          });
      });
  },
  componentWillMount(){
    $('#player').unbind($.jPlayer.event.timeupdate);
  },
  //进度条
  progressChangeHandler(progress){
      $('#player').jPlayer('play',duration*progress);
  },
  render(){
    return (
      <div className="player-page">
          <div className="headimg">
            <img src={this.props.currentMusciItem.conver} alt={this.props.currentMusciItem.title} />
          </div>
          <div className="content">
              <Progerss
              progress={this.state.progress}
              onProgressChange={this.progressChangeHandler}
              barColor="#2f9842"></Progerss>
              <h1 className='musicName'>{this.props.currentMusciItem.title}</h1>
              <h2 className="author">{this.props.currentMusciItem.author}</h2>
              <span className="lyric">-</span>
          </div>
      </div>
    );
  }
});
export default Player;
