import React, {Component,PropTypes} from 'react';
import '../style/index.css';
export default class Popup extends Component {
  constructor(props){
    super(props);
    this.state={
      disX: 0,
      disY: 0,
      top: 0,
      left: 0
    }
  }

  onMouseMove(x,y){
    console.log(document.documentElement.clientHeight)
    let left = x-this.state.disX;
    let top = y- this.state.disY;
    if(left<0){
      left= 0;
    }
    if(top<0){
      top=0;
    }
    if((left+200)> document.body.clientWidth){
      left= document.body.clientWidth-200;
    }
    if((top+200)> document.documentElement.clientHeight){
      top= (document.documentElement.clientHeight)-200;
    }
    this.setState({
      left,
      top
    })
  }


  componentDidMount(){
    const self = this;
    this.div.addEventListener('mousedown',(e)=>{self.getLocation(e,self)});
  }

  getLocation(e,self){
    let x = e.clientX;
    let y = e.clientY;
    let boxLeft = parseFloat(self.div.style.left);
    let boxTop = parseFloat(self.div.style.top);

    self.setState({
      disX: x-boxLeft,
      disY: y-boxTop
    },()=>{
      this.props.dragEnable();
    })
  }  //ok


  render() {
    let style={
      top:this.state.top+'px',
      left:this.state.left+'px'
    };

    return (
      <div className="popup"
           ref={(ref)=>{
             this.div = ref
           }}
           style={style}
      >Drag Me</div>
    )
  }
}

