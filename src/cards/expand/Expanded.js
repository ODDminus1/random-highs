import React, {Component} from 'react';
import './Expanded.css';

class Expanded extends Component {
  render() {
    let collapser = this.props.params.collapser;
    return <div
      onClick={() => collapser()}
      className={"expanded"}
    >
      <div className={"expandedImageContainer"}>
        <img src={this.props.params.imageUrl} className={"expandedImage"}/>
      </div>
    </div>
  }
}

export default Expanded
