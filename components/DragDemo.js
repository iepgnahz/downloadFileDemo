import React, {Component} from 'react';
let dom = window.document;
import Popup from './Popup';
export default class DragDemo extends Component {
  constructor(props) {
    super(props);
    let self = this;
    dom.addEventListener('mousemove', (e) => {
      self.mouseMove(e, self)
    });
    dom.addEventListener('mouseup', () => {
      self.mouseUp(self)
    });
    this.state = {
      isDragged: false
    }
  }

  dragEnable() {
    this.setState({
      isDragged: true
    })
  }

  mouseMove(e, self) {
    if (this.state.isDragged) {
      self.popUp.onMouseMove(e.clientX, e.clientY)
    }
  }

  mouseUp(self) {
    self.setState({
      isDragged: false
    })

  }

  render() {
    return (
      <div>
        <Popup ref={(ref) => {
          this.popUp = ref;
        }}
               dragEnable={() => {
                 this.dragEnable()
               }}
        />
      </div>
    )
  }
}