import React, {Component} from "react";

class MagicCard extends Component {
  render() {
    return <div className={"cardContainer magicCardContainer"}>
      <img className={["cardImage", "magicCardImage"].join(" ")}
           src={this.props.magicCard != null ? this.props.magicCard.imageUrl : null}
           alt={this.props.magicCard != null ? this.props.magicCard.cardName : null}
      />
    </div>
  }
}

export default MagicCard;
