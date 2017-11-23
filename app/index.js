import React from 'react'
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import Root from './root'

render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('root')
);

//浏览器热更新配置
if(module.hot){
  module.hot.accept('./root',()=>{
    const NewRoot = require('./root').default;
    render(
        <AppContainer>
          <NewRoot/>
        </AppContainer>,
        document.getElementById('root')
    );
  });
}
