import React from 'react';
import Progerss from '../components/progress'
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
            progress:e.jPlayer.status.currentPercentAbsolute //获取当前进度
          })
      });
  },
  componentWillMount(){
    $('#player').unbind($.jPlayer.event.timeupdate);
  },
  //进度条
  progressChangeHandler(progress){
      $('#player').jPlayer('play',duration*progress);
  },
  //静音
  changeVolumeHanler(e){
      if(this.state.volume == 0){
         this.state.volume = 1;
      }
      else{
        this.state.volume = 0;
      }
    $('#player').jPlayer('volume',this.state.volume);
  },
  //播放与暂停
  play(){
      if(this.state.isPlay){
          $('#player').jPlayer('pause');
      }else{
          $('#player').jPlayer('play');
      }
      this.setState({
        isPlay:!this.state.isPlay
      });
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
          <div className="UserOper">
              <div className="item">
                <a></a>
                <a></a>
                <a></a>
              </div>
              <div className="OperUl">
                <div><a><i className="fa fa-random" aria-hidden="true"></i></a></div>
                <div><a className="OperLoop"><i className="fa fa-backward" aria-hidden="true"></i></a></div>
                <div><a className="OperLoop" onClick={this.play}><i className={`fa ${this.state.isPlay?'fa-pause':'fa-play'}`} aria-hidden="true"></i></a></div>
                <div><a className="OperLoop"><i className="fa fa-forward" aria-hidden="true"></i></a></div>
                <div><a onClick={this.changeVolumeHanler}><i className={` fa ${this.state.volume == 0?'fa-volume-off':'fa-volume-up'}`} aria-hidden="true"></i></a></div>
              </div>
          </div>
      </div>
    );
  }
})

export default Player;
