import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './CardTuple.css';
import PokerCard from './types/PokerCards';
import MagicCard from './types/MagicCard';
import Expanded from './expand/Expanded';

class CardTuple extends Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.state = {active: false};
  }

  collapseExpanded = () => {
    ReactDom.render(
      "",
      document.getElementById("fieldToExpand")
    )
  };

  expand = () => {
    let properties = {
      "imageUrl": this.props.cardProps.magicCard != null ? this.props.cardProps.magicCard.imageUrl : null,
      "collapser": this.collapseExpanded
    };
    ReactDom.render(
      <Expanded params={properties}/>,
      document.getElementById("fieldToExpand")
    )
  };

  render() {
    return <div className={"cardTuple"}
                onClick={this.expand}>
      <PokerCard pokerCard={this.props.cardProps.pokerCard != null ? this.props.cardProps.pokerCard : null}/>
      <MagicCard magicCard={this.props.cardProps.magicCard != null ? this.props.cardProps.magicCard : null}/>
    </div>
  }
}

export default CardTuple;
