import React, {Component} from 'react';

class PokerCard extends Component {
  render() {
    return <div className={"cardContainer pokerCardContainer"}>
      <img className={["cardImage", "pokerCardImage"].join(" ")}
           src={this.props.pokerCard != null ? this.props.pokerCard.imageUrl : null}
           alt={this.props.pokerCard != null ? this.props.pokerCard.cardName : null}
      />
    </div>
  }
}

export default PokerCard;
