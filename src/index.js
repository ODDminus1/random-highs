import React, {Component} from 'react';
import './index.css'
import CardSection from './cards/cards'
import Navbar from './navbar/Navbar'
import ReactDOM from 'react-dom'

let types = "instant,sorcery";
let count = 4;
let backendBaseUrl = 'https://random-highs-backend.herokuapp.com';

class Layout extends Component {

  state = {cards: []};

  refreshCards() {
    fetch(backendBaseUrl + '/api/cards?numberOfCards=' + count + '&types=' + types)
      .then(res => res.json())
      .then((data) => {
        this.setState({cards: data})
      });
  }

  constructor(props) {
    super(props)
    this.state = {cards: []};
    this.refresh = this.refresh;
    this.refreshCards()
  }

  componentDidMount() {
    this.refreshCards()
  }

  refresh = () => {
    fetch(backendBaseUrl + '/api/cards?numberOfCards=' + count + '&types=' + types)
      .then(res => res.json())
      .then((data) => {
        this.setState({cards: data})
      });
    console.log("refreshed")
  }

  render() {
    return <div>
      <Navbar refresher={this.refresh}/>
      <CardSection cards={this.state.cards}/>
    </div>
      ;
  }
}

ReactDOM.render(
  <Layout/>,
  document.getElementById('root')
);
