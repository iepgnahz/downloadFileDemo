import React, {Component} from 'react';
import '../style/index.css';
export default class ClickBtn extends Component {
  constructor(props){
    super(props)
    this.state={
      status:'off',
      klass:'btn'
    }
  }

  on() {
    console.log('dianon')
    this.setState({status: 'on'})
  }

  off() {
    console.log('dianoff')
    this.setState({status: 'off'})
  }

  onClick(){
    console.log('diandian')
    status=this.state.status === 'off' ? 'on' : 'off'
    this.setState({status:status})
  }

  render() {
    return (
      <div ref="btn" onClick={this.onClick.bind(this)} className={this.state.klass + ' ' + this.state.status} >Click Me</div>
    );
  }
}
