import React, {Component} from 'react'

class Demo2 extends Component{
  constructor(props){
    super(props);
    this.state = {liked:true};
  }

  handleClick(){
    this.setState({liked:!this.state.liked})

  }

  render(){
    const text = this.state.liked ? 'like' :  'don\'t liked';
    return (
      <p  onClick={this.handleClick.bind(this)}>
        You {text} this. Click to toggle.
      </p>
    )
  }
}

export default Demo2;
