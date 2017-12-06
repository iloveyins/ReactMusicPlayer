import React from 'react'
import './footer.less'

let Footer = React.createClass({
    getInitialState(){
        return {
          isPlay:true
        }
    },
     //静音
  changeVolumeHanler(e){
      debugger;
    if(this.props.volumes > 0){
        $('#player').jPlayer('volume',1);
    }
    else{
        $('#player').jPlayer('volume',0);
    }
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
            <div className="UserOper">
                <div className="item">
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
                <div className="OperUl">
                    <div><a><i className="fa fa-random" aria-hidden="true"></i></a></div>
                    <div><a className="OperLoop"><i className="fa fa-backward" aria-hidden="true"></i></a></div>
                <div>
                    <a className="OperLoop"  onClick={this.play}>
                <i className={`fa ${this.state.isPlay?'fa-pause':'fa-play'}`} aria-hidden="true"></i>
                </a>
                </div>
                    <div><a className="OperLoop"><i className="fa fa-forward" aria-hidden="true"></i></a></div>
                    <div><a onClick={this.changeVolumeHanler}><i 
                    className={`fa ${this.props.volume == 0?'fa-volume-off':'fa-volume-up'}`} aria-hidden="true"></i></a></div>
                </div>
            </div>
        )
    }
});

export default Footer;