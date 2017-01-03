import React, {Component} from 'react';
import Popup from './ClickBtn';
import ClickBtn from './ClickBtn';
export default class DragDemo extends Component {
  constructor(props) {
    super(props);
    this.state={
      status:'off'
    }


  }

  change(e){
    if(this.button !== e.target){
      this.toggle();
    }
  }

  onClick(){
    this.toggle();
  }

  toggle(){
    this.setState({
      status: this.state.status === 'on' ? 'off' : 'on'
    },()=>{
      if(this.state.status === 'on'){
        this.button.on();
        this.popUp.show();
      }else {
        this.button.off();
        this.popUp.hide();
      }
    })
  }

  render(){
    return (
      <div className="component">
        <div onClick={this.onClick.bind(this)} >
          <ClickBtn ref={(ref)=>{
            this.button = ref;
          }} status={this.state.status} />
        </div>
        <Popup ref={(ref)=>{
          this.popUp = ref;
        }} change={this.change.bind(this)} />
      </div>
    )
  }
}