import React, {Component} from 'react';
import './CardSection.css'
import CardTuple from "./CardTuple";

let pokerCards = [
  {
    key: "jack",
    cardName: "jack",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/800px-Playing_card_spade_J.svg.png"
  },
  {
    key: "queen",
    cardName: "queen",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/800px-Playing_card_spade_Q.svg.png"
  },
  {
    key: "king",
    cardName: "king",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/800px-Playing_card_spade_K.svg.png"
  },
  {
    key: "ace",
    cardName: "ace",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/800px-Playing_card_spade_A.svg.png"
  }
];

class CardSection extends Component {
  render() {
    const iterator = [0, 1, 2, 3];
    return <div className={"cardList"}>
      {iterator.map(i => {
        var cardProps = {pokerCard: pokerCards[i], magicCard: this.props.cards != null ? this.props.cards[i] : null};
        return <CardTuple cardProps={cardProps}/>
      })}
    </div>;
  }
}

export default CardSection;
