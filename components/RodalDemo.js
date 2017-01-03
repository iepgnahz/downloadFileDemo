import React, {Component} from 'react';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
export default class RodalDemo extends Component {
  constructor(props) {
    super(props);
    this.state={
      visible:false
    }
  }

  show() {
    this.setState({
      visible:true
    })
  }

  hide(){
    this.setState({
      visible:false
    })
  }



  render() {
    return (

            <div>
              <button onClick={this.show.bind(this)}>show</button>

              <Rodal animation='door'  visible={this.state.visible} onClose={this.hide.bind(this)}>
                <div>Content</div>
              </Rodal>
            </div>
          )



  }
}