import React, {Component} from 'react';
import './Navbar.css'
import '../cards/CardSection'

class Navbar extends Component {
  render() {
    return (
      <div className={"navbar"}>
        <HomeButton refresher={this.props.refresher}/>
      </div>
    );
  }
}

class HomeButton extends Component {
  render() {
    return <button type={"button"} className={"refreshButton"} onClick={() => this.props.refresher()}>Refresh</button>
  }
}

export default Navbar;