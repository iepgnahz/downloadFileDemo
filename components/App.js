import  React, { Component }  from 'react';
import '../style/index';


const FunctionComponent = ({x,y,z,f}) => (
  <div>
    {x} + {y}  + {z}
  </div>
);   //这是一个无状态组件,要记住定义在类前面

const label = {x:1,y:2,z:3};


export default class App extends Component{
  render(){
    return (
      <div className="test">
        <i className='fa fa-frown-o'></i>
        这是我的第一个react页面！
        <div className="btn-group">
          <button type="button" className="btn btn-default">Left</button>
          <button type="button" className="btn btn-default">Middle</button>
          <button type="button" className="btn btn-default">Right</button>
        </div>
        <FunctionComponent {...label}  f={'d'} />

      </div>
    )
  }
}

