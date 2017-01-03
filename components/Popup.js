import React, {Component} from 'react';
import '../style/index.css';
let dom = window.document;
export default class Popup extends Component {
  constructor(props){
    super(props);
    let self = this;
    dom.addEventListener('mousemove', function (e) {self.onMouseMove(e)})
    dom.addEventListener('mouseup', function (e) {self.onMouseUp(e)})

    this.state={
      status:'block',
      left:0,
      top:0,
      startLeft:0,
      startTop:0,
      disX:0,
      disY:0,
      ready:false
    }
  }

  onMouseDown(e) {
    var x = e.clientX,
      y = e.clientY
    this.setState({ready: true, x: x, y: y, startLeft: this.state.left, startTop: this.state.top})
  }

  onMouseMove(e) {

    if (!this.state.ready) {return}

    let x = e.clientX,
      y = e.clientY;
    this.setState({
      left: this.state.startLeft+x-this.state.x,
      top: this.state.startTop + y - this.state.y
    })
  }

  onMouseUp(e){
    console.log('upshijian ')
    console.log(e.target)
    if(this.refs.popup !== e.target && this.state.status === 'block'){
      this.props.change(e);
    }
    this.setState({ready: false})
  }

  show() {
    this.setState({status: 'block'})
  }

  hide() {
    this.setState({status: 'none'})
  }

  render() {
    var style = {
      left: this.state.left,
      top: this.state.top,
      display: this.state.status
    };
    return (
      <div ref="popup" onMouseDown={this.onMouseDown.bind(this)} className="popup" style={style} >Drag Me</div>
    )
  }
}
